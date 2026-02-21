const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const lightningcss = require("lightningcss");
const rss = require("@11ty/eleventy-plugin-rss");
const { createHighlighter } = require("shiki");
const siteData = require("./_data/site.json");

// Must match the slugify function in _posts/_posts.11tydata.js exactly.
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

module.exports = async (cfg) => {
  // Use polling for file watching — required for WSL where inotify events are unreliable.
  cfg.setChokidarConfig({ usePolling: true, interval: 10 });

  // Bundle and minify CSS via LightningCSS. Skips partials (files starting with _).
  cfg.addTemplateFormats("css");
  cfg.addExtension("css", {
    outputFileExtension: "css",
    compile: function (inputContent, inputPath) {
      if (path.basename(inputPath).startsWith("_")) return;
      return () => {
        const { code } = lightningcss.bundle({
          filename: path.resolve(inputPath),
          minify: true,
        });
        return Buffer.from(code).toString();
      };
    },
  });
  // Watch _sass/ partials so any change triggers a full CSS rebuild.
  cfg.addWatchTarget("_css/");

  cfg.addPlugin(rss);

  // Syntax highlighting via Shiki — dual-theme, prefers-color-scheme activated in _code.scss.
  const highlighter = await createHighlighter({
    themes: ["github-dark-dimmed", "github-light"],
    langs: [
      "javascript", "typescript", "jsx", "tsx",
      "rust", "python", "go", "ruby", "java", "c", "cpp",
      "bash", "shell", "html", "css", "scss",
      "json", "yaml", "toml", "markdown", "text"
    ],
  });

  cfg.amendLibrary("md", (mdLib) => {
    mdLib.set({
      highlight: (code, lang) => {
        const safeLang = highlighter.getLoadedLanguages().includes(lang) ? lang : "text";
        return highlighter.codeToHtml(code, {
          lang: safeLang,
          themes: { dark: "github-dark-dimmed", light: "github-light" },
          defaultColor: false,
        });
      },
    });
  });

  // --- Filters ---

  // Limit an array to the first N items. Usage: collection | limit(5)
  cfg.addFilter("limit", (arr, n) => arr.slice(0, n));

  // Human-readable date. Usage: date | dateDisplay → "February 14, 2026"
  cfg.addFilter("dateDisplay", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric", timeZone: "UTC"
    });
  });

  // ISO date string for datetime attributes. Usage: date | htmlDateStr → "2026-02-14"
  cfg.addFilter("htmlDateStr", (date) => {
    if (!date) return "";
    const d = date instanceof Date ? date : new Date(date);
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  // Prev/next post neighbors. Usage: collections.posts | postNeighbors(page.url)
  // Collection is newest-first; prev = older (higher index), next = newer (lower index).
  cfg.addFilter("postNeighbors", (posts, currentUrl) => {
    const index = posts.findIndex(p => p.url === currentUrl);
    return {
      prev: index < posts.length - 1 ? posts[index + 1] : null,
      next: index > 0 ? posts[index - 1] : null
    };
  });

  // Slugify filter (matches the slugify() function used for permalinks).
  cfg.addFilter("slugify", (str) =>
    str.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim().replace(/\s+/g, "-")
  );

  // Rewrites relative img src attributes to absolute paths using the post's URL.
  // Handles bare paths ("image.png") and dot-relative paths ("./image.png").
  cfg.addFilter("rewriteImgSrc", (html, baseUrl) => {
    if (!html || !baseUrl) return html;
    return html.replace(
      /(<img\s[^>]*src=")(?!https?:\/\/|\/|data:)(?:\.\/)?([^"]+)(")/gi,
      (_, before, src, after) => `${before}${baseUrl}${src}${after}`
    );
  });

  // Excerpt filter: returns the first ~wordLimit words of rendered HTML,
  // stopping at a block boundary so tags are never split mid-element.
  // Images and code blocks are included in full if they appear before the cutoff.
  cfg.addFilter("excerpt", (html, wordLimit = 75) => {
    if (!html) return "";
    // Lookahead split keeps the block-open tag at the start of each chunk.
    const parts = html.split(/(?=<(?:p|pre|ul|ol|blockquote|figure|h[1-6])[\s>])/i);
    let wordCount = 0;
    let result = "";
    for (const part of parts) {
      const text = part.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      const words = text ? text.split(" ").filter(Boolean) : [];
      result += part;
      wordCount += words.length;
      if (wordCount >= wordLimit) break;
    }
    return result;
  });

  // Posts collection — glob picks up both flat .md files and bundle index.md files
  cfg.addCollection("posts", (api) =>
    api.getFilteredByGlob("_posts/**/*.md").reverse()
  );

  // Sorted list of all unique tags used across posts (for tag index + tag archive pagination)
  cfg.addCollection("tagList", (api) => {
    const tagSet = new Set();
    api.getFilteredByGlob("_posts/**/*.md").forEach((item) => {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    });
    return [...tagSet].sort();
  });

  // Copy post bundle assets to the correct output URL path after each build.
  // For a bundle at _posts/YYYY-MM-DD-title/, reads frontmatter from index.md
  // to get date + slug, then copies all non-.md sibling files to
  // _site/blog/YYYY/MM/DD/{slug}/ so relative asset paths in Markdown work correctly.
  cfg.on("eleventy.after", async () => {
    const postsDir = "_posts";
    if (!fs.existsSync(postsDir)) return;
    const entries = fs.readdirSync(postsDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const bundleDir = path.join(postsDir, entry.name);
      const indexPath = path.join(bundleDir, "index.md");
      if (!fs.existsSync(indexPath)) continue;

      const { data } = matter(fs.readFileSync(indexPath, "utf8"));
      const date = new Date(data.date);
      const slug = data.slug || slugify(data.title);

      const yyyy = date.getUTCFullYear();
      const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(date.getUTCDate()).padStart(2, "0");

      const outputDir = path.join("_site", "blog", String(yyyy), mm, dd, slug);
      fs.mkdirSync(outputDir, { recursive: true });

      const assets = fs.readdirSync(bundleDir)
        .filter(f => !f.endsWith(".md") && !f.endsWith(".json"));

      for (const asset of assets) {
        fs.copyFileSync(
          path.join(bundleDir, asset),
          path.join(outputDir, asset)
        );
      }
    }
  });

  // Pass-through for static assets
  cfg.addPassthroughCopy("assets/js");

  return {
    pathPrefix: siteData.pathPrefix,
    dir: {
      input: ".",
      layouts: "_layouts",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

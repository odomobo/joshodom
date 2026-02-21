function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

module.exports = {
  layout: "post",
  eleventyComputed: {
    // Use explicit frontmatter slug if provided; otherwise derive from title.
    slug: (data) => data.slug || slugify(data.title),
    // Permalink is computed so it can use the resolved slug value above.
    permalink: (data) => {
      const date = new Date(data.page.date);
      const yyyy = date.getUTCFullYear();
      const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
      const dd = String(date.getUTCDate()).padStart(2, "0");
      return `/blog/${yyyy}/${mm}/${dd}/${data.slug}/`;
    }
  }
};

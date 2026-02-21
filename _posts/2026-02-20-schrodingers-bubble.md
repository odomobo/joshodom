---
title: "Schrödinger's Bubble"
slug: "schrodingers-bubble"
date: 2026-02-20
tags: [ai, quantum mechanics]
description: "We simultaneously are both in an AI bubble, and not in one."
---

There's a famous thought experiment of Schrödinger's cat. It's commonly depicted in pop culture, but I think most people don't really understand it. Erwin Schrödinger proposed it in the early 1900s - while quantum mechanics was still in its infancy - to point out a flaw in the contemporary model of quantum mechanics. He wanted to demonstrate that something wasn't quite right. Well, the same model of quantum mechanics is still used to this day, and the argument still holds, so something weird is going on...

Per my layperson's understanding, quantum mechanics\* says that quantum systems will evolve in all possible ways simultaneously until they are observed, at which time, they "collapse" into only a single one of those states. So, for example, if a photon could travel left or right, it will travel both left and right until we observe where it ends up, at which point we only see it in one location. It seems bizarre, I know, but it's supported by evidence. This is because you can see the result of the different versions of the thing interacting with itself. See the [double slit experiement](https://en.wikipedia.org/wiki/Double-slit_experiment).

\* _The copenhagen interpretation_

The Schrödinger's cat thought experiment says: if you take a box, put a cat in it, isolate the box from the outside world, and make it so that the quantum behavior of a single atom determines the death of the cat (for example, a geiger counter releasing a poison), then the box will become a superposition of the cat being both alive and dead. This is because the atom will become a superposition of both the state that causes the poison to be released, and the state where it doesn't. The wave function collapse only occurs when an observation is made - when the box is opened. Only at that point is the cat either alive or dead.

Then you might start to wonder what an "observer" is. A scientist is worthy of being considered an observer, but not a cat? I think the whole thing raises more questions than it answers... but this is all beside the point.

## AI is in Schrödinger's bubble

There seem to be 3 types of people talking about AI:

1. "AI is a huge bubble, which is about to collapse"
2. "AI is going to make all of us rich"
3. "AI is going to kill us all"

2 and 3 actually agree on one thing: that AI isn't just a fad, but is something substantial and disruptive. So, you have a huge group of people who think AI is going to fizzle out, and that the huge investments in the AI space are creating a bubble which will lead to a huge recession. And you have another group of people who think that AI will expand exponentially, until its output is dominating the economy.

## AI is in a bubble

So, as of February, 2026, are in an AI bubble? Yes, definitely yes, if you only look at current capabilities. Enormous swathes of the economy are being propped up by AI. Enormous investment is being made into AI companies, including AI companies investing back and forth into each other. When I see two companies investing into each other - companies that are supposed to be disruptive - it makes me think they don't actually know what to do with that money. And current AI capabilities are kind of a joke. Yeah, the latest models can do really impressive things, they can write a lot of code in a lot of languages, but the code they make is unreliable. They still hallucinate, and are terrible at identifying that they've hallucinated until it's pointed out to them. A personal anecdote, but I was coding with Claude Opus 4.6\* and it confidently hallucinated a library that didn't exist, and it didn't realize until I pointed it out.

\* _Arguably the most powerful AI model available right now_

The models are currently powerful, but are flawed in a lot of ways that make them just a useful tools. Nothing warranting the extreme investment into AI - the huge swathes of investment propping up the economy.

There are a lot of people in the "AI bubble" camp who complain about the limited training data problem (a real problem), how AI training is consuming AI generated content, causing a harmful feedback look in quality (also a problem). They talk about how OpenAI had an internal code red after the launch of GPT 5, which itself was largely touted as being disappointing. It seemed that pure scaling (of data and parameters) hit a plateu in capabilities, and OpenAI was reeling.

## AI capability is still growing

However, despite all of that, it does seem AI model capabilities are still growing exponentialy. Maybe not purely through data and parameter scaling, but there are many new techniques which seem to be giving better and better results.

First off, techniques which greatly improve efficiency, like Mixture of Experts architecture (reducing pretraining costs substantially), the muon optimizer, linear attention layers, SwiGLU, and on and on. A lot of little things to make training cheaper or inference faster and more efficient.

Secondly, things which just give better results. Things like chain of thought, DPO (and a host of related techniques), tool calling, new techniques like RAG and skills, better harnesses, and... I'm honestly not sure There are so many new techniques coming out. At the very least, I think the companies must be doing a better job of filtering their data, using cleaner data for their finetuning, and using new funetuning techniques of which they apparently aren't always publishing.

But on top of this, they're also gaining more knowledge and understanding of how training affects the models, which they then seem to be using to perform better training. The chinchilla scaling laws were developed in 2022, and some variant of them seem to be used for every model these days (because it's really a calculation for how to most effectively spend your money). All the AI firms (including the plethora of Chinese firms) are constantly releasing papers describing new findings.

There are AI benchmarks which are used to measure model capabilities, but they have the problem of Goodhart's law: _when a measure becomes a target, it ceases to be a good measure_. But the serious AI shops seem to know that users don't really care about benchmarks - only how useful the models are in practice. They know the users aren't easily fooled. Regardless of how useful the benchmarks really are in practice, they do continue to show an upward trend - whatever that means.

Similarly, [METR](https://metr.org/) (a nonprofit research group) evaluates frontier models' capabilities to complete long tasks. In 2025, they claimed that model capability was doubling every 7 months. It's a bit subjective, but when they describe "capabilities", they are talking about how much work an AI model can do autonomously, in terms of how long it would take a human to do the same task. For example, they claim that in March, 2023, GPT 4 was capable of autonomously completing tasks that would take a human 4 minutes. In February, 2026, they say Claude Opus 4.6 can autonomously complete tasks that would take 14 hours.

This doubling, if actually true and borne out in the real world, is much more substantial than Moore's law\*†. With Moore's law, we've seen a huge explosion in the capabilities of computers, which has held pretty consistent since the dawn of computing. It may not sound that different, but if METR is correct, actual AI capabilities are increasing around 10 times (1000%) in that same timeframe.

\* _Moore's law says that integrated circuit transistor counts double every 2 years_

† _For most of my life, I kept hearing that Moore's law was finally dead and that transistor counts plateaued, but it has held pretty steady to the present day_

## The insane AI investments might be justified

Once AI can do any white collar worker's job (at least as effectively as that worker), then all the investments into AI have been fully justified - from an economic perspective. People talk about AGI\* as being a poorly defined term, and many industry leaders claim that we've already achieved AGI, but I think that the real definition of AGI is when AI will be able to fully replace workers. Well, what does that mean, exactly?

\* _Artificial general intelligence_

It definitely doesn't mean an AI model that's better at coding than any human, or better at law, or better at accounting. Because excel is already better at accounting than any accountant. Rather, it will depend on being able to replicate the soft skills and flexibility that a human has, in a trustworthy and dependable way. You'd need some kind of AI agent that knows which tasks it should be working on, knows who its coworkers are, can reach out to the co-workers, can join calls, zoom meetings, knows when to bother people and when to leave them alone, is careful around delicate subjects. It needs to be able to learn continuously. It needs to be wise to when people are lying to it, and not fall for scams. It needs to be able to listen to audio, watch video, think spacially, and interact with a computer using the same interface that a human would. It needs to be able to check its own work. It needs to be able to know what it knows, and know what it doesn't know. Once it can do all of these things at least as well as a human, then it will replace every white collar worker.

Why? Because based on current AI pricing, it should cost way less than an average human. Not to mention, you can dynamically scale up or down your workforce at a touch of a button, and your AI agents can run 24/7, not 40 hours per week.

I can't compete with that. Not even C-suites can compete with that.

But you don't even need to reach AGI to justify AI in the short term - you just need very effective AI tools. They need to go from being toys, mere playthings, to reliable tools that a professional can use to be much more effective with their work. Useful AI tools won't fully justify the insane amount of money invested into AI, but it can keep AI research limping along.

## Silicon valley and blitzscaling

In the 1930s, an abhorrent authoritarian regime created a new military doctrine called "Blitzkrieg". I think a lot of people don't fully understand blitzkrieg. People understand that it was "fast" warfare, where the nazis would move in quickly and overwhelm, but there was another key aspect to it:

In traditional warfare, the front line would advance at the pace that the army could hold it, because supply lines were needed to keep the front supplied. The front could never move faster than the supply lines could be established. In blitzkrieg, that goes out the window. It doesn't matter about establishing supply lines. The only goal is to defeat the enemy at all costs. That means every invading force has a timer: they have to succeed before their supplies run out. If a platoon's  supplies run out, then they will almost certainly be captured. So every invasion is an attack with no backup plan.

Silicon valley uses this exact same tactic, in something I've heard elegantly called "blitzscaling". Because of the huge first mover advantage with most things in the tech industry, the most important thing to ensure the success of your business is to gain all of the market share (or at least a substantial portion). People use the technologies that everyone else is using, and usually for good reason.

So silicon valley startups will burn investor money to gain users, and then their user count becomes a figure to attract more investor money. They can't stop to think about how they'll actually make a profit until they have acquired all of the market share available.

AI is in the same blitzscaling predicament. If it pays off, it'll be the single most valuable invention that humans have ever created. But because of that, a huge amount of investors have invested into it with the expectation that it's going to produce AGI. So now, the AI companies are racing the bubble.

## AI isn't in a bubble

The naysayers are convinced that the models aren't getting any better, and that the poor AI adoption at most companies is about to cause the industry to fail and the economy to collapse. However, in my estimation, it feels like we're on the verge of AI tools being incredibly useful - at least in software development. To me, the actual capabilities of current-day frontier models are powerful enough that I no longer classify them as toys. They are very powerful tools, which happen to be difficult to use well, ornery, and fairly expensive.

For example, with the release of Claude Opus 4.6, a researcher at Anthropic [detailed how he got Opus 4.6 to autonomously create a C compiler](https://www.anthropic.com/engineering/building-c-compiler) in 2 weeks and for $20,000. Very expensive, and the compiler wasn't on par with SOTA compilers like clang, gcc, or msvc. However, it would take me at least a year of working on it full time to be able to produce such a result, and I currently earn more than $20k per year. I don't think anyone is going to hire me for that task, but it certainly is humbling. I also don't think this is actually the most effective way to use AI tools currently.

There are also a lot of tools being created to help AI be more effective at what it does. Tools help humans to be more effective at what we do, so why shouldn't the same be for AI? And in practice, it does work. If a frontier model has a tool that it understands how to use, it will use it, and fairly effectively.

As long as the capabilities continue growing (from the industry as a whole, not just from a single AI tech firm), and as long as investors don't run out of money, then it won't be a matter of "if" we reach AGI, but rather "when" - justifying all of the money currently invested in AI.

Still, we're in a very precarious place, just like a startup investor is. The economy is being propped up by hopes and dreams - with a lot of justification, but no solid reason to think it will succeed. It's based on a future promise, one borne out by exponential graphs and early hints toward incremental self-improvement.

## And then what?

By my estimation, we're in a "damned if you do, damned if you don't" situation. On one hand, the AI bubble burts and we'll be hit by a rough recession. Life will be really difficult for most of us. On the other hand, the AI bubble doesn't burst and most white collar workers will lose their jobs in the short term. In the long term: all economic activities become fully automated, not needing human labor.

The second situation scares me a lot more, and it's because our institutions aren't prepared for such a situation.

First off, we'd need some sweeping changes to our welfare system. If no humans can get jobs, then we'd need something like universal basic income. The only way I see that happening is if there's violent rioting in the streets due to extreme levels of unemployment.

Even if we can secure something like universal basic income (so we can still afford to live), there's the issue that corporations are currently very powerful, and have a huge sway on society. They manufacture disinformation, they exert direct political influence to change the political landscape in their favor, they lie, cheat, and steal to the extent they think they can get away with. There's no reason this would go away with fully automated corporations. In fact, they would no longer have a human workforce in which they have a vested interest. If most corporations were fully automated, it's doubtful they would see humans as anything other than either an obstacle, or something to exploit.

The economy is fierce, and there's no reason to think it would become any less fierce under a situation of full automation. Rather, the AI-controlled companies would fight each other tooth and nail, and humans would be caught in the crossfire.

So even if we can have a paradise of wealth for a few years, I don't think humanity would have the power to be able to maintain it. We'd be at the whims of AI systems that we'd have zero influence over.
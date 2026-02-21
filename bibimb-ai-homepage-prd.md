# Bibimb.ai Homepage Redesign PRD

> **Purpose**: This PRD is for Claude Code to implement the full homepage redesign of bibimb-ai.vercel.app
> **Date**: February 21, 2026
> **Priority**: Critical - the current site fundamentally misrepresents the service

---

## 0. Context: What Is Bibimb.ai?

Bibimb.ai is NOT an "AI tool marketplace with early bird discounts."

**Bibimb.ai is the first community-verified AI agent marketplace** — where AI agents get their first trust record through real user reviews, and where early adopters get to test unproven agents for free.

### The Core Insight
- AI agents are about to explode in number
- But nobody trusts a brand-new agent (no reviews, no track record)
- The "bibimbap pricing tier" is NOT a discount mechanism — it's a **trust-building mechanism**
  - First N users get the agent for free → they leave real reviews
  - Reviews create trust → later buyers pay based on that trust
- Bibimb.ai wants to be **the first place an AI agent gets registered and verified** — like a birth certificate for agents

### Positioning
- **One-liner**: "Where AI agents earn their first trust."
- **For Makers**: The first place to deploy your agent, get real users, and build a trust record
- **For Buyers**: Test unproven agents for free, and help build the trust layer for the agent economy
- **NOT**: A discount shopping site. NOT a Product Hunt clone. NOT an enterprise tool.

---

## 1. Critical Language Changes (Apply Globally)

### Find & Replace (entire codebase)

| Find | Replace With | Reason |
|------|-------------|--------|
| "AI tool" | "AI agent" | Agents DO work; tools are passive software |
| "AI tools" | "AI agents" | Same |
| "tool" (in product context) | "agent" | Same |
| "buy tools" | "hire agents" or "try agents" | Agents are hired, not purchased |
| "sell my AI tool" | "deploy my AI agent" or "list my agent" | Agents are deployed |
| "makers add their AI tool" | "creators list their AI agents" | Consistent terminology |
| "AI tool marketplace" | "AI agent marketplace" | Core identity change |
| "I want to buy tools" | "I want to try agents" | Buying implies passive; trying implies active |
| "I'm building one" | "I'm building an agent" | Clarity |
| "List your bowl" | "Deploy your agent" | Less cute, more clear |

### Tone Shift
- **Before**: Playful food marketplace ("first few bites are on us")
- **After**: Still use bibimbap metaphor, but ground it in the REAL value proposition (trust building, not discounts)
- The bibimbap metaphor should enhance the message, not BE the message

---

## 2. Hero Section Redesign

### Current (REMOVE)
```
Every AI tool starts free.
Like bibimbap — the first few bites are on us.
Then the price steps up as more people join.
Be early. Pay less.
```

### New Hero

**Headline option (pick the one that feels strongest in context):**

```
Option A: "Where AI agents earn their first trust."
Option B: "The first trust record for AI agents."
Option C: "Every AI agent starts unproven. We fix that."
```

**Subheadline:**
```
New AI agents have zero reviews, zero track record.
On Bibimb.ai, early adopters test them for free and leave honest reviews.
Trust builds. Price rises. Like adding layers to bibimbap.
```

**CTAs (keep the emoji style, change the labels):**
```
"I want to try agents 🍳"  →  leads to Buyer section
"I'm an agent creator 🧑‍🍳"  →  leads to Maker section
```

---

## 3. "How It Works" Section Redesign

### Current (REMOVE entire section)
The current "How the bowl fills up" section reads as a discount mechanism.

### New: "How trust gets built"

**Section title**: "How the bowl fills up" (can keep the metaphor, but change the content)

**Step 1: Deploy your agent**
- Icon: 🚀
- Title: "Deploy your agent"
- Description: "Agent creators list their AI agent and set a target price. Every agent starts at the free tier — the Namul tier. Creators choose how many free spots to open (5 to 50)."
- Label: "For Creators"

**Step 2: Free users test and review**
- Icon: 🥬
- Title: "Early adopters test for free"
- Description: "The first users get the agent at zero cost — the Namul tier. They use it for real tasks and leave honest reviews. No fake signups, no paid reviews."
- Label: "Namul Tier — Trust starts here"

**Step 3: Trust builds, price rises**
- Icon: 🌶️
- Title: "Reviews build trust. Price rises."
- Description: "As real reviews come in, the next tier opens at a higher price. Each tier is unlocked by the trust the previous users created. Like adding gochujang — more heat, more flavor, more value."
- Label: "Gochujang → Jeongsik"

**Step 4: The agent economy grows**
- Icon: 💰
- Title: "Creators earn. Buyers trust."
- Description: "When the target price is reached, creators earn steady income with zero platform fees. Buyers get an agent with a real track record — verified by the community, not by marketing."
- Label: "For Everyone"

---

## 4. Pricing Tier — Major Structural Change

### Current Problem
- Fixed structure: always 5 free, then $4.99, $9.99, $19.99, $29
- No flexibility for creators
- Reads as "early bird discount" not "trust mechanism"

### New: Creator-Controlled Tiers

**IMPORTANT**: The bibimbap tier NAMES stay (Namul, Gochujang, Bibim, Dolsot, Jeongsik). The STRUCTURE becomes flexible.

**What creators can control:**

| Setting | Range | Default | Notes |
|---------|-------|---------|-------|
| Free tier (Namul) size | 5 – 50 users | 5 | More free = more reviews before monetization |
| Target price (Jeongsik) | $0 – $99 | $29 | $0 = permanently free agent |
| Intermediate tiers | Auto-calculated | Even steps | System generates 3 tiers between free and target |

**Display on listing page:**
```
🥬 Namul (Free)     — First [N] users (set by creator)
🌶️ Gochujang         — [auto-calculated, e.g., 30% of target]
🥢 Bibim             — [auto-calculated, e.g., 60% of target]
🍲 Dolsot            — [auto-calculated, e.g., 85% of target]
🍱 Jeongsik (Target) — [$X] (set by creator)
```

**Special case: Creator sets target = $0**
- All tiers are free
- Display: "This agent is free forever. Reviews still matter."
- This handles the "nothing is paid yet" era gracefully

**Demo section update:**
- The interactive demo should show the creator setting their free tier size and target price
- Show how the tiers auto-generate
- Add a toggle: "See it as a buyer" / "See it as a creator"

---

## 5. "Two Seats at the Table" Section Redesign

### For Buyers → "For Early Adopters"

**Title**: "Test first. Trust later."

**Value props (rewrite all bullet points):**
- 🥬 Get agents free in the Namul tier — test before anyone else pays
- ⭐ Your review becomes part of the agent's permanent trust record
- 🔍 Discover agents before they have a price tag — and shape whether they deserve one
- 🛡️ Zero risk: free tier means you never pay for an unproven agent
- 📊 See real reviews from real early adopters, not marketing copy

**CTA**: "Grab a free spot →"

### For Makers → "For Agent Creators"

**Title**: "Your agent's first trust record starts here."

**Value props (rewrite all bullet points):**
- 🚀 Get your first real users on day one — not beta testers, real users
- ⭐ Build a verifiable review history that follows your agent
- 🎛️ Control your pricing: set free tier size (5-50) and target price ($0-$99)
- 💸 Zero platform fees — now and for founding creators, forever
- 📣 Community-driven discovery — no pay-to-rank, no algorithm gaming

**CTA**: "Deploy your agent →"

---

## 6. NEW Section: "Why agents need trust" (Add before or after How It Works)

This section doesn't exist yet. It explains WHY bibimb.ai exists.

**Section title**: "The trust problem"

**Content (render as a visual narrative, not a wall of text):**

```
Block 1:
"AI agents are everywhere. But would you pay for one you've never tried?"
— Visual: a generic agent listing with 0 reviews, 0 users

Block 2:
"The trust gap is the biggest barrier to the agent economy."
"Fiverr freelancers have ratings. GitHub repos have stars. New AI agents have... nothing."
— Visual: comparison showing Fiverr profile with reviews vs blank agent page

Block 3:
"Bibimb.ai closes this gap."
"Free early access → real reviews → earned pricing."
"Every agent builds its reputation from zero, verified by the community."
— Visual: the bibimbap tier filling up with real review snippets
```

---

## 7. NEW Section: "What kind of agents?" (Add after trust section)

Visitors currently have NO idea what types of agents will be listed.

**Section title**: "Agents for every workflow"

**Categories to display (as visual cards/tags):**

| Category | Example | Icon |
|----------|---------|------|
| Content & Writing | Blog post generators, copywriting agents | ✍️ |
| Design & Creative | Logo makers, image generators, video editors | 🎨 |
| Data & Research | Market research, data analysis, web scraping | 📊 |
| Development | Code review, bug fixing, deployment agents | 💻 |
| Marketing & SEO | Social media managers, SEO optimizers | 📣 |
| Productivity | Meeting summarizers, email drafters, schedulers | ⚡ |
| Customer Service | Support chatbots, ticket handlers | 🎧 |
| Translation & Language | Multilingual agents, localization | 🌍 |

**Footer note**: "Don't see your category? Agent creators define new categories when they list."

---

## 8. Waitlist Section Update

### Current (REMOVE)
```
47 people on the waitlist (← this is fake dummy data from Claude Code)
12 makers preparing to list (← also fake)
```

### New
- Remove ALL fake numbers
- Keep the waitlist form but reframe it

**New copy:**
```
"Be a founding member."

Join the waitlist — founding members get:
• Permanent zero platform fees as a creator
• First access to the Namul (free) tier on every new agent
• A "Founding Member" badge on your profile

[Waitlist form with same 3 options: buyer / creator / both]
```

**Important**: Do NOT show fake social proof numbers. Show nothing until real numbers exist.

---

## 9. Footer / Tagline Update

### Current
```
"An AI tool marketplace where early buyers pay less — like bibimbap."
```

### New
```
"The AI agent marketplace where trust is built by the community — one bowl at a time."
```

Or shorter:
```
"Where AI agents earn their first trust."
```

---

## 10. Seller Fee Structure (for About page or FAQ)

### Current: "0% seller fees — always, forever"

### New: Tiered approach

**Display on homepage (keep it simple):**
```
"0% seller fees for founding creators. Always."
```

**Detail (on About page or FAQ):**
```
Founding creators (joined during waitlist or pre-launch):
→ 0% platform fee, forever. This is our thank you for building with us early.

After public launch:
→ 5% platform fee on paid transactions only
→ Free tier transactions: always $0 fee
→ No listing fees, no monthly fees, no hidden costs
```

---

## 11. About Page Vision Story (New or Rewrite)

The About page should tell the bigger story. Key narrative beats:

1. **The agent explosion is coming**
   - Fiverr saw 18,347% increase in AI agent freelancer searches
   - The market is projected to grow from $1.56B to $69B by 2032

2. **But trust is missing**
   - You wouldn't hire a freelancer with zero reviews
   - Why would you pay for an agent with zero track record?

3. **Crypto tried to solve this, but added barriers**
   - Platforms like Moltlaunch require crypto wallets
   - That locks out 95% of indie makers and small businesses

4. **Enterprise platforms don't help indie creators**
   - OpenAI, Google → built for big companies
   - No place for an indie maker to deploy and earn

5. **Bibimb.ai fills the gap**
   - No crypto required. No enterprise contract.
   - Community-verified trust. Creator-controlled pricing.
   - The first registration point for AI agents in the open economy.

---

## 12. Technical Notes for Implementation

### What to preserve
- The bibimbap visual metaphor (tier names, food emojis, "bowl" language)
- The interactive demo concept (but update to show creator controls)
- The overall site structure and design system
- The waitlist functionality

### What to change
- ALL copy/text (per this PRD)
- The pricing tier from fixed → creator-controlled
- Add new sections (trust problem, agent categories)
- Remove fake metrics (47 waitlist, 12 makers)

### What to add
- Creator control panel in demo (free tier size slider, target price input)
- Agent category section with visual cards
- "Why trust matters" narrative section
- Updated About page

### Priority order
1. Language swap (tool → agent) across entire codebase
2. Hero section rewrite
3. "How it works" rewrite
4. Pricing tier structural change (creator-controlled)
5. New "trust problem" section
6. New "agent categories" section
7. Waitlist section cleanup (remove fake numbers)
8. Footer/tagline update
9. About page vision story
10. Seller fee structure update

---

## 13. Copy Style Guide

### Voice
- Confident but not arrogant
- Community-first, not corporate
- Direct — no fluff, no "revolutionary" or "game-changing"
- The bibimbap metaphor adds warmth and memorability, but should never obscure the actual message

### Do
- "AI agents" (not "AI tools")
- "deploy" or "list" (not "sell" or "submit")
- "try" or "test" (not "buy" in early context)
- "trust record" or "review history" (not "rating")
- "early adopters" (not "customers" or "buyers" in free tier context)
- "creators" (not "sellers" or "vendors")

### Don't
- Don't say "cheap" or "discount" — this is about trust, not price
- Don't say "guaranteed" anything — we facilitate, community verifies
- Don't use fake social proof numbers
- Don't over-explain the bibimbap metaphor — let it be intuitive
- Don't promise income to creators — promise exposure and trust building

---

## 14. Success Metrics (for future reference)

After redesign, the homepage should:
- [ ] A first-time visitor understands "this is about AI agent trust" within 5 seconds
- [ ] The word "tool" appears zero times in product context
- [ ] A maker understands they can control their pricing structure
- [ ] A buyer understands they can test agents for free
- [ ] No fake numbers or misleading social proof
- [ ] The bibimbap metaphor enhances (not replaces) the core message
- [ ] The "why this exists" story is clear without reading the About page

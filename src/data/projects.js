// ─────────────────────────────────────────────────────────────
//  Everything shown in the "Things I've made" section lives here.
//  Edit this file only; no component changes needed.
// ─────────────────────────────────────────────────────────────
//
//  SHIPPED PROJECTS
//  ----------------
//  title         string   (required)
//  capability    string   short label above the title, e.g. "UX & Product Thinking"
//  status        string   optional pill, e.g. "Concept · paused". Projects with a
//                         status aren't counted as "shipped" in the header.
//  description   string[] (required) 2–4 short bullet points (a plain string still works as a paragraph)
//  tags          string[] shown as soft pills
//  liveUrl       string   "Live demo ↗" button (hidden if empty)
//  repoUrl       string   "GitHub ↗" button (hidden if empty)
//  visual        object   optional. Leave it out for a text-only card.
//    type   "phone" → phone frame on a dark panel
//           "web"   → browser frame on a pink panel
//    src    imported image (put the file in src/img/projects/)
//    alt    describe what the screenshot shows
//
//  draft         true → shown on the local dev server only, hidden in
//                production builds. Use it for placeholders you're still filling in.
//
//  Order here = order on the page. Rows alternate left/right automatically,
//  and the 01, 02… numbers and the "shipped · brewing" counter are generated.

const isVisible = (project) => !project.draft || process.env.NODE_ENV !== "production";

const allShipped = [
  {
    title: "Travel Companion",
    capability: "Product Strategy & Discovery",
    status: "Concept · paused",
    description: [
      "Travel recommendations that adapt to your interests, location, weather and changing plans",
      "Compared Mindtrip, Wanderlog, Layla, Wonderplan and Stippl: most focus on itineraries, booking or routes",
      "Paused over AI costs, recommendation quality and standing out from ChatGPT + Google Maps",
      "Desk research only; not tested with users",
    ],
    tags: ["Market research", "Competitor analysis", "Product strategy"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "Finora: Stock Market App",
    capability: "Agile Product Development",
    description: [
      "Stock market app and website, built by a team of four for a university course",
      "Product owner: wrote the epics and user stories, prioritised the backlog and ran sprint planning",
      "Set up and managed our Jira workspace",
      "Built the feature for searching stocks by country or company",
    ],
    tags: ["Scrum", "Jira", "Product ownership", "JavaScript", "PHP"],
    liveUrl: "https://finora-1-five.vercel.app",
    repoUrl: "https://github.com/mehmetecck/finora-1",
  },
  {
    title: "Honest & Rare Hackathon",
    capability: "Product Innovation & Collaboration",
    // Kept short in case the details are under NDA.
    description: [
      "Two-person team reimagining the Honest & Rare website with modern technologies",
      "Worked from limited knowledge of how the existing site worked",
      "I owned the feasibility assessment and timeline",
      "Contributed to the build: a Node.js strangler-fig migration with secure multi-vendor routing",
    ],
    tags: ["Node.js"],
    liveUrl: "",
    repoUrl: "",
  },
  {
    title: "UCI Redesign",
    capability: "UX & Product Thinking",
    description: [
      "Redesign of the UCI cinema app’s user interface for a UX design course",
      "Clearer navigation, better accessibility and a calmer visual hierarchy",
      "Built with HTML, CSS and vanilla JavaScript",
    ],
    tags: ["HTML", "CSS", "JavaScript", "UX Design"],
    liveUrl: "https://jane2800.github.io/uci-redesign/",
    repoUrl: "https://github.com/jane2800/uci-redesign",
  },
  {
    title: "LOS! Navigation",
    capability: "Requirements Engineering & System Design",
    description: [
      "Journey planner for Berlin’s BVG public transport network",
      "Splits each trip into individual legs",
      "Lets you choose the exact departure for each leg",
    ],
    tags: ["React", "Rest API", "JavaScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://los-navigation.vercel.app",
    repoUrl: "https://github.com/jane2800/los-navigation",
  },
];

export const shipped = allShipped.filter(isVisible);

//  IN PROGRESS ("In the works")
//  ----------------------------
//  Add as many as you like; each gets its own card. `draft` works here too.
//
//  title        string
//  capability   string   optional label above the title
//  since        "2026-09" (shown as "SEP 2026") or any free text
//  description  string[] short bullet points (or one string)
//  tags         string[]
//  followUrl    string   "Follow along →" link (hidden if empty)
//  steps        { label, status } in order. status is one of:
//                 "done" ✓   "now" ◐   "next" ○
//               The progress bar and "3 / 5 DONE" are calculated
//               from these, so just update the statuses.
//               Leave empty to hide the progress panel entirely.

const allInProgress = [
  {
    title: "Al Catzone brand & website",
    capability: "Brand Strategy & Digital Experience",
    since: "2026-05",
    description: [
      "Brand refresh and digital experience for a vegan pizzeria in Berlin",
      "My part: competitor and audience research, brand positioning and creative direction",
      "Logo, mascot and visual identity, plus website planning and a first mockup",
      "The website isn’t built yet; brand guidelines come first",
    ],
    tags: ["Brand strategy", "Creative direction", "UX", "Business research"],
    followUrl: "",
    steps: [
      { label: "Competitor & audience research", status: "done" },
      { label: "Brand positioning & moodboards", status: "done" },
      { label: "Initial website mockup", status: "done" },
      { label: "Logo & mascot", status: "now" },
      { label: "Brand guidelines", status: "next" },
      { label: "Website build", status: "next" },
    ],
  },
  {
    // Current Honest & Rare work. Not public yet, so kept deliberately vague:
    // no milestones, tags or link until it can be shared.
    title: "Modernising a multi-vendor marketplace",
    capability: "Business & Product Operations",
    since: "2026-10",
    description: [
      "Building on our hackathon prototype",
      "Rethinking how customers, vendors and the team use the platform",
      "Rebuilding it on modern foundations",
      "More to share once it’s public",
    ],
    tags: [],
    followUrl: "",
    steps: [],
  },
];

export const inProgress = allInProgress.filter(isVisible);

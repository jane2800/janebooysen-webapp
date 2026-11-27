// ─────────────────────────────────────────────────────────────
//  Everything shown in the "Things I've made" section lives here.
//  Edit this file only; no component changes needed.
// ─────────────────────────────────────────────────────────────
//
//  SHIPPED PROJECTS
//  ----------------
//  title         string   (required)
//  description   string   (required) 1–3 sentences
//  tags          string[] shown as soft pills
//  liveUrl       string   "Live demo ↗" button (hidden if empty)
//  caseStudyUrl  string   "Case study →" button (hidden if empty)
//  visual        object   optional. Leave it out for a text-only card.
//    type   "phone" → phone frame on a dark panel
//           "web"   → browser frame on a pink panel
//    src    imported image (put the file in src/img/projects/)
//    alt    describe what the screenshot shows
//
//  Rows alternate left/right automatically, and the 01, 02… numbers
//  and the "02 shipped · 01 brewing" counter are generated.

import uciShot from "../img/projects/uci-redesign.webp";
import losShot from "../img/projects/los-navigation.webp";

export const shipped = [
  {
    title: "UCI Redesign",
    description:
      "A full redesign of the UCI cinema site with clearer navigation, better accessibility and a calmer visual hierarchy. Built with HTML, CSS and vanilla JavaScript for a UX design course.",
    tags: ["HTML", "CSS", "JavaScript", "UX Design"],
    liveUrl: "https://jane2800.github.io/uci-redesign/",
    caseStudyUrl: "#", // TODO: placeholder, replace with the real case study link
    visual: {
      type: "phone",
      src: uciShot,
      alt: "UCI Redesign on a phone: a grid of film posters with showtimes and booking buttons.",
    },
  },
  {
    title: "LOS! Navigation",
    description:
      "A web app for planning journeys on Berlin’s BVG network. It breaks your trip into individual legs so you can choose the exact departure for each part.",
    tags: ["React", "Rest API", "JavaScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://los-navigation.vercel.app",
    caseStudyUrl: "#", // TODO: placeholder, replace with the real case study link
    visual: {
      type: "web",
      src: losShot,
      alt: "LOS! Navigation start screen with fields for start station, stopovers and destination.",
    },
  },
  {
    title: "Honest & Rare Hackathon",
    // Kept to one line in case the details are under NDA.
    description: "A Node.js strangler-fig migration with secure multi-vendor routing.",
    tags: ["Node.js"],
    liveUrl: "",
    caseStudyUrl: "",
    // no visual → shown as a text-only card
  },
];

//  IN PROGRESS ("In the works")
//  ----------------------------
//  Add as many as you like; each gets its own card.
//
//  title        string
//  since        "2026-09" (shown as "SEP 2026") or any free text
//  description  one line: the problem it solves and who it's for
//  tags         string[]
//  followUrl    string   "Follow along →" link (hidden if empty)
//  steps        { label, status } in order. status is one of:
//                 "done" ✓   "now" ◐   "next" ○
//               The progress bar and "3 / 5 DONE" are calculated
//               from these, so just update the statuses.

export const inProgress = [
  {
    // TODO: placeholder, replace with the real project
    title: "[Project name]",
    since: "[Month year]",
    description: "[One line on the problem it solves and who it’s for.]",
    tags: ["[Tech]", "[Tech]"],
    followUrl: "#",
    steps: [
      { label: "[Milestone done]", status: "done" },
      { label: "[Milestone done]", status: "done" },
      { label: "[Milestone done]", status: "done" },
      { label: "[Working on now]", status: "now" },
      { label: "[Next up]", status: "next" },
    ],
  },
];

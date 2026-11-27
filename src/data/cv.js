// CV, facts strip, ticker and languages.
// Projects live in ./projects.js.

const cvData = {
  facts: [
    { label: "Studying", text: "BSc Software Engineering, UE Berlin" },
    { label: "Building", text: "A new website for Honest & Rare" },
    { label: "Branding", text: "Al Catzone, a vegan pizzeria in Berlin" },
  ],

  ticker: [
    "User-friendly design",
    "Product thinking",
    "Brand identity",
    "Figma",
    "Fixing messy processes",
    "Great coffee",
  ],

  // Newest first.
  experience: [
    {
      position: "Website Modernisation",
      company: "Honest & Rare",
      year: "Oct 2026 – now",
      summary:
        "Mapping how customers, vendors and the team move through the platform, improving key journeys like browsing, checkout and vendor processes, and building a Node.js “strangler-fig” migration that replaces the legacy system without disrupting live operations.",
    },
    {
      position: "Hospitality & Brand Development",
      company: "Al Catzone",
      year: "May 2026 – now",
      summary:
        "Working front-of-house at an independent vegan pizzeria in Berlin while leading its brand identity and digital presence, from visual identity and tone of voice to the website.",
    },
    {
      position: "Teaching Volunteer",
      company: "ReDI School",
      year: "Oct 2025 – Jun 2026",
      summary:
        "Taught Python to kids aged 10–13 through hands-on activities, turned hard ideas into simple offline explanations, and led planning sessions for the volunteers.",
    },
    {
      position: "Volunteer Barista",
      company: "For Everyone",
      year: "Sep 2025 – May 2026",
      summary:
        "Drinks, shift juggling and workshop organising. Also: keeping the café running when the coffee machine gave up mid-rush.",
    },
  ],

  education: [
    {
      degree: "BSc Software Engineering",
      institution: "University of Europe for Applied Sciences",
      year: "2024 – 2027",
    },
    {
      degree: "International Baccalaureate Diploma",
      institution: "Regents International School Pattaya",
      year: "2021 – 2023",
    },
  ],

  // Not shown in the current design; kept for reference.
  skills: [
    "JavaScript",
    "React",
    "Rest APIs",
    "HTML & CSS",
    "Python",
    "Figma",
    "Node.js",
    "Next.js",
    "PostgreSQL",
    "Git & GitHub",
    "Claude Code",
    "Cursor",
  ],

  // Not shown in the current design (it has no About section); kept for reference.
  bio:
    "Hello! I'm Jané, a third-year Software Engineering student at the University of Europe for Applied Sciences in Berlin. I build with JavaScript, React, Node.js and PostgreSQL, and use AI tools like Claude Code and Cursor in my everyday work. What I enjoy most is the product side: understanding how people actually work, finding where a process breaks down, and deciding what's worth building next. Right now I'm helping modernise Honest & Rare's website, and leading the brand and digital presence of Al Catzone, a vegan pizzeria in Berlin.",

  languages: [
    { name: "Afrikaans", level: 6, label: "Native" },
    { name: "English", level: 6, label: "Native" },
    { name: "German", level: 3, label: "B1" },
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/jan%C3%A9-booysen-8a0345215/",
    github: "https://github.com/jane2800",
    cv: `${process.env.PUBLIC_URL}/Jane-Booysen-CV.pdf`,
  },
};

export default cvData;

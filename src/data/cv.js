const cvData = {
  education: [
    {
      degree: "BSc Software Engineering",
      institution: "University of Europe for Applied Sciences",
      year: "2024 – 2027",
    },
    {
      degree: "International Baccalaureate Diploma",
      institution: "Regent's International School",
      year: "2021 – 2023",
    },
  ],

  experience: [
    {
      position: "Volunteer Barista",
      company: "For Everyone",
      year: "September 2025 - Present",
      notes: ["Taking orders and making drinks at the café.",
      "Organising educational workshops, preparing video recordings.",
      "Coordinating shifts and last-minute changes with fellow volunteers.",
      "Navigating obstacles, such as when the coffee machine malfunctioned on us a few times during rush hour, keeping calm and solving the problem promptlyto keep the café running."],
    },
    {
      position: "Teaching Volunteer",
      company: "ReDI School",
      year: "October 2025 – Present",
      notes: ["Teaching Python programming to a small group of kids aged 10-13.",
        "Creating innovative offline ways of presenting complex ideas as simply as possible.",
        "Developing educational content, tailoring to individual learning gaps.",
        "Keeping students entertained during class time.",
        "Leading online planning sessions for the volunteers."],
      },
    ],

  skills: [
    "JavaScript",
    "React",
    "Rest APIs",
    "HTML & CSS",
    "Python",
    "Figma",
    "PostgestSQL",
    "Git & GitHub",
  ],
  
  projects: [
    {
      device: "phone",
      title: "UCI Redesign",
      description: "A full redesign of the UCI website with a focus on improved navigation, accessibility, and a cleaner visual hierarchy. Built with HTML, CSS and vanilla JavaScript as part of a UX design course project.",
      tags: ["HTML", "CSS", "JavaScript", "UX Design"],
      url: "https://jane2800.github.io/uci-redesign/",
    },
    {
      device: "computer",
      title: "Los Navigation",
      description: "A modern web application for planning journeys on Berlin's public transport system (BVG). Unlike traditional journey planners, LOS! breaks down your journey into individual legs, allowing you to choose specific departures for each part of your trip.",
      tags: ["React", "Rest API", "JavaScript", "Node.js", "PostgreSQL"],
      url: "https://los-navigation.vercel.app",
    },
  ],

  languages: [
    {name:"Afrikaans", level: 6},
    {name:"English", level: 6},
    {name:"German", level: 3}
  ]
};


export default cvData;
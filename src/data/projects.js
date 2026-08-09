// Add one object per project. Leave github/liveDemo as "" to hide that button —
// the UI hides links automatically instead of showing a dead one.

export const projectCategories = [
  "All",
  "Web Development",
  "Backend",
  "Data",
  "AI / ML",
  "IoT",
  "Mobile",
  "Other",
];

export const projects = [
  {
    title: "PROJECT_NAME",
    description: "PROJECT_SHORT_DESCRIPTION",
    image: "/assets/projects/project-1.png",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
    category: "Web Development",
    github: "YOUR_PROJECT_GITHUB_URL",
    liveDemo: "YOUR_PROJECT_LIVE_URL",
    featured: true,
    details: {
      problem: "PROJECT_PROBLEM",
      solution: "PROJECT_SOLUTION",
      features: ["FEATURE_1", "FEATURE_2", "FEATURE_3"],
    },
  },
  {
    title: "PROJECT_NAME",
    description: "PROJECT_SHORT_DESCRIPTION",
    image: "/assets/projects/project-2.png",
    technologies: ["Technology 1", "Technology 2"],
    category: "AI / ML",
    github: "YOUR_PROJECT_GITHUB_URL",
    liveDemo: "",
    featured: false,
    details: {
      problem: "PROJECT_PROBLEM",
      solution: "PROJECT_SOLUTION",
      features: ["FEATURE_1", "FEATURE_2"],
    },
  },
];

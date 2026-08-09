// All personal information lives here. Replace every placeholder below —
// nothing in src/components should ever contain real personal data.

export const profile = {
  name: "YOUR_NAME",
  title: "YOUR_PROFESSIONAL_TITLE",
  tagline: "YOUR_TAGLINE",
  location: "YOUR_LOCATION",
  availability: "YOUR_AVAILABILITY", // e.g. "Open to new-grad roles"

  email: "YOUR_EMAIL",
  github: "YOUR_GITHUB_URL", // leave "" to hide the button
  linkedin: "YOUR_LINKEDIN_URL", // leave "" to hide the button
  twitter: "", // optional — leave "" to hide
  instagram: "", // optional — leave "" to hide
  youtube: "", // optional — leave "" to hide

  resume: "/assets/resume/resume.pdf", // leave "" if you don't have one yet
  profileImage: "/assets/images/profile.jpg",

  shortDescription: "YOUR_SHORT_PROFESSIONAL_DESCRIPTION",
  aboutDescription: "YOUR_ABOUT_DESCRIPTION",
  contactDescription: "YOUR_CONTACT_DESCRIPTION",

  hero: {
    primaryButton: { label: "View Projects", link: "#projects" },
    secondaryButton: { label: "Download Resume", link: "/assets/resume/resume.pdf" },
  },
};

// Optional Formspree endpoint for the contact form.
// Set VITE_FORMSPREE_ENDPOINT in your .env file — see .env.example.
export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

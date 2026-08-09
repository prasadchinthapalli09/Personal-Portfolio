// All personal information lives here. Replace every placeholder below —
// nothing in src/components should ever contain real personal data.

export const profile = {
  name: "Durga Prasad Chintapalli",
  title: "Aspiring Data Analyst & Full-Stack Developer",
  tagline: "YOUR_TAGLINE",
  location: "Visakhapatnam",
  availability: "Open to new-grad roles", // e.g. "Open to new-grad roles"

  email: "prasadchinthapalli51@gmail.com",
  github: "https://github.com/prasadchinthapalli09", // leave "" to hide the button
  linkedin: "https://www.linkedin.com/in/durga-prasad-chintapalli", // leave "" to hide the button
  twitter: "", // optional — leave "" to hide
  instagram: "", // optional — leave "" to hide
  youtube: "", // optional — leave "" to hide

  resume: "/assets/resume/resume.pdf", // leave "" if you don't have one yet
  profileImage: "/assets/images/profile.jpg",

  aboutDescription: "I'm Durga Prasad Chintapalli, a 2026 B.Tech CSE graduate from Raghu Engineering College, Visakhapatnam. I enjoy turning raw data into clear insights using Python, SQL, and Power BI, and I also build full-stack web applications with the MERN stack. I'm currently looking for opportunities as a Data Analyst or Full Stack Developer where I can apply my skills to real-world problems and keep growing as an engineer.",
  contactDescription: "I'm actively looking for opportunities in Data Analysis and Full Stack Development. Feel free to reach out for collaborations, internships, or full-time roles — I'll get back to you as soon as possible.",

  hero: {
    primaryButton: { label: "View Projects", link: "#projects" },
    secondaryButton: { label: "Download Resume", link: "/assets/resume/resume.pdf" },
  },
};

// Optional Formspree endpoint for the contact form.
// Set VITE_FORMSPREE_ENDPOINT in your .env file — see .env.example.
export const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

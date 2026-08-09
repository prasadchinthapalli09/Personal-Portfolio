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
    title: "AI-sql-assistant",
    description: "An AI-powered agent that turns plain-English questions into SQL queries, runs them against your database, and returns clean, human-readable answers — no manual query writing required.",
    image: "/assets/projects/project-1.png",
    technologies: ["AI", "Full Stack Web Develepoment", "SQL", "Database"],
    category: "AI / ML",
    github: "https://github.com/prasadchinthapalli09/ai-sql-assistant",
    liveDemo: "https://ai-sql-assistant-khaki.vercel.app/",
    featured: true,
    details: {
      problem: "Non-technical stakeholders and even engineers waste time writing and debugging SQL just to answer simple questions about their data — and every new database means learning its schema from scratch before you can query anything useful.",
      solution: "PROJA full-stack app that connects to any PostgreSQL database (live connection, CSV/SQL/SQLite upload, or one-click sample dataset), automatically discovers its schema, and uses an LLM to translate natural-language questions into safe, schema-aware SQL — validated server-side to guarantee it's strictly read-only before it ever touches the database.",
      features: [
        "Natural language to SQL generation via Groq's LLM, grounded in the real discovered schema and table relationships",
        "Server-side SQL validator that allows only SELECT statements and blocks every destructive keyword, independent of what the AI generates",
        "Three ways to bring in data — live Postgres connection, file upload (CSV/SQL dump/SQLite) into an isolated schema, or instant sample datasets",
        "Auto-selected charts (bar/line/pie/scatter) based on the shape of the query results, plus a plain-language AI explanation of what the data shows",
        "AES-256 encrypted credential storage, JWT authentication, query history, and one-click favorites"
      ],
    },
  },
  {
    title: "Expense-Tracker",
    description: "A full-stack expense tracking app to log, categorize, and visualize personal spending in real time.",
    image: "/assets/projects/project-2.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"],
    category: "Web Development",
    github: "https://github.com/prasadchinthapalli09/Expense-Tracker",
    liveDemo: "https://expense-tracker-42xn.onrender.com/",
    featured: true,
    details: {
      problem: "Manually tracking daily expenses across categories is tedious and error-prone, making it hard to understand spending patterns over time.",
      solution: "Built a full-stack MERN application with secure JWT authentication where users can add, edit, and delete expenses, categorize them, and view spending trends through interactive Chart.js visualizations.",
      features: [
        "JWT-based user authentication and secure sessions",
        "Add/edit/delete expense entries with categories",
        "Visual spending breakdown using Chart.js (pie/bar charts)",
        "Responsive dashboard for tracking expenses in real time",
      ],
    },
  },
];
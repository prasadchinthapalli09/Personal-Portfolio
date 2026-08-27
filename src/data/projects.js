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
  {
    title: "Indian Banking Transaction Analytics Dashboard",
    description: "A Power BI dashboard analyzing 5.5L+ Indian banking transactions to monitor success/failure rates, channel performance, and fraud risk.",
    image: "/assets/projects/project-3.png",
    technologies: ["Power BI", "DAX", "SQL", "Power Query"],
    category: "Data",
    github: "https://github.com/prasadchinthapalli09/indian-banking-transaction-analytics-dashboard",
    liveDemo: "",
    featured: true,
    details: {
      problem: "Banks processing UPI, IMPS, NEFT, and RTGS transactions need to quickly spot which channels drive the most failures and where fraud risk is concentrated — but raw transaction logs don't answer those questions on their own.",
      solution: "Built a 3-page interactive Power BI report with a modeled data schema and custom DAX measures to track transaction volume, failure patterns by channel, and fraud risk by transaction type and merchant category, turning raw logs into decision-ready insights.",
      features: [
        "Overview page with KPIs for total transactions, value, fraud rate, and failure rate, plus monthly trend and account-type breakdowns",
        "Channel & status analysis identifying which channels (Mobile App, Web, ATM, POS) drive the most failed transaction value",
        "Fraud & risk analysis page showing fraud rate by transaction type, merchant category risk, and a repeat-fraud customer funnel",
        "Custom DAX measures for failure rate, fraud rate, and average transaction vs. fraud value",
        "Interactive slicers (Year, Account Type, Channel, Transaction Type) across all pages"
      ],
    },
  },
];

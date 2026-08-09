import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, projectCategories } from "../data/projects.js";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    const used = new Set(projects.map((p) => p.category));
    return projectCategories.filter((c) => c === "All" || used.has(c));
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="section-pad bg-bg-elevated/40">
      <div className="max-w-content mx-auto">
        <SectionHeading
          eyebrow="04 — projects"
          title="Featured Projects"
          description="A selection of things I've built, end to end."
        />

        {projects.length === 0 ? (
          <p className="text-muted font-mono text-sm border border-dashed border-border rounded-lg p-8 text-center">
            No projects added yet.
          </p>
        ) : (
          <>
            <LayoutGroup>
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                      activeCategory === cat
                        ? "border-accent text-bg"
                        : "border-border text-muted hover:text-text"
                    }`}
                  >
                    {activeCategory === cat && (
                      <motion.span
                        layoutId="active-category-pill"
                        className="absolute inset-0 rounded-full bg-accent -z-10"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                    {cat}
                  </button>
                ))}
              </div>
            </LayoutGroup>

            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {visibleProjects.map((project) => (
                  <ProjectCard
                    key={project.title + project.category}
                    project={project}
                    onViewDetails={() => setSelectedProject(project)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

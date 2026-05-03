import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeProjectId) ?? projects[0],
    [activeProjectId]
  );

  const activeIndex = projects.findIndex((project) => project.id === activeProject.id);

  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading section-heading-split">
        <div>
          <p className="eyebrow">Projets dynamiques</p>
          <h2>Des projets qui montrent ma progression de développeur fullstack.</h2>
        </div>
        <p>
          Cliquez sur une carte pour changer le projet actif, ses informations,
          ses badges et son ambiance visuelle.
        </p>
      </div>

      <div
        className="projects-layout"
        style={{
          "--project-accent": activeProject.accent,
          "--project-secondary": activeProject.secondary,
        }}
      >
        <div className="project-card-list" aria-label="Liste des projets">
          {projects.map((project, index) => {
            const isActive = project.id === activeProject.id;

            return (
              <button
                className={`project-card ${isActive ? "is-active" : ""}`}
                key={project.id}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                aria-pressed={isActive}
              >
                <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
                <span>{project.eyebrow}</span>
                <strong>{project.title}</strong>
                <small>{project.angle}</small>
              </button>
            );
          })}
        </div>

        
        <div className="project-storyline" aria-hidden="true">
          {projects.map((project, index) => (
            <span
              className={`story-dot ${project.id === activeProject.id ? "is-active" : ""}`}
              key={project.id}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
            </span>
          ))}
        </div>

        <motion.article className="project-focus" layout>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 12, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.99 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <div className="project-visual" aria-hidden="true">
                <motion.div
                  className="project-scan"
                  key={`scan-${activeProject.id}`}
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "120%", opacity: [0, 0.24, 0] }}
                  transition={{ duration: 1.25, ease: "easeOut" }}
                />
                <div className="project-orb project-orb-one" />
                <div className="project-orb project-orb-two" />
                <div className="project-visual-grid">
                  <span>{activeProject.visualLabel}</span>
                  <strong>{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</strong>
                </div>
              </div>

              <div className="project-content">
                <p className="eyebrow">{activeProject.eyebrow}</p>
                <h3>{activeProject.title}</h3>

                <div className="project-copy-grid">
                  <div>
                    <h4>Contexte</h4>
                    <p>{activeProject.context}</p>
                  </div>
                  <div>
                    <h4>Objectif</h4>
                    <p>{activeProject.objective}</p>
                  </div>
                  <div>
                    <h4>Ce que ça montre</h4>
                    <p>{activeProject.shows}</p>
                  </div>
                  <div>
                    <h4>Angle portfolio</h4>
                    <p>{activeProject.angle}</p>
                  </div>
                </div>

                <div className="badge-list project-badges">
                  {activeProject.tags.map((tag) => (
                    <span className="badge badge-tech" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {activeProject.githubUrl ? (
                    <a
                      className="button button-primary"
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  ) : (
                    <span className="button button-primary button-disabled">
                      {activeProject.status ?? "Projet en cours"}
                    </span>
                  )}

                  {activeProject.demoUrl ? (
                    <a
                      className="button button-secondary"
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Démo
                    </a>
                  ) : (
                    <span className="button button-secondary button-disabled">
                      Démo à venir
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.article>
      </div>
    </section>
  );
}

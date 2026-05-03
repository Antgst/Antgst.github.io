import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Stack technique",
    tone: "tech",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "REST API",
      "SQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Linux",
      "Responsive Design",
    ],
  },
  {
    title: "Produit & terrain",
    tone: "product",
    items: [
      "Analyse de besoin",
      "Vision utilisateur",
      "Priorisation",
      "Gestion de projet",
      "Documentation",
      "Résolution de problèmes",
      "Amélioration continue",
      "Compréhension métier",
    ],
  },
  {
    title: "Soft skills",
    tone: "soft",
    items: [
      "Leadership",
      "Communication",
      "Autonomie",
      "Organisation",
      "Adaptabilité",
      "Esprit critique",
      "Travail en équipe",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="competences">
      <div className="section-heading">
        <p className="eyebrow">Compétences</p>
        <h2>Un profil hybride : code, produit et terrain.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            className="skill-card"
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.38,
              delay: groupIndex * 0.06,
              ease: "easeOut",
            }}
          >
            <h3>{group.title}</h3>
            <div className="badge-list">
              {group.items.map((skill) => (
                <span className={`badge badge-${group.tone}`} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { motion } from "motion/react";

export default function About() {
  return (
    <section className="section about-section" id="parcours">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="eyebrow">Parcours</p>
        <h2>Un profil dev orienté produit et utilisateurs.</h2>
      </motion.div>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
      >
        <p>
          Développeur web fullstack en formation, je construis des projets
          concrets autour du frontend, du backend et de la conception produit.
          Mon parcours terrain m’apporte une vision utilisateur forte, mais mon
          objectif est clair : créer des solutions web modernes, utiles et bien
          structurées.
        </p>

        <div className="about-pill-row" aria-label="Angles forts du parcours">
          <span>Frontend</span>
          <span>Backend</span>
          <span>UX produit</span>
          <span>Vision utilisateur</span>
        </div>
      </motion.div>
    </section>
  );
}

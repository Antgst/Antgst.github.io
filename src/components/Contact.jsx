import { motion } from "motion/react";

const contactLinks = [
  {
    label: "GitHub",
    value: "Antgst",
    href: "https://github.com/Antgst",
  },
  {
    label: "LinkedIn",
    value: "antoinegousset",
    href: "https://www.linkedin.com/in/antoinegousset/",
  },
  {
    label: "Email",
    value: "ant.gousset@gmail.com",
    href: "mailto:ant.gousset@gmail.com",
  },
  {
    label: "CV",
    value: "Télécharger le CV",
    href: `${import.meta.env.BASE_URL}antoine-gousset-cv-2026.pdf`,
  },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      >
        <p className="eyebrow">Contact</p>
        <h2>Discutons d’un projet web utile, clair et bien construit.</h2>
        <p>
          Disponible pour échanger autour d’un projet, d’une opportunité ou
          d’une collaboration frontend/fullstack.
        </p>

        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label}>
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button button-primary" href="mailto:ant.gousset@gmail.com">
            Me contacter
          </a>
          <a
            className="button button-secondary"
            href="https://github.com/Antgst"
            target="_blank"
            rel="noreferrer"
          >
            Voir mon GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

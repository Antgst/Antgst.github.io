import { motion } from "motion/react";
import portrait from "../assets/images/portrait-antgst.webp";

export default function Hero() {
  return (
    <section className="section hero-section" id="top">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="eyebrow">Portfolio développeur</p>
          <h1>
            Développeur web <span>fullstack</span>
          </h1>
          <p className="hero-lead">
            Je conçois des interfaces et applications web simples,
            utiles et pensées pour les vrais utilisateurs.
          </p>
          <p className="hero-angle">
            Développement web, produit, UX et résolution de problèmes.
          </p>

          <div className="hero-actions" aria-label="Actions principales">
            <a className="button button-primary" href="#projects">
              Voir mes projets
            </a>
            <a className="button button-secondary" href="#contact">
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <div className="portrait-card" aria-label="Portrait visuel Antoine">
            <img src={portrait} alt="" />
            <div className="portrait-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

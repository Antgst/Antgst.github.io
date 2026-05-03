import { motion } from "motion/react";

export default function AmbientBackdrop() {
  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <motion.div
        className="ambient-orb ambient-orb-blue"
        animate={{ x: [0, 24, -12, 0], y: [0, -16, 14, 0], scale: [1, 1.045, 0.985, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ambient-orb ambient-orb-gold"
        animate={{ x: [0, -20, 12, 0], y: [0, 18, -10, 0], scale: [1, 0.975, 1.04, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="ambient-grid" />
      <div className="ambient-noise" />
    </div>
  );
}

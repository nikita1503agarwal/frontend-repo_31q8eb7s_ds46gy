import { motion } from "framer-motion";

export default function SectionIntro({ eyebrow, title, text, color = "amber" }) {
  const colorMap = {
    amber: "text-amber-300/90",
    emerald: "text-emerald-300/90",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      {eyebrow && (
        <p className={`${colorMap[color]} tracking-[0.25em] uppercase text-xs sm:text-sm mb-3`}>{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-white">{title}</h2>
      {text && <p className="mt-2 text-white/70 max-w-2xl">{text}</p>}
    </motion.div>
  );
}

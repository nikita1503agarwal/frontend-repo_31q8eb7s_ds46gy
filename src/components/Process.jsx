import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";

export default function Process() {
  const steps = [
    {
      n: '01',
      title: "Sélection",
      text: "Parlez-nous de votre événement, nous proposons une sélection d'objets et de matières naturelles adaptée à votre ambiance.",
    },
    {
      n: '02',
      title: "Logistique",
      text: "Livraison, installation sous les arbres, retrait — nous gérons chaque détail avec soin.",
    },
    {
      n: '03',
      title: "Accompagnement",
      text: "Présence technique le jour J possible pour photobooth et animations en extérieur.",
    },
  ];

  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-black to-emerald-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Processus"
          title="Comment ça marche"
          text="Une expérience fluide et naturelle, du premier message à la dernière photo au coucher du soleil."
          color="emerald"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-emerald-200/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-emerald-300/90 text-sm font-medium">{s.n}</div>
              <h3 className="mt-2 text-white text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.text}</p>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
};

export default function Mariages() {
  const highlights = [
    {
      icon: Heart,
      title: "Ambiances sur-mesure",
      text: "Bois, lin, fleurs séchées et objets d'époque : nous composons un décor poétique et chaleureux, fidèle à votre histoire.",
    },
    {
      icon: Leaf,
      title: "Esprit artisanal & éco-responsable",
      text: "Restauration, réemploi, circuits courts. Chaque pièce est entretenue à l'atelier avec des finitions naturelles.",
    },
    {
      icon: Sparkles,
      title: "Détails qui comptent",
      text: "Signalétique calligraphiée, cadres anciens, coins photo verdoyants : des touches délicates qui subliment vos photos.",
    },
  ];

  return (
    <section id="mariages" className="relative py-20 bg-gradient-to-b from-emerald-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-emerald-300/90 tracking-[0.25em] uppercase text-xs sm:text-sm mb-3">Mariages</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Poésie végétale pour le grand jour</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Une esthétique naturelle, douce et intemporelle qui respire la forêt, le jardin et les matières vivantes.</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={variants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/90 text-emerald-950 shadow">
                <h.icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-medium text-lg">{h.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{h.text}</p>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:blur-xl" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white/80">Vous préparez un mariage en plein air ?</p>
              <p className="text-white/60 text-sm">Nous créons un parcours chaleureux entre cérémonie laïque, cocktail sous les arbres et coin photo végétal.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-full bg-emerald-400/90 px-5 py-3 text-emerald-950 font-medium shadow hover:bg-emerald-300 transition">Demander une proposition</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

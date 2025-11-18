import { Leaf, Camera, Tv, Joystick, Forest } from "lucide-react";
import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";

const items = [
  {
    icon: Camera,
    title: "Photobooth en bois",
    desc: "Fabrication artisanale, tirages instantanés, fond feuillage ou rideaux en lin.",
    tag: "Éco-conçu",
  },
  {
    icon: Tv,
    title: "Téléviseurs d'époque",
    desc: "Diffusion de films Super 8, diaporamas romantiques, messages personnalisés.",
    tag: "Vintage",
  },
  {
    icon: Joystick,
    title: "Jeux de jardin",
    desc: "Molkky, palets bretons, quilles : parfait pour un cocktail sous les arbres.",
    tag: "Extérieur",
  },
  {
    icon: Leaf,
    title: "Décor végétal",
    desc: "Vases anciens, fleurs séchées, feuillages locaux : un rendu organique et lumineux.",
    tag: "Naturel",
  },
];

const variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] } })
};

export default function GreenShowcase() {
  return (
    <section id="objets" className="relative py-20 bg-gradient-to-b from-emerald-950/60 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Objets"
          title="Une collection au naturel"
          text="Des pièces authentiques restaurées avec soin, prêtes à vivre en plein air et à sublimer vos photos."
          color="emerald"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, tag }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={variants}
              className="group relative overflow-hidden rounded-2xl border border-emerald-200/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/90 text-emerald-950 shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-1 text-emerald-200/90">{tag}</span>
              </div>
              <h3 className="text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

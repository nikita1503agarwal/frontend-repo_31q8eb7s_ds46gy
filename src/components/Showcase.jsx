import { Camera, Tv, Joystick, Image } from "lucide-react";

const items = [
  {
    icon: Camera,
    title: "Appareils photo argentiques",
    desc: "Polaroid, Leica, Rolleiflex… Des icônes pour vos corners souvenirs.",
    tag: "Star du rétro"
  },
  {
    icon: Image,
    title: "Photobooths en bois",
    desc: "Design chaleureux, tirages instantanés, interface moderne.",
    tag: "Best-seller"
  },
  {
    icon: Tv,
    title: "Téléviseurs vintage",
    desc: "Décor cinéma, clips d'époque, messages personnalisés.",
    tag: "Années 60-80"
  },
  {
    icon: Joystick,
    title: "Jeux & animations",
    desc: "Flippers, consoles rétro, jeux de plein air pour vos cocktails.",
    tag: "Ludique"
  }
];

export default function Showcase() {
  return (
    <section id="objets" className="relative py-20 bg-gradient-to-b from-black to-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Notre collection</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Une sélection soignée d'objets d'époque, restaurés avec amour et adaptés aux exigences actuelles.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc, tag }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/90 text-slate-900 shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-xs rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-1 text-amber-200/90">{tag}</span>
              </div>
              <h3 className="text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

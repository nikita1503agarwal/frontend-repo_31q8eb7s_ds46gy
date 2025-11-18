export default function Process() {
  const steps = [
    {
      n: '01',
      title: "Sélection",
      text: "Parlez-nous de votre événement, nous proposons une sélection d'objets adaptée à votre ambiance."
    },
    {
      n: '02',
      title: "Logistique",
      text: "Livraison, installation, retrait — nous gérons chaque détail avec soin."
    },
    {
      n: '03',
      title: "Accompagnement",
      text: "Présence technique le jour J possible pour photobooth et animations."
    }
  ];

  return (
    <section id="process" className="relative py-20 bg-gradient-to-b from-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Comment ça marche</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Une expérience fluide et sereine, du premier message à la dernière photo souvenir.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map(s => (
            <div key={s.n} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="text-amber-300/90 text-sm font-medium">{s.n}</div>
              <h3 className="mt-2 text-white text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

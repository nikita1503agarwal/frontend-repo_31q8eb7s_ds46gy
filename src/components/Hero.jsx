import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl animate-in">
          <p className="text-amber-300/90 tracking-[0.25em] uppercase text-xs sm:text-sm mb-4">Location d'objets vintage</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] text-white drop-shadow-xl">
            Le charme du rétro, l'élégance d'aujourd'hui
          </h1>
          <p className="mt-4 text-white/85 text-base sm:text-lg">
            Appareils photo anciens, téléviseurs vintage, photobooths en bois et jeux d'antan — pour sublimer vos mariages et événements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#objets" className="inline-flex items-center rounded-full bg-amber-400/90 px-5 py-3 text-slate-900 font-medium shadow hover:bg-amber-300 transition">
              Découvrir les objets
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-white font-medium hover:bg-white/10 transition">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

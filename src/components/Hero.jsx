import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[86vh] min-h-[600px] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Nature overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/40 to-black/80" />
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="text-emerald-300/90 tracking-[0.25em] uppercase text-xs sm:text-sm mb-4">Location d'objets vintage</p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.05] text-white drop-shadow-xl">
            Le rétro, fait main, au coeur de la nature
          </h1>
          <p className="mt-4 text-white/85 text-base sm:text-lg">
            Objets d'époque restaurés artisanalement, matières naturelles et ambiance végétale pour mariages et événements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#objets" className="inline-flex items-center rounded-full bg-emerald-400/90 px-5 py-3 text-emerald-950 font-medium shadow hover:bg-emerald-300 transition">
              Découvrir les objets
            </a>
            <a href="#mariages" className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white font-medium hover:bg-white/10 transition">
              Inspirations mariages
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

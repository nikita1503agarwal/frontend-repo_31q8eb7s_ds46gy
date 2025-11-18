import { Send, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-emerald-200/10 bg-white/5 p-8 sm:p-12 backdrop-blur-md"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-emerald-300/90 tracking-[0.25em] uppercase text-xs sm:text-sm mb-3">Contact</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">Parlons de votre mariage</h2>
              <p className="mt-3 text-white/75 max-w-xl">Dites-nous la date, le lieu et les objets qui vous font rêver. Nous revenons vers vous avec une proposition sur-mesure et des options naturelles.</p>
              <p className="mt-6 text-white/60 text-sm">Ou écrivez-nous directement : bonjour@belle-epoque-location.fr</p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-400/10 px-3 py-1 text-emerald-200 text-xs">
                <Leaf className="h-3.5 w-3.5" />
                Réponses sous 24h
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Nom et prénom</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" placeholder="Marie Dupont" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" placeholder="vous@email.fr" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Votre message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" placeholder="Parlez-nous de votre projet…" />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400/90 px-6 py-3 font-medium text-emerald-950 hover:bg-emerald-300 transition">
                Envoyer
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

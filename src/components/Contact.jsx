import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-md">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white">Parlons de votre mariage</h2>
              <p className="mt-3 text-white/75 max-w-xl">Dites-nous la date, le lieu et les objets qui vous font rêver. Nous revenons vers vous avec une proposition sur-mesure.</p>
              <p className="mt-6 text-white/60 text-sm">Ou écrivez-nous directement : bonjour@belle-epoque-location.fr</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Nom et prénom</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Marie Dupont" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="vous@email.fr" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm text-white/80">Votre message</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40" placeholder="Parlez-nous de votre projet…" />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400/90 px-6 py-3 font-medium text-slate-900 hover:bg-amber-300 transition">
                Envoyer
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

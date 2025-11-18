import { Menu, Instagram, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 sm:px-6 mt-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-400 to-rose-500 shadow ring-1 ring-black/10" />
            <span className="text-base sm:text-lg font-semibold tracking-tight text-white">
              Belle Époque Location
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#objets" className="text-white/80 hover:text-white transition">Objets</a>
            <a href="#mariages" className="text-white/80 hover:text-white transition">Mariages</a>
            <a href="#process" className="text-white/80 hover:text-white transition">Processus</a>
            <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
            <div className="ml-2 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/10 transition">
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400/40">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 space-y-3 text-sm">
            <a href="#objets" className="block text-white/90">Objets</a>
            <a href="#mariages" className="block text-white/90">Mariages</a>
            <a href="#process" className="block text-white/90">Processus</a>
            <a href="#contact" className="block text-white/90">Contact</a>
            <div className="pt-2 flex gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-full border border-white/10">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-full border border-white/10">
                <Mail className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

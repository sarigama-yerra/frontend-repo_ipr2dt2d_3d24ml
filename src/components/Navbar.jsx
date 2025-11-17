import { Menu, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-[0_0_1px_1px_rgba(255,255,255,0.06)]"
        >
          <a href="/" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg blur-md bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500 opacity-70" />
              <div className="relative grid h-10 w-10 place-items-center rounded-lg bg-black/60 border border-white/10">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="font-semibold tracking-wide gradient-text text-xl">VOLT GYM</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#programs" className="hover:text-white transition">Programs</a>
            <a href="#coaches" className="hover:text-white transition">Coaches</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#join" className="relative hidden sm:inline-flex items-center gap-2 rounded-xl border border-sky-400/30 bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 px-4 py-2 text-sm font-medium text-white/90 hover:from-sky-500/20 hover:via-indigo-500/20 hover:to-fuchsia-500/20 transition shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              Join Now
            </a>
            <button className="md:hidden rounded-xl border border-white/10 p-2 text-white/80 hover:text-white hover:border-white/20">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </div>
    </div>
  );
}

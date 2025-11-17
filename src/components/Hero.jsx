import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Background gradient and noise overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0b12] to-[#0a0a0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(56,189,248,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_90%,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_90%_40%,rgba(236,72,153,0.2),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.08]" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0 z-10">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
        >
          <span className="block gradient-text drop-shadow-[0_0_30px_rgba(99,102,241,0.35)]">
            Unleash Your Power
          </span>
          <span className="block mt-3 text-white/80">Train. Transform. Dominate.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          className="mx-auto mt-6 max-w-2xl text-center text-white/70 text-lg"
        >
          Premium training experience with cutting-edge equipment, elite coaching, and a vibe built for progress. Welcome to the future of fitness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mx-auto mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#pricing" className="group relative inline-flex items-center gap-2 rounded-2xl border border-sky-400/40 bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-fuchsia-500/20 px-6 py-3 text-base font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:from-sky-500/30 hover:via-indigo-500/30 hover:to-fuchsia-500/30 transition">
            Start Free Trial
            <span className="ml-1 opacity-70 group-hover:translate-x-0.5 transition">→</span>
          </a>
          <a href="#programs" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition">
            Explore Programs
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[110%] -translate-x-1/2 rounded-[100%] bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
    </section>
  );
}

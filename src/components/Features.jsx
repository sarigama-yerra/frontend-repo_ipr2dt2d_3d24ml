import { motion } from "framer-motion";
import { Sparkles, Flame, Activity, Shield, Zap } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Athlete-Grade Equipment",
    desc: "Train on premium machines and free weights engineered for performance and stability.",
  },
  {
    icon: Activity,
    title: "Science-Backed Programming",
    desc: "Progressive programs designed by pros to optimize strength, hypertrophy, and endurance.",
  },
  {
    icon: Shield,
    title: "Elite Coaching",
    desc: "Hands-on guidance with technique, recovery, and nutrition tailored to your goals.",
  },
  {
    icon: Sparkles,
    title: "Recovery & Longevity",
    desc: "Infrared sauna, mobility labs, and contrast therapy for faster recovery and longevity.",
  },
  {
    icon: Flame,
    title: "24/7 Energy",
    desc: "Open round the clock with a powerful vibe, neon glow, and high-energy playlists.",
  },
];

export default function Features() {
  return (
    <section id="programs" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          <span className="gradient-text">Engineered For Results</span>
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(79,70,229,0.12)]"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-fuchsia-500/20 blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-black/60">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

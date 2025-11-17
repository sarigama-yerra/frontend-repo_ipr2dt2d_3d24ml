import { motion } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$29/mo",
    features: ["24/7 Access", "All Machines", "Locker Room", "Member App"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$59/mo",
    features: ["Everything in Starter", "Group Classes", "Sauna & Recovery", "Guest Pass x2"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "$99/mo",
    features: ["Everything in Pro", "1:1 Coaching", "Advanced Programming", "Priority Support"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          <span className="gradient-text">Memberships Built For Momentum</span>
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_40px_rgba(79,70,229,0.12)] ${
                tier.highlight
                  ? "border-sky-400/40 bg-gradient-to-tr from-sky-500/15 via-indigo-500/15 to-fuchsia-500/15"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-6 rounded-full border border-sky-400/40 bg-gradient-to-tr from-sky-500/30 via-indigo-500/30 to-fuchsia-500/30 px-3 py-1 text-xs text-white/90">
                  Most Popular
                </div>
              )}
              <h3 className="text-white text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-white">{tier.price}</p>
              <ul className="mt-6 space-y-3 text-white/80">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-fuchsia-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#join" className={`mt-8 inline-flex w-full items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                tier.highlight
                  ? "border-sky-400/40 bg-white/10 text-white hover:bg-white/20"
                  : "border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
              }`}>
                Choose {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

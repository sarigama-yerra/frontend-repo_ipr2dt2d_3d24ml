export default function Footer() {
  return (
    <footer id="contact" className="relative py-12 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-white/70">
          <div>
            <h4 className="text-white font-semibold mb-3">VOLT GYM</h4>
            <p>Power your potential. Premium training for athletes and high performers.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <p>123 Neon Ave, Synth City</p>
            <p>support@voltgym.fit</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Hours</h4>
            <p>Open 24/7</p>
            <p>Staffed 9am – 9pm</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Social</h4>
            <p>Instagram • TikTok • X</p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} VOLT GYM. All rights reserved.</p>
          <p>Built for performance</p>
        </div>
      </div>

      <div className="pointer-events-none absolute -z-0 -bottom-40 left-1/2 h-64 w-[110%] -translate-x-1/2 rounded-[100%] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
    </footer>
  );
}

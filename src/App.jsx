import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global gradient text utility */}
      <style>{`
        .gradient-text{background:linear-gradient(90deg,#38bdf8,#6366f1,#ec4899);-webkit-background-clip:text;background-clip:text;color:transparent}
      `}</style>

      {/* Ambient background parallax layers */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
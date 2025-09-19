import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Tests } from './pages/Tests'
import { Submit } from './pages/Submit'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <header className="border-b bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
          <div className="container flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-block h-7 w-7 rounded bg-primary shadow-sm" />
              <span>LATAM Leaderboard</span>
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link to="/" className="hover:text-secondary">Home</Link>
              <Link to="/tests" className="hover:text-secondary">Tasks</Link>
              <Link to="/about" className="hover:text-secondary">About</Link>
              <Link to="/submit" className="hover:text-secondary">Submit</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </main>
        <footer className="border-t bg-card/60">
          <div className="container py-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              © {new Date().getFullYear()} surus.dev — LATAM Leaderboard
            </div>
            <div className="flex gap-4">
              <a href="https://surus.dev" target="_blank" rel="noreferrer" className="hover:text-secondary">Our Website</a>
              <a href="https://discord.com/invite/yGCCUhqtpS" target="_blank" rel="noreferrer" className="hover:text-secondary">Join our Discord</a>
              <a href="mailto:contacto@surus.dev" className="hover:text-secondary">contacto@surus.dev</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Tests } from './pages/Tests'
import { Submit } from './pages/Submit'
import { LanguageSwitcher, useI18n } from './i18n/I18nProvider'

function Nav() {
  const { t } = useI18n()
  const location = useLocation()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="border-b bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMobileOpen(false)}>
          <span className="inline-block h-7 w-7 rounded bg-primary shadow-sm" />
          <span>{t('common.app_name')}</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link to="/" className="hover:text-secondary">{t('common.home')}</Link>
          <Link to="/tests" className="hover:text-secondary">{t('common.tasks')}</Link>
          <Link to="/about" className="hover:text-secondary">{t('common.about')}</Link>
          <Link to="/contribute" className="hover:text-secondary">{t('common.contribute')}</Link>
          <LanguageSwitcher />
        </nav>
        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-accent/40"
          aria-label={isMobileOpen ? t('common.close_menu') : t('common.open_menu')}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile panel */}
      {isMobileOpen && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-secondary" onClick={() => setIsMobileOpen(false)}>{t('common.home')}</Link>
            <Link to="/tests" className="hover:text-secondary" onClick={() => setIsMobileOpen(false)}>{t('common.tasks')}</Link>
            <Link to="/about" className="hover:text-secondary" onClick={() => setIsMobileOpen(false)}>{t('common.about')}</Link>
            <Link to="/contribute" className="hover:text-secondary" onClick={() => setIsMobileOpen(false)}>{t('common.contribute')}</Link>
            <div className="pt-1">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t bg-card/60">
      <div className="container py-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          © {new Date().getFullYear()} surus.lat — {t('common.app_name')}
        </div>
        <div className="flex gap-4">
          <a href="https://surus.lat" target="_blank" rel="noreferrer" className="hover:text-secondary">{t('common.our_website')}</a>
          <a href="https://discord.com/invite/yGCCUhqtpS" target="_blank" rel="noreferrer" className="hover:text-secondary">{t('common.join_discord')}</a>
          <a href="mailto:contacto@surus.dev" className="hover:text-secondary">{t('common.contact_email')}</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/contribute" element={<Submit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

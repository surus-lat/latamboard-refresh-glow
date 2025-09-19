import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Landing } from './pages/Landing'
import { About } from './pages/About'
import { Tests } from './pages/Tests'
import { Submit } from './pages/Submit'
import { LanguageSwitcher, useI18n } from './i18n/I18nProvider'

function Nav() {
  const { t } = useI18n()
  return (
    <header className="border-b bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="inline-block h-7 w-7 rounded bg-primary shadow-sm" />
          <span>{t('common.app_name')}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" className="hover:text-secondary">{t('common.home')}</Link>
          <Link to="/tests" className="hover:text-secondary">{t('common.tasks')}</Link>
          <Link to="/about" className="hover:text-secondary">{t('common.about')}</Link>
          <Link to="/submit" className="hover:text-secondary">{t('common.submit')}</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t bg-card/60">
      <div className="container py-6 text-sm flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          © {new Date().getFullYear()} surus.dev — {t('common.app_name')}
        </div>
        <div className="flex gap-4">
          <a href="https://surus.dev" target="_blank" rel="noreferrer" className="hover:text-secondary">{t('common.our_website')}</a>
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
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

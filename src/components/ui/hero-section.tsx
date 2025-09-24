import { ArrowDown } from 'lucide-react'
import velascoPainting from '../../assets/velasco-painting.webp'
import { useI18n } from '../../i18n/I18nProvider'

export function HeroSection() {
  const { t } = useI18n()
  const scrollToLeaderboard = () => {
    const leaderboardSection = document.getElementById('leaderboard')
    if (leaderboardSection) {
      leaderboardSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Artistic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${velascoPainting})` }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/30"></div>

      <div className="relative z-10 w-full px-4">
        {/* Main Title in Floating Blur Container */}
        <div className="backdrop-blur-md bg-background/10 shadow-2xl mx-auto max-w-4xl rounded-lg">
          <div className="px-6 sm:px-8 lg:px-12 py-12 sm:py-16 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-background drop-shadow-lg leading-tight">
              LatamBoard
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-background/90 font-medium drop-shadow max-w-2xl mx-auto">
              {t('landing.hero_subtitle')}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 text-center px-4">
          <button
            onClick={scrollToLeaderboard}
            className="btn-primary rounded-full px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>{t('landing.cta_button')}</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
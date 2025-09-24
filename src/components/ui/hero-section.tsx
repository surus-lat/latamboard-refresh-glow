import { ArrowDown } from 'lucide-react'
import velascoPainting from '../../assets/velasco-painting.webp'

export function HeroSection() {
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${velascoPainting})` }}
      />
      
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/30"></div>
      
      <div className="relative z-10 w-full">
        {/* Main Title in Floating Blur Container */}
                <div className="backdrop-blur-md bg-background/10 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-background drop-shadow-lg">
              LatamBoard
            </h1>
            <p className="mt-2 text-base sm:text-lg text-background/90 font-medium drop-shadow">
              Performance benchmarks for Latin American AI Models
            </p>
          </div>
        </div>
        
        {/* Subtitle in Floating Blur Container */}
        <div className="mt-8 text-center">
          <button 
            onClick={scrollToLeaderboard}
            className="btn-primary rounded-full px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <span>See the results</span>
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
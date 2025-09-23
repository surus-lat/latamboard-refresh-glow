import velascoPainting from '../../assets/velasco-painting.webp'

export function HeroSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Artistic Background */}
      <div 
        className="absolute inset-8 bg-contain bg-center bg-no-repeat rounded-3xl opacity-40"
        style={{ backgroundImage: `url(${velascoPainting})` }}
      />
      
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-background/60 via-background/40 to-background/60 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Title in Floating Blur Container */}
        <div className="inline-flex items-center justify-center mb-8">
          <div className="backdrop-blur-md bg-background/10 border border-background/20 rounded-full px-12 py-8 shadow-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-background drop-shadow-lg">
              LatamBoard
            </h1>
          </div>
        </div>
        
        {/* Subtitle in Floating Blur Container */}
        <div className="inline-flex items-center justify-center">
          <div className="backdrop-blur-md bg-background/10 border border-background/20 rounded-full px-8 py-4 shadow-xl">
            <p className="text-base sm:text-lg text-background/90 font-medium drop-shadow">
              Performance benchmarks for Latin American language models
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
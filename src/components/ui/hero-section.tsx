export function HeroSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
          LatamBoard
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Performance benchmarks for Latin American language models
        </p>
        <div className="mt-12 w-16 h-px bg-border mx-auto"></div>
      </div>
    </section>
  )
}
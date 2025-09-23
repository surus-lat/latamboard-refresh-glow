export function HeroSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extralight tracking-tight text-foreground mb-6">
          LatamBoard
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Performance benchmarks for Latin American language models
        </p>
        <div className="mt-12 w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"></div>
      </div>
    </section>
  )
}
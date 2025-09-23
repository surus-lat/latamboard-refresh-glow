import { useI18n } from '../../i18n/I18nProvider'
import { TrendingUp, Globe, Award } from 'lucide-react'

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground animate-fade-in">
            <TrendingUp className="h-4 w-4" />
            {t('landing.hero_subtitle')}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient animate-fade-in-up">
            {t('landing.hero_title')}
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Comprehensive evaluation of language models across Portuguese and Spanish benchmarks, 
            providing transparent insights into multilingual AI performance.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 pt-8 animate-fade-in-up [animation-delay:400ms]">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <Globe className="h-6 w-6 text-primary" />
                <span>2</span>
              </div>
              <p className="text-sm text-muted-foreground">Languages</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-2xl font-bold">
                <Award className="h-6 w-6 text-primary" />
                <span>12+</span>
              </div>
              <p className="text-sm text-muted-foreground">Benchmarks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
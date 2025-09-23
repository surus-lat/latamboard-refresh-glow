import { useI18n } from '../i18n/I18nProvider'
import Markdown from 'markdown-to-jsx'
import aboutEnMd from '../content/about.en.md?raw'
import aboutEsMd from '../content/about.es.md?raw'
import aboutPtMd from '../content/about.pt.md?raw'

export function About() {
  const { locale } = useI18n()

  const contentMap = {
    en: aboutEnMd,
    es: aboutEsMd,
    pt: aboutPtMd
  }

  const content = contentMap[locale] || contentMap.en

  return (
    <div className="container prose prose-neutral max-w-3xl py-10">
      <Markdown>{content}</Markdown>
    </div>
  )
}




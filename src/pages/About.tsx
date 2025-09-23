import { useI18n } from '../i18n/I18nProvider'
import Markdown from 'markdown-to-jsx'

export function About() {
  const { t } = useI18n()

  // Create markdown content dynamically from translations
  const aboutContent = `
# ${t('about.title')}

${t('about.p1')}

${t('about.p2')}

## ${t('about.mission_title')}

${t('about.mission_p')}

## ${t('about.why_title')}

### ${t('about.culture_sub')}

${t('about.culture_p1')}

${t('about.culture_p2')}

### ${t('about.signals_sub')}

${t('about.signals_p')}

### ${t('about.bridge_sub')}

${t('about.bridge_p')}

## ${t('about.how_title')}

${t('about.how_p')}

- ${t('about.how_li1')}
- ${t('about.how_li2')}
- ${t('about.how_li3')}
- ${t('about.how_li4')}

### ${t('about.evolving_title')}

- ${t('about.evolving_li1')}
- ${t('about.evolving_li2')}
- ${t('about.evolving_li3')}

## ${t('about.community_title')}

### ${t('about.aips_sub')}

${t('about.aips_p')}

### ${t('about.research_sub')}

${t('about.research_p')}

### ${t('about.devs_sub')}

${t('about.devs_p')}

### ${t('about.companies_sub')}

${t('about.companies_p')}

## ${t('about.commit_title')}

- **${t('about.commit_li1').split(':')[0]}:** ${t('about.commit_li1').split(':').slice(1).join(':').trim()}
- **${t('about.commit_li2').split(':')[0]}:** ${t('about.commit_li2').split(':').slice(1).join(':').trim()}
- **${t('about.commit_li3').split(':')[0]}:** ${t('about.commit_li3').split(':').slice(1).join(':').trim()}
- **${t('about.commit_li4').split(':')[0]}:** ${t('about.commit_li4').split(':').slice(1).join(':').trim()}

## ${t('about.future_title')}

${t('about.future_p')}

## ${t('about.ready_title')}

${t('about.ready_p')}
  `

  return (
    <div className="container prose prose-neutral max-w-3xl py-10">
      <Markdown>{aboutContent}</Markdown>
    </div>
  )
}




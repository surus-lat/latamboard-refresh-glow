import { useI18n } from '../i18n/I18nProvider'

export function About() {
  const { t } = useI18n()
  return (
    <div className="container prose prose-neutral max-w-3xl py-10">
      <h1>{t('about.title')}</h1>
      <p>{t('about.p1')}</p>
      <p>{t('about.p2')}</p>

      <h2>{t('about.mission_title')}</h2>
      <p>{t('about.mission_p')}</p>

      <h2>{t('about.why_title')}</h2>
      <h3>{t('about.culture_sub')}</h3>
      <p>{t('about.culture_p1')}</p>
      <p>{t('about.culture_p2')}</p>
      <h3>{t('about.signals_sub')}</h3>
      <p>{t('about.signals_p')}</p>
      <h3>{t('about.bridge_sub')}</h3>
      <p>{t('about.bridge_p')}</p>

      <h2>{t('about.how_title')}</h2>
      <p>{t('about.how_p')}</p>
      <ul>
        <li>{t('about.how_li1')}</li>
        <li>{t('about.how_li2')}</li>
        <li>{t('about.how_li3')}</li>
        <li>{t('about.how_li4')}</li>
      </ul>

      <h3>{t('about.evolving_title')}</h3>
      <ul>
        <li>{t('about.evolving_li1')}</li>
        <li>{t('about.evolving_li2')}</li>
        <li>{t('about.evolving_li3')}</li>
      </ul>

      <h2>{t('about.community_title')}</h2>
      <h3>{t('about.aips_sub')}</h3>
      <p>{t('about.aips_p')}</p>
      <h3>{t('about.research_sub')}</h3>
      <p>{t('about.research_p')}</p>
      <h3>{t('about.devs_sub')}</h3>
      <p>{t('about.devs_p')}</p>
      <h3>{t('about.companies_sub')}</h3>
      <p>{t('about.companies_p')}</p>

      <h2>{t('about.commit_title')}</h2>
      <ul>
        <li><strong>{t('about.commit_li1').split(':')[0]}:</strong> {t('about.commit_li1').split(':').slice(1).join(':').trim()}</li>
        <li><strong>{t('about.commit_li2').split(':')[0]}:</strong> {t('about.commit_li2').split(':').slice(1).join(':').trim()}</li>
        <li><strong>{t('about.commit_li3').split(':')[0]}:</strong> {t('about.commit_li3').split(':').slice(1).join(':').trim()}</li>
        <li><strong>{t('about.commit_li4').split(':')[0]}:</strong> {t('about.commit_li4').split(':').slice(1).join(':').trim()}</li>
      </ul>

      <h2>{t('about.future_title')}</h2>
      <p>{t('about.future_p')}</p>

      <h2>{t('about.ready_title')}</h2>
      <p>{t('about.ready_p')}</p>
    </div>
  )
}




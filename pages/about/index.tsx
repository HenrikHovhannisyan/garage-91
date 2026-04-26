import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import YandexMap from '@/components/YandexMap/YandexMap';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import styles from './about.module.css';

export default function About() {
  const { t, language } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{siteData.name} - {t('aboutTitle')}</title>
        <meta name="description" content={t('ogDescription')} />
      </Head>

      <div className="container">
        <Link href="/" className={styles.backButton}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          {t('back')}
        </Link>
      </div>

      {/* Simple Clean Hero */}
      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.mainTitle}>{t('aboutTitle')}</h1>
            <div className={styles.divider}></div>
            <p className={styles.heroLead}>{t('heroSubtitle')}</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.mainContentSection}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <div className={styles.fullText}>
              {t('aboutText').split('\n\n').map((para: string, index: number) => (
                <p key={index} className={styles.fadeIn} style={{ animationDelay: `${index * 0.2}s` }} dangerouslySetInnerHTML={{ __html: para.replace(/\n/g, '<br />') }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3>{language === 'hy' ? 'Բազմամյա փորձ' : language === 'ru' ? 'Многолетний опыт' : 'Years of Expertise'}</h3>
              <p>{language === 'hy' ? 'Տարիների խորը մասնագիտացում Hyundai և Kia ավտոմեքենաների ռուսաֆիկացման գործում:' : language === 'ru' ? 'Глубокая многолетняя специализация в русификации автомобилей Hyundai и Kia.' : 'Deep specialization in Hyundai and Kia vehicle localization over many years.'}</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
              <h3>{language === 'hy' ? 'Պրոֆեսիոնալիզմ' : language === 'ru' ? 'Профессионализм' : 'Professionalism'}</h3>
              <p>{language === 'hy' ? 'Անհատական մոտեցում յուրաքանչյուր մեքենային և բարձրակարգ լուծումների կիրառում:' : language === 'ru' ? 'Индивидуальный подход к каждому автомобилю и использование лучших решений.' : 'Individual approach to every car using the best solutions.'}</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3>{language === 'hy' ? 'Վստահություն' : language === 'ru' ? 'Доверие и Гарантия' : 'Trust & Warranty'}</h3>
              <p>{language === 'hy' ? 'Մեր հաճախորդների վստահությունը և կատարված աշխատանքի երկարատև երաշխիքը մեր առաջնահերթությունն են:' : language === 'ru' ? 'Доверие наших клиентов и долгосрочная гарантия на все работы — наш главный приоритет.' : 'Our clients trust and long-term warranty on all works are our top priority.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.darkBg}`}>
        <div className="container">
          <h2 className="section-title">{t('contactsTitle')}</h2>
          <div className={styles.contactsGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <strong>{t('address')}</strong>
                    <p>{siteData.address[language as keyof typeof siteData.address] || siteData.address.hy}</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <strong>{t('phone')}</strong>
                    <p><a href={`tel:${siteData.phone}`}>{siteData.phone}</a></p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <strong>{t('email')}</strong>
                    <p><a href={`mailto:${siteData.email}`}>{siteData.email}</a></p>
                  </div>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href={siteData.socials.instagram} target="_blank" rel="noreferrer" title="Instagram">
                  <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" />
                </a>
                <a href={siteData.socials.facebook} target="_blank" rel="noreferrer" title="Facebook">
                  <img src="https://cdn.simpleicons.org/facebook/ffffff" alt="Facebook" />
                </a>
                <a href={siteData.socials.telegram} target="_blank" rel="noreferrer" title="Telegram">
                  <img src="https://cdn.simpleicons.org/telegram/ffffff" alt="Telegram" />
                </a>
                <a href={siteData.socials.whatsapp} target="_blank" rel="noreferrer" title="WhatsApp">
                  <img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="WhatsApp" />
                </a>
              </div>

              <a
                href={`https://yandex.ru/maps/?rtext=~${siteData.coordinates.lat},${siteData.coordinates.lon}`}
                target="_blank"
                rel="noreferrer"
                className={`btn-primary ${styles.mapBtn}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                {t('getDirections')}
              </a>
            </div>

            <div className={styles.mapWrapper}>
              <YandexMap lat={siteData.coordinates.lat} lon={siteData.coordinates.lon} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import WorkItem from '@/components/WorkItem/WorkItem';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import { testimonials } from '@/data/testimonials';
import { faqData } from '@/data/faq';
import TestimonialsSlider from '@/components/TestimonialsSlider/TestimonialsSlider';
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion';
import YandexMap from '@/components/YandexMap/YandexMap';
import styles from './index.module.css';

export default function Home() {
  const { t, language } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{siteData.name} - {t('heroAction')}</title>
        <meta name="description" content={t('heroSubtitle')} />
        <meta name="keywords" content={t('keywords')} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={t('ogTitle')} />
        <meta property="og:description" content={t('ogDescription')} />
        <meta property="og:image" content={`${siteData.url}/logo.png`} />
        <meta property="og:url" content={siteData.url} />
        <meta property="og:type" content="website" />
        
        {/* Canonical */}
        <link rel="canonical" href={siteData.url} />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            <div className={styles.logoRow}>
              <img src="https://cdn.simpleicons.org/hyundai/ffffff" alt="Hyundai" className={styles.hyundaiLogo} />
              <div className={styles.logoDivider}></div>
              <img src="https://cdn.simpleicons.org/kia/ffffff" alt="Kia" className={styles.kiaLogo} />
            </div>
            <div className={styles.actionText}>{t('heroAction')}</div>
          </h1>
          <p className={styles.heroSubtitle}>{t('heroSubtitle')}</p>
          <a href="#about" className="btn-primary">{t('heroButton')}</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">{t('aboutTitle')}</h2>
          <div className={styles.aboutContent}>
            <p dangerouslySetInnerHTML={{ __html: t('aboutText').replace(/\n/g, '<br />') }} />
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className={`section ${styles.darkBg}`}>
        <div className="container">
          <h2 className="section-title">{t('worksTitle')}</h2>
          <div className={styles.worksGrid}>
            {siteData.works.slice(0, 6).map(work => (
              <WorkItem key={work.id} work={work} />
            ))}
          </div>
          <div className={styles.centerBtn}>
            <Link href="/works" className="btn-primary">
              {t('seeAllWorks')}
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="section">
        <div className="container">
          <h2 className="section-title">{t('reviewsTitle')}</h2>
          <div className={styles.reviewsGrid}>
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`section ${styles.darkBg}`}>
        <div className="container">
          <h2 className="section-title">{t('faqTitle')}</h2>
          <div className={styles.faqWrapper}>
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="section">
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

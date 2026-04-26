import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import WorkItem from '@/components/WorkItem/WorkItem';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import { testimonials } from '@/data/testimonials';
import TestimonialsSlider from '@/components/TestimonialsSlider/TestimonialsSlider';
import styles from './index.module.css';

export default function Home() {
  const { t, locale } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{siteData.name} - {t('heroAction')}</title>
        <meta name="description" content={t('heroSubtitle')} />
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
            <p>{t('aboutText')}</p>
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
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3>Որքա՞ն է տևում ծրագրավորումը:</h3>
              <p>Սովորաբար 1-2 ժամ:</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Արդյո՞ք երաշխիք տրվում է:</h3>
              <p>Այո, մենք տրամադրում ենք երաշխիք մեր կատարած աշխատանքի համար:</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="section">
        <div className="container">
          <h2 className="section-title">{t('contactsTitle')}</h2>
          <div className={styles.contactsGrid}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <strong>{t('address')}:</strong> {siteData.address}
              </div>
              <div className={styles.contactItem}>
                <strong>{t('phone')}:</strong> <a href={`tel:${siteData.phone}`}>{siteData.phone}</a>
              </div>
              <div className={styles.contactItem}>
                <strong>{t('email')}:</strong> <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
              </div>
              <a 
                href={`https://yandex.ru/maps/?text=${encodeURIComponent(siteData.address)}`} 
                target="_blank" 
                rel="noreferrer" 
                className={`btn-primary ${styles.mapBtn}`}
              >
                {t('getDirections')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

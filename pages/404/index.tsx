// Custom 404 page
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import styles from './404.module.css';

export default function Custom404() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{siteData.name} - {t('error404Title')}</title>
      </Head>

      <section className={styles.errorSection}>
        <div className="container">
          <div className={styles.errorContent}>
            <div className={styles.errorCode}>404</div>
            <h1 className={styles.errorTitle}>{t('error404Title')}</h1>
            <p className={styles.errorText}>{t('error404Text')}</p>
            <Link href="/" className="btn-primary">
              {t('backHome')}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

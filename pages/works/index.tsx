import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import WorkItem from '@/components/WorkItem/WorkItem';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import styles from './works.module.css';

export default function Works() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(siteData.works.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWorks = siteData.works.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <Head>
        <title>{siteData.name} - {t('allWorks')}</title>
        <meta name="description" content={t('worksTitle')} />
        <meta name="keywords" content={t('keywords')} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={`${siteData.name} - ${t('allWorks')}`} />
        <meta property="og:description" content={t('worksTitle')} />
        <meta property="og:image" content="https://garage-91.vercel.app/logo.png" />
        <meta property="og:url" content="https://garage-91.vercel.app/works" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteData.name} />
        
        {/* Canonical */}
        <link rel="canonical" href="https://garage-91.vercel.app/works" />
      </Head>

      <section className="section">
        <div className="container">
          <h1 className="section-title">{t('allWorks')}</h1>
          
          <div className={styles.worksGrid}>
            {currentWorks.map(work => (
              <WorkItem key={work.id} work={work} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

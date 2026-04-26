import React, { useState } from 'react';
import { useTranslation } from '@/utils/translations';
import styles from './WorkItem.module.css';

interface WorkItemProps {
  work: {
    id: number;
    brand: string;
    model: string;
    year: number;
    beforeImg: string;
    afterImg: string;
    descKey?: string;
  };
}

const WorkItem = ({ work }: WorkItemProps) => {
  const { t } = useTranslation();
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className={styles.workItem}>
      <div className={styles.imageContainer} onClick={() => setShowAfter(!showAfter)}>
        {showAfter ? (
          <div className={styles.imgWrapper}>
            <div className={styles.label}>{t('after')}</div>
            <img src={work.afterImg} alt={`${work.brand} ${work.model} After`} loading="lazy" />
          </div>
        ) : (
          <div className={styles.imgWrapper}>
            <div className={styles.label}>{t('before')}</div>
            <img src={work.beforeImg} alt={`${work.brand} ${work.model} Before`} loading="lazy" />
          </div>
        )}
      </div>
      
      <div className={styles.controls}>
        <button 
          className={`${styles.toggleBtn} ${!showAfter ? styles.activeBtn : ''}`}
          onClick={() => setShowAfter(false)}
        >
          {t('before')}
        </button>
        <button 
          className={`${styles.toggleBtn} ${showAfter ? styles.activeBtn : ''}`}
          onClick={() => setShowAfter(true)}
        >
          {t('after')}
        </button>
      </div>

      <div className={styles.info}>
        <h3>{work.brand} {work.model} ({work.year})</h3>
        <p>{work.descKey ? t(work.descKey) : t('workDesc')}</p>
      </div>
    </div>
  );
};

export default WorkItem;

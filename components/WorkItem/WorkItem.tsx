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
  };
}

const WorkItem = ({ work }: WorkItemProps) => {
  const { t } = useTranslation();
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div 
      className={styles.workItem}
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onClick={() => setShowAfter(!showAfter)}
    >
      <div className={styles.imageContainer}>
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
      <div className={styles.info}>
        <h3>{work.brand} {work.model} ({work.year})</h3>
        <p>{t('workDesc')}</p>
      </div>
    </div>
  );
};

export default WorkItem;

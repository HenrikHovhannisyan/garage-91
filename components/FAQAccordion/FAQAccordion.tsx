import React, { useState } from 'react';
import { useTranslation } from '@/utils/translations';
import styles from './FAQAccordion.module.css';

interface FAQItem {
  id: number;
  question: { [key: string]: string };
  answer: { [key: string]: string };
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const { language } = useTranslation();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <div 
          key={item.id} 
          className={`${styles.item} ${openId === item.id ? styles.active : ''}`}
        >
          <button 
            className={styles.question} 
            onClick={() => toggleItem(item.id)}
            aria-expanded={openId === item.id}
          >
            <span>{item.question[language] || item.question.hy}</span>
            <span className={styles.icon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </span>
          </button>
          <div className={styles.answerWrapper}>
            <div className={styles.answer}>
              <p>{item.answer[language] || item.answer.hy}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;

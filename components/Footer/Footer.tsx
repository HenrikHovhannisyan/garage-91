import React from 'react';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.info}>
          <h3>Garage-91</h3>
          <p>{siteData.address}</p>
          <p>{siteData.phone}</p>
          <p>{siteData.email}</p>
        </div>
        <div className={styles.links}>
          <a href={siteData.socials.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={siteData.socials.facebook} target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} Garage-91. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

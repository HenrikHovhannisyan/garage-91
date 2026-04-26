import React from 'react';
import { useTranslation } from '@/utils/translations';
import { siteData } from '@/data/data';
import styles from './Footer.module.css';

const Footer = () => {
  const { language, t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.mainContent}>
          <div className={styles.logoCol}>
            <img src="/logo.png" alt="Garage-91 Logo" className={styles.footerLogo} />
          </div>

          <div className={styles.infoCol}>
            <p>{siteData.address[language as keyof typeof siteData.address] || siteData.address.hy}</p>
            <p><a href={`tel:${siteData.phone}`}>{siteData.phone}</a></p>
            <p><a href={`mailto:${siteData.email}`}>{siteData.email}</a></p>
          </div>

          <div className={styles.socialCol}>
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
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copy}>
            &copy; {new Date().getFullYear()} {siteData.name}. {t('allRightsReserved')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

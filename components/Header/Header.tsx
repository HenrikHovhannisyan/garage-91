import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from '@/utils/translations';
import { useTheme } from '@/utils/theme';
import styles from './Header.module.css';

const Header = () => {
  const { t, language, changeLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const router = useRouter();
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isHomePage = router.pathname === '/' || router.pathname === '/home';
    
    if (href === '/') {
      if (isHomePage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      closeMenu();
      return;
    }

    if (href.startsWith('/#')) {
      if (isHomePage) {
        e.preventDefault();
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          closeMenu();
        }
      } else {
        // On other pages, let Next.js navigate to the home page anchor
        closeMenu();
      }
    } else {
      closeMenu();
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={(e) => handleNavClick(e as any, '/')}>
          <img src="/logo.png" alt="Garage-91 Logo" />
        </Link>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" onClick={(e) => handleNavClick(e as any, '/')}>{t('home')}</Link>
          <Link href="/#about" onClick={(e) => handleNavClick(e as any, '/#about')}>{t('about')}</Link>
          <Link href="/works" onClick={closeMenu}>{t('works')}</Link>
          <Link href="/#reviews" onClick={(e) => handleNavClick(e as any, '/#reviews')}>{t('reviews')}</Link>
          <Link href="/#faq" onClick={(e) => handleNavClick(e as any, '/#faq')}>{t('faq')}</Link>
          <Link href="/#contacts" onClick={(e) => handleNavClick(e as any, '/#contacts')}>{t('contacts')}</Link>
        </nav>
        
        <div className={styles.controls}>
          <div className={styles.langSwitch}>
            <button 
              onClick={() => changeLanguage('hy')} 
              className={language === 'hy' ? styles.activeLang : ''}
              title="Armenian"
            >
              <img src="https://flagcdn.com/w40/am.png" alt="Armenia" />
            </button>
            <button 
              onClick={() => changeLanguage('ru')} 
              className={language === 'ru' ? styles.activeLang : ''}
              title="Russian"
            >
              <img src="https://flagcdn.com/w40/ru.png" alt="Russia" />
            </button>
            <button 
              onClick={() => changeLanguage('en')} 
              className={language === 'en' ? styles.activeLang : ''}
              title="English"
            >
              <img src="https://flagcdn.com/w40/gb.png" alt="UK" />
            </button>
          </div>

          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
          
          <button className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`${styles.line} ${isMenuOpen ? styles.line1 : ''}`}></div>
            <div className={`${styles.line} ${isMenuOpen ? styles.line2 : ''}`}></div>
            <div className={`${styles.line} ${isMenuOpen ? styles.line3 : ''}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

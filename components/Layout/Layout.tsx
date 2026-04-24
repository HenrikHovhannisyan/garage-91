import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(err => {
          console.log('Service Worker registration failed: ', err);
        });
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', marginTop: '80px' }}>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;

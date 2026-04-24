import '@/styles/globals.css';
import { TranslationProvider } from '@/utils/translations';
import { ThemeProvider } from '@/utils/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta name="theme-color" content="#ff0000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <Component {...pageProps} />
      </TranslationProvider>
    </ThemeProvider>
  );
}

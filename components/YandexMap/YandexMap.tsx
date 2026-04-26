import React from 'react';
import { useTheme } from '@/utils/theme';
import { useTranslation } from '@/utils/translations';
import styles from './YandexMap.module.css';

interface YandexMapProps {
  lat: number;
  lon: number;
}

const YandexMap: React.FC<YandexMapProps> = ({ lat, lon }) => {
  const { theme } = useTheme();
  const { language } = useTranslation();
  
  // Map our language codes to Yandex Map language formats
  const langMap: { [key: string]: string } = {
    hy: 'hy_AM',
    ru: 'ru_RU',
    en: 'en_US'
  };
  
  const yandexLang = langMap[language] || 'ru_RU';
  
  // Construct the Yandex Map Widget URL
  // l=map,trf adds the traffic layer by default
  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=16&pt=${lon}%2C${lat}%2Cpm2rdl&theme=${theme}&lang=${yandexLang}&l=map%2Ctrf`;

  return (
    <div className={styles.mapContainer}>
      <iframe 
        src={mapUrl} 
        width="100%" 
        height="100%" 
        frameBorder="0" 
        allowFullScreen={true}
        style={{ position: 'relative' }}
        title="Garage-91 Location"
      ></iframe>
    </div>
  );
};

export default YandexMap;

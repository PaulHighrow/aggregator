import CookieConsent from 'react-cookie-consent';

export const InvertedConsent = () => {
  return (
    <CookieConsent
      buttonText="✔ Погоджуюсь"
      cookieName="aggregator-consent"
      style={{
        background: 'white',
        color: '#0B4943',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
      }}
      buttonStyle={{
        background: '#f5ce46',
        borderRadius: '20px',
        color: '#0B4943',
        fontSize: '18px',
      }}
      expires={150}
    >
      Ми використовуємо файли cookie на нашому веб-сайті, щоб бачити, як ви з
      ним взаємодієте. Приймаючи, ви погоджуєтесь на використання таких файлів
      cookie.
    </CookieConsent>
  );
};

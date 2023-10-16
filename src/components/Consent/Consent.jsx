import CookieConsent from 'react-cookie-consent';

export const Consent = () => {
  return (
    <CookieConsent
      buttonText="✔ Погоджуюсь"
      cookieName="aggregator-consent"
      style={{
        background: '#0B4943',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
      }}
      buttonStyle={{
        background: '#f5ce46',
        borderRadius: '20px',
        color: '#000000',
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

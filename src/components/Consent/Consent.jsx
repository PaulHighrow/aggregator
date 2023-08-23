import CookieConsent from 'react-cookie-consent';

export const Consent = () => {
  return (
    <CookieConsent
      buttonText="🎓 Погоджуюсь"
      cookieName="skillhub-consent"
      style={{
        background: '#2B373B',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      buttonStyle={{
        background: '#f5ce46',
        color: '#000000',
        fontSize: '16px',
      }}
      expires={150}
    >
      Ми використовуємо файли cookie на нашому веб-сайті, щоб бачити, як ви з
      ним взаємодієте. Приймаючи, ви погоджуєтесь на використання таких файлів
      cookie.
    </CookieConsent>
  );
};

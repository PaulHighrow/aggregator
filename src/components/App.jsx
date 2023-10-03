import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Loader } from 'utils/Loader/Loader';
import { AboutUs } from './AboutUs/AboutUs';
import { Admission } from './Admission/Admission';
import { BackgroundWrapper } from './BackgroundWrapper/BackgroundWrappers';
import { Consent } from './Consent/Consent';
import { EdCenter } from './EdCenter/EdCenter';
import { ExamCenter } from './ExamCenter/ExamCenter';
import { Hero } from './Hero/Hero';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { LeadForm } from './LeadForm/LeadForm';
import { MainFooter } from './MainFooter/MainFooter';
import { Menu } from './Menu/Menu';
import { Translations } from './Translations/Translations';
import { UpButton } from './UpButton/UpButton';
import { useSearchParams } from 'react-router-dom';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const [searchParams, _] = useSearchParams();

  const localStorageTagSetter = tag => {
    localStorage.setItem(tag, searchParams.get(tag));
  };

  const localStorageTagGetter = tag => {
    localStorage.getItem(tag);
  };

  localStorageTagSetter('utm_content');
  localStorageTagSetter('utm_medium');
  localStorageTagSetter('utm_campaign');
  localStorageTagSetter('utm_source');
  localStorageTagSetter('utm_term');
  localStorageTagSetter('utm_referrer');

  const utms = {
    utm_content: localStorageTagGetter('utm_content'),
    utm_medium: localStorageTagGetter('utm_medium'),
    utm_campaign: localStorageTagGetter('utm_campaign'),
    utm_source: localStorageTagGetter('utm_source'),
    utm_term: localStorageTagGetter('utm_term'),
    utm_referrer: localStorageTagGetter('utm_referrer'),
  };

  const wakeupRequest = async () => {
    setIsLoading(isLoading => (isLoading = true));
    try {
      const wake = await axios.get('/');
      console.log(wake);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const authRequest = async () => {
    setIsLoading(isLoading => (isLoading = true));
    try {
      const auth = await axios.post('/tokens');
      console.log(auth);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(isLoading => (isLoading = false));
    }
  };

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(isOpen => (isOpen = false));
    !document.body.style.overflowY && isOpenModal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useLayoutEffect(() => {
    wakeupRequest();
    authRequest();
  }, []);

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isOpenModal) {
        closeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      {!isLoading && (
        <>
          <Menu toggleModal={toggleModal} />
          <BackgroundWrapper>
            <Hero closeModal={closeModal} toggleModal={toggleModal} />
            <HowItWorks />
          </BackgroundWrapper>
          <EdCenter />
          <Admission />
          <Translations />
          <ExamCenter toggleModal={toggleModal} />
          <AboutUs />
          <MainFooter toggleModal={toggleModal} />
          <UpButton />
          <Consent />
          {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
        </>
      )}
      {isLoading && <Loader />}
    </>
  );
};

import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Loader } from 'utils/Loader/Loader';
import { Admission } from './Admission/Admission';
import { BackgroundWrapper } from './BackgroundWrapper/BackgroundWrapper';
import { Consent } from './Consent/Consent';
import { EdCenter } from './EdCenter/EdCenter';
import { ExamCenter } from './ExamCenter/ExamCenter';
import { Hero } from './Hero/Hero';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { LeadForm } from './LeadForm/LeadForm';
import { MainFooter } from './MainFooter/MainFooter';
import { Menu } from './Menu/Menu';
import { Translations } from './Translations/Translations';
import { AboutUs } from './AboutUs/AboutUs';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);

  const wakeupRequest = async () => {
    setIsLoading(isLoading => (isLoading = true));
    try {
      const wake = await axios.get('https://skillhub-server.onrender.com');
      console.log(wake);
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
            <Hero closeModal={closeModal}/>
            <HowItWorks />
          </BackgroundWrapper>
          <EdCenter />
          <Admission />
          <Translations />
          <ExamCenter toggleModal={toggleModal} />
          <AboutUs />
          <MainFooter toggleModal={toggleModal} />
          <Consent />
          {isOpenModal && <LeadForm closeModal={closeModal} />}
        </>
      )}
      {isLoading && <Loader />}
    </>
  );
};

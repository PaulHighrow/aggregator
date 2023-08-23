import axios from 'axios';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Loader } from 'utils/Loader/Loader';
import { About } from './About/About';
import { Hero } from './Hero/Hero';
import { LeadForm } from './LeadForm/LeadForm';
import { MainFooter } from './MainFooter/MainFooter';
import { Menu } from './Menu/Menu';
import { Services } from './Services/Services';
import { Testimonials } from './Testimonials/Testimonials';
import { Consent } from './Consent/Consent';

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
      if (event.code === 'Escape') {
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
          <Hero toggleModal={toggleModal} />
          <About toggleModal={toggleModal} />
          <Services />
          <Testimonials toggleModal={toggleModal} />
          <MainFooter />
          <Consent />
          {isOpenModal && <LeadForm closeModal={closeModal} />}
        </>
      )}
      {isLoading && <Loader />}
    </>
  );
};

import { AboutUs } from 'components/AboutUs/AboutUs';
import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Consent } from 'components/Consent/Consent';
import { EdCenter } from 'components/EdCenter/EdCenter';
import { ExamCenter } from 'components/ExamCenter/ExamCenter';
import { Hero } from 'components/Hero/Hero';
import { HowItWorks } from 'components/HowItWorks/HowItWorks';
import { Translations } from 'components/Translations/Translations';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <BackgroundWrapper>
        <Hero closeModal={closeModal} toggleModal={toggleModal} />
        <HowItWorks />
      </BackgroundWrapper>
      <EdCenter toggleModal={toggleModal} closeModal={closeModal}/>
      {/* <Admission /> */}
      <Translations />
      <ExamCenter toggleModal={toggleModal} />
      <AboutUs />
      <Consent />
    </>
  );
};

export default Home;

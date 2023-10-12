import { AboutUs } from 'components/AboutUs/AboutUs';
import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Consent } from 'components/Consent/Consent';
import { EdCenter } from 'components/EdCenter/EdCenter';
import { ExamCenter } from 'components/ExamCenter/ExamCenter';
import { Hero } from 'components/Hero/Hero';
import { HowItWorks } from 'components/HowItWorks/HowItWorks';
import { LeadForm } from 'components/LeadForm/LeadForm';
import { MainFooter } from 'components/MainFooter/MainFooter';
import { Menu } from 'components/Menu/Menu';
import { Translations } from 'components/Translations/Translations';
import { UpButton } from 'components/UpButton/UpButton';
import { useEffect, useState } from 'react';

const Home = (utms) => {
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
      <Menu toggleModal={toggleModal} />
      <BackgroundWrapper>
        <Hero closeModal={closeModal} toggleModal={toggleModal} />
        <HowItWorks />
      </BackgroundWrapper>
      <EdCenter />
      {/* <Admission /> */}
      <Translations />
      <ExamCenter toggleModal={toggleModal} />
      <AboutUs />
      <MainFooter toggleModal={toggleModal} />
      <UpButton />
      <Consent />
      {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
    </>
  );
};

export default Home;

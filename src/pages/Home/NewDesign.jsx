import { AboutUs } from 'components/AboutUs/AboutUs';
import { BackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Consent } from 'components/Consent/Consent';
import { EdPlatform } from 'components/EdPlatform/EdPlatform';
import { HeroNew } from 'components/Hero/HeroNew';
import { HowItWorks } from 'components/HowItWorks/HowItWorks';
import { LeadForm } from 'components/LeadForm/LeadForm';
import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';

const NewDesign = ({ utms }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(isOpen => !isOpen);
    if (!document.body.style.overflowY) {
      document.body.style.overflowY = 'hidden';
    }
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

    console.log(window.screen);

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      <BackgroundWrapper>
        <HeroNew toggleModal={toggleModal} />
        <HowItWorks />
      </BackgroundWrapper>
      <EdPlatform />
      {/* <Admission /> */}
      {/* <Translations utms={utms} /> */}
      <Reviews toggleModal={toggleModal} />
      {/* <ExamCenter toggleModal={toggleModal} closeModal={closeModal} /> */}
      <AboutUs />
      <Consent />
      {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
    </>
  );
};

export default NewDesign;

import { AboutUs } from 'components/AboutUs/AboutUs';
import { Consent } from 'components/Consent/Consent';
import { ApSchool } from 'components/EdPlatform/ApSchool';
import { HeroNew } from 'components/Hero/HeroNew';
import { HowItWorksNew } from 'components/HowItWorks/HowItWorksNew';
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
      <HeroNew toggleModal={toggleModal} />
      <HowItWorksNew />
      <ApSchool />
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

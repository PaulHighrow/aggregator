import { APCourses } from 'components/APCourses/APCourses';
import { APSchool } from 'components/APSchool/APSchool';
import { APUniversity } from 'components/APUniversity/APUniversity';
import { Consent } from 'components/Consent/Consent';
import { HeroNew } from 'components/Hero/HeroNew';
import { HowItWorksNew } from 'components/HowItWorks/HowItWorksNew';
import { LeadForm } from 'components/LeadForm/LeadForm';
import { PageFormNew } from 'components/PageFormNew/PageFormNew';
import { ReviewsNew } from 'components/Reviews/ReviewsNew';
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
      <APSchool />
      <APUniversity />
      <APCourses />
      {/* <Admission /> */}
      {/* <Translations utms={utms} /> */}
      <ReviewsNew />
      <PageFormNew utms={utms}/>
      {/* <ExamCenter toggleModal={toggleModal} closeModal={closeModal} /> */}
      <Consent />
      {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
    </>
  );
};

export default NewDesign;

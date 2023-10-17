import { InvertedBackgroundWrapper } from "components/BackgroundWrapper/InvertedBackgroundWrappers";
import { InvertedConsent } from "components/Consent/InvertedConsent";
import { useEffect, useState } from "react";
import { InvertedAboutUs } from "./InvertedAboutUs/InvertedAboutUs";
import { InvertedEdCenter } from "./InvertedEdCenter/InvertedEdCenter";
import { InvertedExamCenter } from "./InvertedExamCenter/InvertedExamCenter";
import { InvertedHero } from "./InvertedHero/InvertedHero";
import { InvertedHowItWorks } from "./InvertedHowItWorks/InvertedHowItWorks";
import { InvertedTranslations } from "./InvertedTranslations/InvertedTranslations";

const Clone = () => {
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
      <InvertedBackgroundWrapper>
        <InvertedHero closeModal={closeModal} toggleModal={toggleModal} />
        <InvertedHowItWorks />
      </InvertedBackgroundWrapper>
      <InvertedEdCenter toggleModal={toggleModal}/>
      {/* <Admission /> */}
      <InvertedTranslations />
      <InvertedExamCenter toggleModal={toggleModal} />
      <InvertedAboutUs />
      <InvertedConsent />
    </>
  );
};

export default Clone;

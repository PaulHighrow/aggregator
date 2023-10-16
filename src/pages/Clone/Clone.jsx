import { InvertedBackgroundWrapper } from "components/BackgroundWrapper/InvertedBackgroundWrappers";
import { InvertedConsent } from "components/Consent/InvertedConsent";
import { LeadForm } from "components/LeadForm/LeadForm";
import { UpButton } from "components/UpButton/UpButton";
import { useEffect, useState } from "react";
import { InvertedAboutUs } from "./InvertedAboutUs/InvertedAboutUs";
import { InvertedEdCenter } from "./InvertedEdCenter/InvertedEdCenter";
import { InvertedExamCenter } from "./InvertedExamCenter/InvertedExamCenter";
import { InvertedHero } from "./InvertedHero/InvertedHero";
import { InvertedHowItWorks } from "./InvertedHowItWorks/InvertedHowItWorks";
import { InvertedMainFooter } from "./InvertedMainFooter/InvertedMainFooter";
import { InvertedMenu } from "./InvertedMenu/InvertedMenu";
import { InvertedTranslations } from "./InvertedTranslations/InvertedTranslations";

const Clone = (utms) => {
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
      <InvertedMenu toggleModal={toggleModal} />
      <InvertedBackgroundWrapper>
        <InvertedHero closeModal={closeModal} toggleModal={toggleModal} />
        <InvertedHowItWorks />
      </InvertedBackgroundWrapper>
      <InvertedEdCenter />
      {/* <Admission /> */}
      <InvertedTranslations />
      <InvertedExamCenter toggleModal={toggleModal} />
      <InvertedAboutUs />
      <InvertedMainFooter toggleModal={toggleModal} />
      <UpButton />
      <InvertedConsent />
      {isOpenModal && <LeadForm closeModal={closeModal} utms={utms} />}
    </>
  );
};

export default Clone;

import {
  MarqueeChild,
  MarqueeOverlay,
  MarqueeText,
  MarqueeVideo,
  StyledMarquee,
} from 'components/Hero/HeroMarquee/HeroMarquee.styled';
import { MarqueeModal } from 'components/MarqueeModal/MarqueeModal';
import { useEffect, useState } from 'react';

export const HeroMarquee = ({ toggleModal }) => {
  const [isMarqueeModalOpen, setIsMarqueeModalOpen] = useState(false);
  const [modalId, setmodalId] = useState(NaN);

  const handleToggleModal = e => {
    setmodalId(e.currentTarget.id);
    setIsMarqueeModalOpen(isOpen => !isOpen);
    document.body.style.overflowY = 'hidden';
  };

  const closeMarqueeModal = () => {
    setIsMarqueeModalOpen(isOpen => (isOpen = false));
    setmodalId(modalId => (modalId = NaN));
    !document.body.style.overflowY && isMarqueeModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isMarqueeModalOpen) {
        closeMarqueeModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  return (
    <>
      {isMarqueeModalOpen && (
        <MarqueeModal
          closeMarqueeModal={closeMarqueeModal}
          toggleModal={toggleModal}
          id={modalId}
        />
      )}
      <StyledMarquee autoFill={true} pauseOnHover={true}>
        <MarqueeChild id={0} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>From Zero to Hero</MarqueeText>
          </MarqueeOverlay>
          <MarqueeVideo autoPlay loop muted={true}>
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484543/preview1_vktvdl.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484130/preview1.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild id={1} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Навчальна платформа</MarqueeText>
          </MarqueeOverlay>
          <MarqueeVideo autoPlay loop muted={true}>
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484543/preview2_kq0yix.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484130/preview2.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild id={2} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Письмова гарантія</MarqueeText>
          </MarqueeOverlay>
          <MarqueeVideo autoPlay loop muted={true}>
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484543/preview3_pvoduh.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484130/preview3.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild id={3} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Ноутбук в подарунок</MarqueeText>
          </MarqueeOverlay>
          <MarqueeVideo autoPlay loop muted={true}>
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700486374/preview4_xlqaux.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700486134/preview4.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>

        <MarqueeChild id={4} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Close to You</MarqueeText>
          </MarqueeOverlay>
          <MarqueeVideo autoPlay loop muted={true}>
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700493363/preview5_cm4htf.webm"
              type="video/webm"
            />
            <source
              src="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700493193/preview5.mp4"
              type="video/mp4"
            />
          </MarqueeVideo>
        </MarqueeChild>
      </StyledMarquee>
    </>
  );
};

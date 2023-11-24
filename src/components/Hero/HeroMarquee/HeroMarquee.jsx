import {
  MarqueeChild,
  MarqueeOverlay,
  MarqueeText,
  StyledMarquee
} from 'components/Hero/HeroMarquee/HeroMarquee.styled';
import { MarqueeModal } from 'components/MarqueeModal/MarqueeModal';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

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
          <ReactPlayer
            loop={true}
            muted={true}
            playing={true}
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            width="100%"
            height="100%"
            url="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484543/preview1_vktvdl.webm"
          />
        </MarqueeChild>

        <MarqueeChild id={1} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Навчальна платформа</MarqueeText>
          </MarqueeOverlay>
          <ReactPlayer
            loop={true}
            muted={true}
            playing={true}
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            width="100%"
            height="100%"
            url="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484543/preview2_kq0yix.webm"
          />
        </MarqueeChild>

        <MarqueeChild id={2} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Письмова гарантія</MarqueeText>
          </MarqueeOverlay>
          <ReactPlayer
            loop={true}
            muted={true}
            playing={true}
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            width="100%"
            height="100%"
            url="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700484543/preview3_pvoduh.webm"
          />
        </MarqueeChild>

        <MarqueeChild id={3} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Ноутбук в подарунок</MarqueeText>
          </MarqueeOverlay>
          <ReactPlayer
            loop={true}
            muted={true}
            playing={true}
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            width="100%"
            height="100%"
            url="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700486374/preview4_xlqaux.webm"
          />
        </MarqueeChild>

        <MarqueeChild id={4} onClick={handleToggleModal}>
          <MarqueeOverlay>
            <MarqueeText>Close to You</MarqueeText>
          </MarqueeOverlay>
          <ReactPlayer
            loop={true}
            muted={true}
            playing={true}
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            width="100%"
            height="100%"
            url="https://res.cloudinary.com/dc1nv7ign/video/upload/v1700493363/preview5_cm4htf.webm"
          />
        </MarqueeChild>
      </StyledMarquee>
    </>
  );
};

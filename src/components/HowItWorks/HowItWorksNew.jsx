import { VideoModal } from 'components/AboutUs/VideoModal/VideoModal';
import { BoxNew } from 'components/Box/Box.styled';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  HowItWorksSectionNew,
  PlayerLimiterNew,
  SectionDescription,
  SectionTitleNew,
  SectionWrapperNew,
  TitleBox,
  Video,
  VideoSoundBtn,
  WhoAreWeItem,
  WhoAreWeList,
  WhoAreWePointer,
  WhoAreWeTrigger
} from './HowItWorks.styled';

export const HowItWorksNew = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoRef, videoInView] = useInView();

  const toggleVideoModal = () => {
    setIsVideoModalOpen(isOpen => !isOpen);
    if (!document.body.style.overflowY) {
      document.body.style.overflowY = 'hidden';
    }
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(isOpen => (isOpen = false));
    !document.body.style.overflowY && isVideoModalOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = '');
  };

  useEffect(() => {
    const onEscapeClose = event => {
      if (event.code === 'Escape' && isVideoModalOpen) {
        closeVideoModal();
      }
    };

    window.addEventListener('keydown', onEscapeClose);

    return () => {
      window.removeEventListener('keydown', onEscapeClose);
    };
  });

  const listItems = ['Досвід', 'формат', 'наша освіта', 'можливості'];

  return (
    <HowItWorksSectionNew id="howitworks">
      <BoxNew>
        <SectionWrapperNew>
          <TitleBox>
            <SectionTitleNew>Хто ми?</SectionTitleNew>
            <SectionDescription>
              Дізнайся більше про нас та наш досвід
            </SectionDescription>
          </TitleBox>
          <WhoAreWeList>
            <WhoAreWePointer />
            {listItems.map((item, i) => (
              <WhoAreWeItem key={i}>
                <WhoAreWeTrigger>{item}</WhoAreWeTrigger>
              </WhoAreWeItem>
            ))}
          </WhoAreWeList>
        </SectionWrapperNew>
        <PlayerLimiterNew
          ref={videoRef}
          onClick={toggleVideoModal}
          id="howitworks-anchor"
        >
          <VideoSoundBtn />
          <Video
            loop
            controls={false}
            autoplay={videoInView ? 'true' : 'false'}
            playsInline
            muted={true}
          >
            <source
              src="https://ap.education/static/video/trailers/new-home/home-who-we-are.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/trailers/new-home/home-who-we-are.mp4"
              type="video/mp4"
            />
          </Video>
        </PlayerLimiterNew>
      </BoxNew>
      {isVideoModalOpen && (
        <VideoModal
          closeVideoModal={closeVideoModal}
          url={'https://youtu.be/fWYAkhLjpYE'}
        />
      )}
    </HowItWorksSectionNew>
  );
};

import useSize from '@react-hook/size';
import { BoxNew } from 'components/Box/Box.styled';
import { useEffect, useRef, useState } from 'react';

import {
  PlayerLimiterNew,
  SectionDescription,
  SectionTitleNew,
  TitleBox,
  Video,
  VideoSoundBtn,
  WhoAreWeItem,
  WhoAreWeList,
  WhoAreWePointer,
  WhoAreWeTrigger,
} from 'components/HowItWorks/HowItWorks.styled';
import { useInView } from 'react-intersection-observer';
import { APUniversitySection, APUniversityWrapper } from './APUniversity.styled';

export const APUniversity = () => {
  const listItems = [
    'про нас',
    'можливості',
    'стажування за кордоном',
    'європейський диплом',
  ];
  const videoUrls = [
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=17',
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=240',
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=409',
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=433',
  ];
  const [timeCode, setTimeCode] = useState('Англійська мова');
  // eslint-disable-next-line
  const [videoUrl, setVideoUrl] = useState(videoUrls[0]);
  const schoolEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(schoolEl);
  const [videoRef, videoInView] = useInView();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const toggleTimeCode = (item, i) => {
    setTimeCode(timeCode => (timeCode = item));
    setVideoUrl(videoUrl => (videoUrl = videoUrls[i]));
  };

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

  return (
    <APUniversitySection id="school" ref={schoolEl}>
      <BoxNew>
        <APUniversityWrapper>
          <TitleBox>
            <SectionTitleNew>AP University</SectionTitleNew>
            <SectionDescription>
              Дистанційний університ, який піклується про твоє майбутнє!
            </SectionDescription>
          </TitleBox>
          <WhoAreWeList>
            <WhoAreWePointer />
            {listItems.map((item, i) => (
              <WhoAreWeItem key={i}>
                <WhoAreWeTrigger
                  className={timeCode === item ? 'selected' : ''}
                  onClick={() => toggleTimeCode(item, i)}
                >
                  {item}
                </WhoAreWeTrigger>
              </WhoAreWeItem>
            ))}
          </WhoAreWeList>
        </APUniversityWrapper>
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
              src="https://ap.education/static/video/trailers/new-home/apuniversity.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/trailers/new-home/apuniversity.mp4"
              type="video/mp4"
            />
          </Video>
        </PlayerLimiterNew>
      </BoxNew>
    </APUniversitySection>
  );
};

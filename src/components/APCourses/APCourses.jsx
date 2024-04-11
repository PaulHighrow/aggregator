import useSize from '@react-hook/size';
import { BoxSchool } from 'components/Box/Box.styled';
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
  WhoAreWeTrigger
} from 'components/HowItWorks/HowItWorks.styled';
import { useInView } from 'react-intersection-observer';
import { APCoursesSection, APCoursesWrapper } from './APCourses.styled';

export const APCourses = () => {
  const listItems = [
    'Тайм-код 1',
    'Тайм-код 2',
    'Тайм-код 3',
    'Тайм-код 4',
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
    <APCoursesSection id="school" ref={schoolEl}>
      <BoxSchool>
        <APCoursesWrapper>
          <TitleBox>
            <SectionTitleNew>Мовні курси</SectionTitleNew>
            <SectionDescription>
            А якщо ми скажемо, що тобі потрібний лише рік, щоб вивчити іноземну мову до рівня B2? У цьому відео ми розкажемо, що для цього потрібно.
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
        </APCoursesWrapper>
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
              src="https://ap.education/static/video/trailers/new-home/apcourses.webm"
              type="video/webm"
            />
            <source
              src="https://ap.education/static/video/trailers/new-home/apcourses.mp4"
              type="video/mp4"
            />
          </Video>
        </PlayerLimiterNew>
      </BoxSchool>
    </APCoursesSection>
  );
};

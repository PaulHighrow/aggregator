import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { useRef, useState } from 'react';

import {
  PlayerLimiterNew,
  SectionDescription,
  SectionTitleNew,
  WhoAreWeItem,
  WhoAreWeList,
  WhoAreWePointer,
  WhoAreWeTrigger,
  YouTubeVideoSoundBtn,
} from 'components/HowItWorks/HowItWorks.styled';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy';
import { ApSchoolSection } from './ApSchool.styled';
import { EdPlatformWrapper, MoreBtnBox, VideoBox } from './EdPlatform.styled';

export const ApSchool = () => {
  const listItems = [
    'про нас',
    'можливості',
    'інтерактивне навчання',
    'VIP-Пакет',
  ];
  const videoUrls = [
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=17',
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=240',
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=409',
    'https://youtu.be/-axzcvYXKgk?si=yxFfIYIU1r8BKsTu?t=433',
  ];
  const [timeCode, setTimeCode] = useState('Англійська мова');
  const [videoUrl, setVideoUrl] = useState(videoUrls[0]);
  const edPlatformEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(edPlatformEl);
  const [videoRef, videoInView] = useInView();

  const toggleTimeCode = (item, i) => {
    setTimeCode(timeCode => (timeCode = item));
    setVideoUrl(videoUrl => (videoUrl = videoUrls[i]));
  };

  return (
    <ApSchoolSection id="platform" ref={edPlatformEl}>
      <Box>
        <SectionTitleNew>AP School</SectionTitleNew>
        <SectionDescription>
          Дистанційна школа з індивідуальним підходом. Навчаємо учнів 1-11
          класів. Видаємо державний атестат.
        </SectionDescription>
        <EdPlatformWrapper>
          <PlayerLimiterNew ref={videoRef}>
            <VideoBox>
              <YouTubeVideoSoundBtn />
              <ReactPlayer
                loop={true}
                controls={true}
                playing={videoInView ? true : false}
                muted={true}
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                width="100%"
                height="100%"
                url={videoUrl}
              />
            </VideoBox>
          </PlayerLimiterNew>
          <MoreBtnBox>
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
          </MoreBtnBox>
        </EdPlatformWrapper>
      </Box>
    </ApSchoolSection>
  );
};

import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { useRef, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy';
import {
  EdPlatformArrow,
  EdPlatformArrowInView,
  EdPlatformArrowMobile,
  EdPlatformArrowMobileInView,
  EdPlatformBackground,
  EdPlatformNavigation,
  EdPlatformSection,
  EdPlatformSubTitle,
  EdPlatformTitle,
  EdPlatformWrapper,
  EdVideoToggler,
  MoreBtnBox,
  NavigationItem,
  VideoBox,
  VideoLimiter,
} from './EdPlatform.styled';

export const EdPlatform = () => {
  const listItems = [
    'Платформа',
    'Онлайн-словник',
    'Інтерактивні уроки',
    'Призи для учнів',
  ];
  const videoUrls = [
    'https://youtu.be/18RbBq_dIDs?si=OF9HumvGCcMrOQIZ?t=17',
    'https://youtu.be/18RbBq_dIDs?si=OF9HumvGCcMrOQIZ?t=240',
    'https://youtu.be/18RbBq_dIDs?si=OF9HumvGCcMrOQIZ?t=409',
    'https://youtu.be/18RbBq_dIDs?si=OF9HumvGCcMrOQIZ?t=432',
  ];
  const [timeCode, setTimeCode] = useState('Англійська мова');
  const [videoUrl, setVideoUrl] = useState(videoUrls[0]);
  const edPlatformEl = useRef();
  // eslint-disable-next-line
  const [width, _] = useSize(edPlatformEl);

  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

  const toggleTimeCode = (item, i) => {
    setTimeCode(timeCode => (timeCode = item));
    setVideoUrl(videoUrl => (videoUrl = videoUrls[i]));
  };

  return (
    <EdPlatformBackground>
      <EdPlatformSection id="platform" ref={edPlatformEl}>
        <Box>
          <EdPlatformTitle>
            НАВЧАЛЬНА <EdPlatformSubTitle>ПЛАТФОРМА</EdPlatformSubTitle>
          </EdPlatformTitle>
          <EdPlatformWrapper>
            <VideoLimiter>
              <VideoBox>
                <ReactPlayer
                  loop={true}
                  controls={true}
                  playing={true}
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
            </VideoLimiter>
            <MoreBtnBox>
              <EdPlatformNavigation ref={ref}>
                {listItems.map((item, i) => (
                  <NavigationItem key={i}>
                    <EdVideoToggler
                      className={timeCode === item ? 'selected' : ''}
                      onClick={() => toggleTimeCode(item, i)}
                    >
                      {item}
                      {width < 768 ? (
                        <>
                          {inView && (
                            <EdPlatformArrowMobileInView
                              style={{ animationDelay: `${i}s` }}
                            />
                          )}
                          <EdPlatformArrowMobile className="on-hover" />
                        </>
                      ) : (
                        <>
                          {inView && (
                            <EdPlatformArrowInView
                              style={{ animationDelay: `${i}s` }}
                            />
                          )}
                          <EdPlatformArrow className="on-hover" />
                        </>
                      )}
                    </EdVideoToggler>
                  </NavigationItem>
                ))}
              </EdPlatformNavigation>
            </MoreBtnBox>
          </EdPlatformWrapper>
        </Box>
      </EdPlatformSection>
    </EdPlatformBackground>
  );
};

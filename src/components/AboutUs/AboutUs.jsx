import useSize from '@react-hook/size';
import {
  AboutUsBackground,
  AboutUsSection,
  AboutUsSubTitle,
  AboutUsText,
  AboutUsTitle,
  AboutUsWrapper,
  VideoBox,
  VideoLimiter,
  BottomPageNavigationText,
  LoopyLineIcon,
  NavAnimationWrapper,
  NavigationDesc,
  NavigationWrapper,
} from 'components/AboutUs/AboutUs.styled';
import { Box } from 'components/Box/Box.styled';
import {
  PageNavigation,
  PageNavigationArrow,
  PageNavigationItem,
  PageNavigationLink,
  VideoSoundBtn,
} from 'components/HowItWorks/HowItWorks.styled';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';
import { VideoModal } from './VideoModal/VideoModal';

const navListItems = [
  { to: 'howitworks', service: 'Мотивація' },
  { to: 'platform', service: 'Навчальна платформа' },
  { to: 'reviews', service: 'Відгуки про курс' },
  { to: 'aboutus', service: 'Про нас' },
];

export const AboutUs = () => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

  const [doodleRef, doodleInView] = useInView({
    triggerOnce: true,
    delay: 1000,
  });
  const [videoRef, videoInView] = useInView();

  const props =
    width < 768
      ? { spy: true, smooth: true, offset: -73 }
      : { spy: true, smooth: true };

  return (
    <AboutUsBackground>
      <AboutUsSection id="aboutus">
        <Box>
          <AboutUsTitle>
            ПРО <AboutUsSubTitle>НАС</AboutUsSubTitle>
          </AboutUsTitle>
          <AboutUsWrapper>
            <VideoLimiter ref={videoRef}>
              <VideoBox onClick={toggleVideoModal}>
                <VideoSoundBtn />
                <ReactPlayer
                  loop={true}
                  controls={false}
                  muted={true}
                  playing={videoInView ? true : false}
                  playsInline
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                  width="100%"
                  height="100%"
                  url="https://ap.education/static/video/trailers/AboutUs.webm"
                />
              </VideoBox>
            </VideoLimiter>
            <AboutUsText>
              «AP Education Center» є провідним центром навчання іноземних мов
              та підготовки до міжнародних іспитів. Ми є сертифікованим
              партнером Cambridge English та Language Cert, що дозволяє нашим
              клієнтам готуватися до іспитів та складати їх відразу у нашому
              центрі.
            </AboutUsText>
          </AboutUsWrapper>
          <NavAnimationWrapper ref={doodleRef}>
            {/* {inView && <LoopyLineMirroredIcon />} */}
            <NavigationWrapper>
              <NavigationDesc>... якщо хочеш подивитися ще раз</NavigationDesc>
              <PageNavigation>
                {navListItems.map((item, i) => (
                  <PageNavigationItem key={i}>
                    <PageNavigationLink to={item.to} {...props}>
                      {item.service}
                      <PageNavigationArrow />
                      <BottomPageNavigationText>
                        перейти
                      </BottomPageNavigationText>
                    </PageNavigationLink>
                  </PageNavigationItem>
                ))}
              </PageNavigation>
            </NavigationWrapper>
            {width > 480 && doodleInView && <LoopyLineIcon />}
          </NavAnimationWrapper>
        </Box>
        {isVideoModalOpen && (
          <VideoModal
            closeVideoModal={closeVideoModal}
            url={'https://youtu.be/YP1TFRbTfyo'}
          />
        )}
      </AboutUsSection>
    </AboutUsBackground>
  );
};

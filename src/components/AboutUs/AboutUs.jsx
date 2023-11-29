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
} from 'components/HowItWorks/HowItWorks.styled';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player';

const navListItems = [
  { to: 'howitworks', service: 'Мотивація' },
  { to: 'platform', service: 'Навчальна платформа' },
  { to: 'reviews', service: 'Відгуки про курс' },
  { to: 'aboutus', service: 'Про нас' },
];

export const AboutUs = () => {
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 1000,
  });

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
            <VideoLimiter>
              <VideoBox>
                <ReactPlayer
                  loop={true}
                  controls={false}
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
                  url='https://ap.education/static/video/trailers/AboutUs.webm'
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
          <NavAnimationWrapper ref={ref}>
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
            {width > 480 && inView && <LoopyLineIcon />}
          </NavAnimationWrapper>
        </Box>
      </AboutUsSection>
    </AboutUsBackground>
  );
};

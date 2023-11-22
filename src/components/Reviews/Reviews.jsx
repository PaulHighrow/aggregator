import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import {
  PageNavigation,
  PageNavigationArrow,
  PageNavigationItem,
  PageNavigationLink,
} from 'components/HowItWorks/HowItWorks.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import { useInView } from 'react-intersection-observer';
import ReactPlayer from 'react-player/lazy';
import {
  BottomPageNavigationText,
  LeadBtnWrapper,
  LoopyLineIcon,
  NavAnimationWrapper,
  NavigationDesc,
  NavigationWrapper,
  ReviewsBackground,
  ReviewsSection,
  ReviewsSubTitle,
  ReviewsTitle,
  VideoBox,
  VideoLimiter,
} from './Reviews.styled';
import { ReviewsMarquee } from './ReviewsMarquee/ReviewsMarquee';

export const Reviews = ({ toggleModal }) => {
  const navListItems = [
    { to: 'howitworks', service: 'Мотивація' },
    { to: 'platform', service: 'Навчальна платформа' },
    { to: 'reviews', service: 'Відгуки про курс' },
    { to: 'aboutus', service: 'Про нас' },
  ];
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
    <ReviewsBackground>
      <ReviewsSection id="reviews">
        <Box>
          <ReviewsTitle>
            <ReviewsSubTitle>ВІДГУКИ</ReviewsSubTitle> ПРО КУРС
          </ReviewsTitle>
          <VideoLimiter>
            <VideoBox>
              <ReactPlayer
                loop={true}
                playing={true}
                muted={true}
                controls={true}
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                width="100%"
                height="100%"
                url="https://youtu.be/qj-w9wzo76Q?si=EBLs8ap7W_RqBsXe"
              />
            </VideoBox>
          </VideoLimiter>
          <ReviewsMarquee toggleModal={toggleModal} />
          <LeadBtnWrapper>
            <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
          </LeadBtnWrapper>
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
      </ReviewsSection>
    </ReviewsBackground>
  );
};

import { Box } from 'components/Box/Box.styled';
import {
  HowItWorksSection,
  PageNavigation,
  PageNavigationArrow,
  PageNavigationItem,
  PageNavigationLink,
  PageNavigationText,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
  VideoBox,
  VideoLimiter,
} from './HowItWorks.styled';
import ReactPlayer from 'react-player';
import useSize from '@react-hook/size';

export const HowItWorks = () => {
  const listItems = [
    { to: 'howitworks', service: 'Мотивація' },
    { to: 'platform', service: 'Навчальна платформа' },
    { to: 'reviews', service: 'Відгуки про курс' },
    { to: 'aboutus', service: 'Про нас' },
  ];
  // eslint-disable-next-line
  const [width, _] = useSize(document.body);

  const props =
    width < 768
      ? { spy: true, smooth: true, offset: -73 }
      : { spy: true, smooth: true };

  return (
    <HowItWorksSection id="howitworks">
      <Box>
        <SectionWrapper>
          <SectionTitle>
            HOW IT <SectionSubTitle>WORKS?</SectionSubTitle>
          </SectionTitle>
          <PageNavigation>
            {listItems.map((item, i) => (
              <PageNavigationItem key={i}>
                <PageNavigationLink to={item.to} {...props}>
                  {item.service}
                  <PageNavigationArrow />
                  <PageNavigationText>перейти</PageNavigationText>
                </PageNavigationLink>
              </PageNavigationItem>
            ))}
          </PageNavigation>
        </SectionWrapper>
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
              url="https://youtu.be/ncDw4CGMn2o?si=zZNueT7aaqic_0B6"
            />
          </VideoBox>
        </VideoLimiter>
      </Box>
    </HowItWorksSection>
  );
};

import useSize from '@react-hook/size';
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
  SectionVideo,
  SectionWrapper,
  VideoBox,
  VideoLimiter,
} from './HowItWorks.styled';

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
            <SectionVideo autoPlay loop playsInline muted={true}>
              <source
                src="https://ap.education/static/video/trailers/HowItWorks.webm"
                type="video/webm"
              />
              <source
                src="https://ap.education/static/video/trailers/HowItWorks.mp4"
                type="video/mp4"
              />
            </SectionVideo>
          </VideoBox>
        </VideoLimiter>
      </Box>
    </HowItWorksSection>
  );
};

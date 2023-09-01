import { Box } from 'components/Box/Box.styled';
import {
  HowItWorksSection,
  PageNavigation,
  PageNavigationItem,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
  VideoBox,
  VideoLimiter
} from './HowItWorks.styled';

import ReactPlayer from 'react-player/lazy';

export const HowItWorks = () => {
  return (
    <HowItWorksSection id="howitworks">
      <Box>
        <SectionWrapper>
          <SectionTitle>
            HOW IT <SectionSubTitle>WORKS?</SectionSubTitle>
          </SectionTitle>
          <PageNavigation>
            <PageNavigationItem>Навчальний центр</PageNavigationItem>
            <PageNavigationItem>Перекладацьке бюро</PageNavigationItem>
            <PageNavigationItem>Вступ до ВНЗ</PageNavigationItem>
            <PageNavigationItem>Екзаменаційний центр</PageNavigationItem>
          </PageNavigation>
        </SectionWrapper>
        <VideoLimiter>
          <VideoBox>
            <ReactPlayer
              playing
              loop={true}
              controls={true}
              style={{
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              width="100%"
              height="100%"
              url="https://youtu.be/cJH4FUP99rA?si=clJ5upwIiebB7Fzt"
            />
          </VideoBox>
        </VideoLimiter>
      </Box>
    </HowItWorksSection>
  );
};

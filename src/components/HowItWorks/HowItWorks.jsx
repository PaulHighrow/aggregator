import { Box } from 'components/Box/Box.styled';
import {
  HowItWorksSection,
  PageNavigation,
  PageNavigationItem,
  PageNavigationLink,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
  VideoBox,
  VideoLimiter,
} from './HowItWorks.styled';
import ReactPlayer from 'react-player/lazy';

export const HowItWorks = () => {
  const listItems = [
    { to: 'edcenter', service: 'Навчальний центр' },
    { to: 'translations', service: 'Перекладацьке бюро' },
    { to: 'admissions', service: 'Вступ до ВНЗ' },
    { to: 'examcenter', service: 'Екзаменаційний центр' },
  ];
  const props = { spy: true, smooth: true };

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
                </PageNavigationLink>
              </PageNavigationItem>
            ))}
          </PageNavigation>
        </SectionWrapper>
        <VideoLimiter>
          <VideoBox>
            <ReactPlayer
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

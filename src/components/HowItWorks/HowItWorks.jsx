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
import ReactPlayer from 'react-player/lazy';
import useSize from '@react-hook/size';

export const HowItWorks = () => {
  const listItems = [
    { to: 'edcenter', service: 'Навчальний центр' },
    { to: 'admissions', service: 'Вступ до ВНЗ' },
    { to: 'translations', service: 'Перекладацьке бюро' },
    { to: 'examcenter', service: 'Екзаменаційний центр' },
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
              style={{
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              width="100%"
              height="100%"
              url="https://assets-global.website-files.com/625593a881b8ebd169835ca5/628cd51661a07cf1eb23a7db_Family%20Vacation%20-%20Screen-transcode.mp4"
            />
          </VideoBox>
        </VideoLimiter>
      </Box>
    </HowItWorksSection>
  );
};

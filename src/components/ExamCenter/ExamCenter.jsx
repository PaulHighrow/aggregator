import { Box } from 'components/Box/Box.styled';
import {
  PageNavigation,
  PageNavigationItem,
} from 'components/HowItWorks/HowItWorks.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import ReactPlayer from 'react-player';
import {
  ExamCenterNavigation,
  ExamCenterSection,
  ExamCenterSubTitle,
  ExamCenterTitle,
  ExamCenterWrapper,
  NavigationDesc,
  NavigationItem,
  NavigationLink,
  NavigationWrapper,
  VideoBox,
  VideoLimiter,
} from './ExamCenter.styled';

export const ExamCenter = ({ toggleModal }) => {
  const length = {
    short: 'img/svg/underline.svg',
    long: 'img/svg/underline-long.svg',
  };

  return (
    <ExamCenterSection id="examcenter">
      <Box>
        <ExamCenterTitle>
          ЕКЗАМЕНАЦІЙНИЙ <ExamCenterSubTitle>ЦЕНТР</ExamCenterSubTitle>
        </ExamCenterTitle>
        <ExamCenterWrapper>
          <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
          <ExamCenterNavigation>
            <NavigationItem>
              <NavigationLink>TOEFL</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>IELTS</NavigationLink>
            </NavigationItem>
            <NavigationItem length={length.long}>
              <NavigationLink>CAMBRIDGE ENGLISH</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink>ISOL</NavigationLink>
            </NavigationItem>
          </ExamCenterNavigation>
        </ExamCenterWrapper>
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
        <NavigationWrapper>
          <NavigationDesc>... всі наші послуги</NavigationDesc>
          <PageNavigation>
            <PageNavigationItem>Навчальний центр</PageNavigationItem>
            <PageNavigationItem>Перекладацьке бюро</PageNavigationItem>
            <PageNavigationItem>Вступ до ВНЗ</PageNavigationItem>
            <PageNavigationItem>Екзаменаційний центр</PageNavigationItem>
          </PageNavigation>
        </NavigationWrapper>
      </Box>
    </ExamCenterSection>
  );
};

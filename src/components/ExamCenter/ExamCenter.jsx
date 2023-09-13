import { Box } from 'components/Box/Box.styled';
import {
  PageNavigation,
  PageNavigationItem,
} from 'components/HowItWorks/HowItWorks.styled';
import { LeadBtn } from 'components/Menu/Menu.styled';
import ReactPlayer from 'react-player';
import {
  ExamCenterBackground,
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
  const listItems = ['TOEFL', 'IELTS', 'ISOL', 'CAMBRIDGE ENGLISH'];
  const navListItems = [
    'Навчальний центр',
    'Перекладацьке бюро',
    'Вступ до ВНЗ',
    'Екзаменаційний центр',
  ];

  return (
    <ExamCenterBackground>
      <ExamCenterSection id="examcenter">
        <Box>
          <ExamCenterTitle>
            ЕКЗАМЕНАЦІЙНИЙ <ExamCenterSubTitle>ЦЕНТР</ExamCenterSubTitle>
          </ExamCenterTitle>
          <ExamCenterWrapper>
            <LeadBtn onClick={toggleModal}> ЗАЛИШИТИ ЗАЯВКУ </LeadBtn>
            <ExamCenterNavigation>
              {listItems.map((item, i) => (
                <NavigationItem key={i}>
                  <NavigationLink>{item}</NavigationLink>
                </NavigationItem>
              ))}
            </ExamCenterNavigation>
          </ExamCenterWrapper>
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
          <NavigationWrapper>
            <NavigationDesc>... всі наші послуги</NavigationDesc>
            <PageNavigation>
              {navListItems.map((item, i) => (
                <PageNavigationItem key={i}>{item}</PageNavigationItem>
              ))}
            </PageNavigation>
          </NavigationWrapper>
        </Box>
      </ExamCenterSection>
    </ExamCenterBackground>
  );
};

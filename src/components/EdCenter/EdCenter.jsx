import { Box } from 'components/Box/Box.styled';
import ReactPlayer from 'react-player';
import {
  EdCenterBackground,
  EdCenterNavigation,
  EdCenterSection,
  EdCenterSubTitle,
  EdCenterTitle,
  EdCenterWrapper,
  NavigationItem,
  VideoBox,
  VideoLimiter,
} from './EdCenter.styled';

export const EdCenter = () => {
  const listItems = ['Англійська мова', 'Польська мова', 'Німецька мова'];

  return (
    <EdCenterBackground>
      <EdCenterSection id="edcenter">
        <Box>
          <EdCenterTitle>
            НАВЧАЛЬНИЙ <EdCenterSubTitle>ЦЕНТР</EdCenterSubTitle>
          </EdCenterTitle>
          <EdCenterWrapper>
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
            <EdCenterNavigation>
              {listItems.map((item, i) => (
                <NavigationItem key={i}>{item}</NavigationItem>
              ))}
            </EdCenterNavigation>
          </EdCenterWrapper>
        </Box>
      </EdCenterSection>
    </EdCenterBackground>
  );
};

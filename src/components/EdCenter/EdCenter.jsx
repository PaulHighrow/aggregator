import { EdCenterBackground } from 'components/BackgroundWrapper/BackgroundWrapper';
import { Box } from 'components/Box/Box.styled';
import ReactPlayer from 'react-player';
import {
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
  return (
    <EdCenterSection id="edcenter">
      <EdCenterBackground>
        <Box>
          <EdCenterTitle>
            НАВЧАЛЬНИЙ <EdCenterSubTitle>ЦЕНТР</EdCenterSubTitle>
          </EdCenterTitle>
          <EdCenterWrapper>
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
            <EdCenterNavigation>
              <NavigationItem>Англійська мова</NavigationItem>
              <NavigationItem>Польська мова</NavigationItem>
              <NavigationItem>Німецька мова</NavigationItem>
            </EdCenterNavigation>
          </EdCenterWrapper>
        </Box>
      </EdCenterBackground>
    </EdCenterSection>
  );
};

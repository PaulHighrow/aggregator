import { Box } from 'components/Box/Box.styled';
import ReactPlayer from 'react-player/lazy';
import {
  AboutUsBackground,
  AboutUsSection,
  AboutUsSubTitle,
  AboutUsText,
  AboutUsTitle,
  AboutUsWrapper,
  VideoBox,
  VideoLimiter,
} from './InvertedAboutUs.styled';

export const InvertedAboutUs = () => {
  return (
    <AboutUsBackground>
      <AboutUsSection id="aboutus">
        <Box>
          <AboutUsTitle>
            ПРО <AboutUsSubTitle>НАС</AboutUsSubTitle>
          </AboutUsTitle>
          <AboutUsWrapper>
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
            <AboutUsText>
              «AP Education Centre», є провідним центром навчання іноземних мов
              та підготовки до міжнародних іспитів. Ми є сертифікованим
              партнером Cambridge English та Language Cert, що дозволяє нашим
              клієнтам готуватися до іспитів та складати їх відразу у нашому
              центрі.`
            </AboutUsText>
          </AboutUsWrapper>
        </Box>
      </AboutUsSection>
    </AboutUsBackground>
  );
};

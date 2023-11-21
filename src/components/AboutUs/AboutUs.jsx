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
} from './AboutUs.styled';

export const AboutUs = () => {
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
                  url="https://youtu.be/YP1TFRbTfyo?si=BxZUY2XrRnGdz33Y"
                />
              </VideoBox>
            </VideoLimiter>
            <AboutUsText>
              «AP Education Center», є провідним центром навчання іноземних мов
              та підготовки до міжнародних іспитів. Ми є сертифікованим
              партнером Cambridge English та Language Cert, що дозволяє нашим
              клієнтам готуватися до іспитів та складати їх відразу у нашому
              центрі.
            </AboutUsText>
          </AboutUsWrapper>
        </Box>
      </AboutUsSection>
    </AboutUsBackground>
  );
};

import { Box } from 'components/Box/Box.styled';
import ReactPlayer from 'react-player';
import {
  HowItWorksSection,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
  VideoBox,
  VideoLimiter
} from './Stream.styled';

export const Stream = () => {
  return (
    <HowItWorksSection id="howitworks">
      <Box>
        <SectionWrapper>
          <SectionTitle>
            HOW IT <SectionSubTitle>WORKS?</SectionSubTitle>
          </SectionTitle>
        </SectionWrapper>
        <VideoLimiter>
          <VideoBox>
            <ReactPlayer
              loop={true}
              playing={true}
              muted={true}
              controls={true}
              style={{
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              width="100%"
              height="100%"
              url="https://www.youtube.com/embed/ItvOvNAnk8o"
            />
          </VideoBox>
        </VideoLimiter>
      </Box>
      <iframe
      title='chat'
        width="350px"
        height="500px"
        src="https://www.youtube.com/live_chat?v=ItvOvNAnk8o&amp;embed_domain=paulhighrow.github.io"
      ></iframe>
    </HowItWorksSection>
  );
};

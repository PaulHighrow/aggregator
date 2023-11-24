import { Box } from 'components/Box/Box.styled';
import ReactPlayer from 'react-player';
import {
  ChatBox,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
  StreamBox,
  StreamSection,
  VideoBox,
  VideoLimiter,
} from './Stream.styled';

export const Stream = () => {
  return (
    <StreamSection>
      <Box>
        <SectionWrapper>
          <SectionTitle>
            УРОК <SectionSubTitle>ONLINE</SectionSubTitle>
          </SectionTitle>
        </SectionWrapper>
        <StreamBox>
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
          <ChatBox>
            <iframe
              title="chat"
              width="350px"
              height="720px"
              src="https://www.youtube.com/live_chat?v=ItvOvNAnk8o&embed_domain=paulhighrow.github.io"
            ></iframe>
          </ChatBox>
        </StreamBox>
      </Box>
    </StreamSection>
  );
};

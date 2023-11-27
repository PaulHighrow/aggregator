import { Box } from 'components/Box/Box.styled';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Kahoots } from './Kahoots/Kahoots';
import {
  ChatBox,
  ChatBtn,
  KahootBtn,
  SectionSubTitle,
  SectionTitle,
  SectionWrapper,
  StreamBox,
  StreamSection,
  VideoBox,
  VideoLimiter,
} from './Stream.styled';
import useSize from '@react-hook/size';

export const Stream = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const toggleKahoot = () => setIsKahootOpen(isKahootOpen => !isKahootOpen);
  const toggleChat = () => setIsChatOpen(isChatOpen => !isChatOpen);
  const videoEl = useRef();
  // eslint-disable-next-line
  const [_, height] = useSize(videoEl);

  return (
    <StreamSection>
      <Box>
        <SectionWrapper>
          <SectionTitle>
            УРОК <SectionSubTitle>ONLINE</SectionSubTitle>
          </SectionTitle>
        </SectionWrapper>
        <StreamBox>
          <VideoLimiter ref={videoEl}>
            <VideoBox>
              <ReactPlayer
                loop={true}
                playing={true}
                muted={true}
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
          {!isChatOpen && <ChatBtn onClick={toggleChat}>Чат</ChatBtn>}
          {isChatOpen && <ChatBtn onClick={toggleChat}> Не Чат</ChatBtn>}
          {isChatOpen && (
            <ChatBox>
              <iframe
                title="chat"
                width="350px"
                height={height}
                src="https://www.youtube.com/live_chat?v=ItvOvNAnk8o&embed_domain=paulhighrow.github.io"
              ></iframe>
            </ChatBox>
          )}
        </StreamBox>
        {!isKahootOpen && <KahootBtn onClick={toggleKahoot}>Когут</KahootBtn>}
        {isKahootOpen && (
          <KahootBtn onClick={toggleKahoot}> Не Когут</KahootBtn>
        )}
        {isKahootOpen && <Kahoots />}
      </Box>
    </StreamSection>
  );
};

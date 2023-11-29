import useSize from '@react-hook/size';
import { Box } from 'components/Box/Box.styled';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Kahoots } from './Kahoots/Kahoots';
import {
  ChatBox,
  ChatBtn,
  KahootBtn,
  StreamBox,
  StreamSection,
  VideoBox
} from './Stream.styled';

export const Stream = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const toggleKahoot = () => setIsKahootOpen(isKahootOpen => !isKahootOpen);
  const toggleChat = () => setIsChatOpen(isChatOpen => !isChatOpen);
  const sectionEl = useRef();
  const videoEl = useRef();
  const titleEl = useRef();
  // eslint-disable-next-line
  const [_, sectionHeight] = useSize(sectionEl);
  console.log(sectionHeight);
  // eslint-disable-next-line
  const [__, videoHeight] = useSize(videoEl);
  // eslint-disable-next-line
  const [___, titleHeight] = useSize(titleEl);

const viewPortHeight = window.visualViewport.height
console.log(viewPortHeight);

  return (
    <StreamSection ref={sectionEl} >
      <Box>
        <StreamBox>
            <VideoBox>
              <ReactPlayer
                playing={true}
                muted={true}
                controls={true}
                config={{
                  youtube: {
                    playerVars: { rel: 0 },
                  },
                }}
                style={{
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                width="100%"
                height="100%"
                url="https://www.youtube-nocookie.com/embed/hjTO6DlqrB0?"
              />
            </VideoBox>
          {!isChatOpen && <ChatBtn onClick={toggleChat}>Чат</ChatBtn>}
          {isChatOpen && <ChatBtn onClick={toggleChat}> Не Чат</ChatBtn>}
          {isChatOpen && (
            <ChatBox>
              <iframe
                title="chat"
                width="350px"
                height={videoHeight}
                src="https://www.youtube.com/live_chat?v=ItvOvNAnk8o&embed_domain=paulhighrow.github.io"
              ></iframe>
            </ChatBox>
          )}
          {!isKahootOpen && <KahootBtn onClick={toggleKahoot}>Когут</KahootBtn>}
          {isKahootOpen && (
            <KahootBtn onClick={toggleKahoot}> Не Когут</KahootBtn>
          )}
          {isKahootOpen && <Kahoots/>}
        </StreamBox>
      </Box>
    </StreamSection>
  );
};

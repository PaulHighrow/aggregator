import useSize from '@react-hook/size';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Kahoots } from './Kahoots/Kahoots';
import {
  ChatBox,
  ChatBtn,
  KahootBtn,
  StreamSection,
  VideoBox,
} from './Stream.styled';

export const Stream = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const toggleKahoot = () => setIsKahootOpen(isKahootOpen => !isKahootOpen);
  const toggleChat = () => setIsChatOpen(isChatOpen => !isChatOpen);
  const sectionEl = useRef();
  const videoEl = useRef();
  // eslint-disable-next-line
  const [_, sectionHeight] = useSize(sectionEl);
  // eslint-disable-next-line
  const [__, videoHeight] = useSize(videoEl);

  const viewPortHeight = window.visualViewport.height;
  console.log(viewPortHeight);

  return (
    <StreamSection ref={sectionEl}>
      <VideoBox ref={videoEl}>
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
          height="100vh"
          url="https://www.youtube-nocookie.com/embed/jfKfPfyJRdk"
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
      {isKahootOpen && <KahootBtn onClick={toggleKahoot}> Не Когут</KahootBtn>}
      {isKahootOpen && <Kahoots />}
    </StreamSection>
  );
};

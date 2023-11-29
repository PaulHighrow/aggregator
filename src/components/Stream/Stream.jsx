import useSize from '@react-hook/size';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Kahoots } from './Kahoots/Kahoots';
import {
  ChatBox,
  ChatBtn,
  ChatCloseBtn,
  ChatLogo,
  CloseLogo,
  KahootBtn,
  KahootCloseBtn,
  KahootLogo,
  StreamSection,
  VideoBox,
} from './Stream.styled';

export const Stream = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const toggleKahoot = () => setIsKahootOpen(isKahootOpen => !isKahootOpen);
  const toggleChat = () => setIsChatOpen(isChatOpen => !isChatOpen);
  const sectionEl = useRef();
  // eslint-disable-next-line
  const [sectionWidth, sectionHeight] = useSize(sectionEl);

  return (
    <StreamSection ref={sectionEl}>
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
          height="100vh"
          url="https://www.youtube-nocookie.com/embed/rUxyKA_-grg"
        />
      </VideoBox>
      {!isChatOpen && (
        <ChatBtn onClick={toggleChat}>
          <ChatLogo />
        </ChatBtn>
      )}
      {isChatOpen && (
        <ChatCloseBtn onClick={toggleChat}>
          <CloseLogo />
        </ChatCloseBtn>
      )}
      {isChatOpen && (
        <ChatBox>
          <iframe
            title="chat"
            width="350px"
            height={sectionHeight}
            src="https://www.youtube.com/live_chat?v=ItvOvNAnk8o&embed_domain=paulhighrow.github.io"
          ></iframe>
        </ChatBox>
      )}
      {!isKahootOpen && (
        <KahootBtn onClick={toggleKahoot}>
          <KahootLogo />
        </KahootBtn>
      )}
      {isKahootOpen && (
        <KahootCloseBtn onClick={toggleKahoot}>
          <CloseLogo />
        </KahootCloseBtn>
      )}
      {isKahootOpen && (
        <Kahoots sectionWidth={sectionWidth} sectionHeight={sectionHeight} />
      )}
    </StreamSection>
  );
};

import useSize from '@react-hook/size';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Kahoots } from './Kahoots/Kahoots';
import {
  ButtonBox,
  ChatBox,
  ChatBtn,
  ChatCloseBtn,
  ChatLogo,
  CloseLogo,
  IFrameLoaderWrapper,
  KahootBtn,
  KahootLogo,
  StreamSection,
  VideoBox,
} from './Stream.styled';
import { ColorRing } from 'react-loader-spinner';

export const Stream = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const toggleKahoot = () => setIsKahootOpen(isKahootOpen => !isKahootOpen);
  const toggleChat = () => setIsChatOpen(isChatOpen => !isChatOpen);
  const sectionEl = useRef();
  // eslint-disable-next-line
  const [sectionWidth, sectionHeight] = useSize(sectionEl);
  const [isLoading, setIsLoading] = useState(true);

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

      <ButtonBox>
        {!isKahootOpen && (
          <KahootBtn onClick={toggleKahoot}>
            <KahootLogo />
          </KahootBtn>
        )}
        {!isChatOpen && (
          <ChatBtn onClick={toggleChat}>
            <ChatLogo />
          </ChatBtn>
        )}
      </ButtonBox>

      {isChatOpen && (
        <ChatBox>
          <iframe
            title="chat"
            width="350px"
            onLoad={() => {
              setIsLoading(isLoading => false);
            }}
            height={sectionHeight}
            src="https://www.youtube.com/live_chat?v=ItvOvNAnk8o&embed_domain=paulhighrow.github.io"
          ></iframe>
          {isChatOpen && (
            <ChatCloseBtn onClick={toggleChat}>
              <CloseLogo />
            </ChatCloseBtn>
          )}
          {isLoading && (
            <IFrameLoaderWrapper>
              <ColorRing
                visible={true}
                height="120"
                width="120"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#0f645b', '#0B4943', '#073D37', '#0B4943', '#0f645b']}
              />
            </IFrameLoaderWrapper>
          )}
        </ChatBox>
      )}

      {isKahootOpen && (
        <Kahoots
          sectionWidth={sectionWidth}
          sectionHeight={sectionHeight}
          toggleKahoot={toggleKahoot}
        />
      )}
    </StreamSection>
  );
};

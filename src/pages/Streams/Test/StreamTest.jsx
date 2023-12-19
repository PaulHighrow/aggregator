import useSize from '@react-hook/size';
import { Kahoots } from 'components/Stream/Kahoots/Kahoots';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useOutletContext } from 'react-router-dom';
import {
  ButtonBox,
  ChatBox,
  ChatBtn,
  ChatLogo,
  KahootBtn,
  KahootLogo,
  StreamSection,
  SupportBtn,
  SupportLogo,
  VideoBox,
} from '../../../components/Stream/Stream.styled';
import { Support } from 'components/Stream/Support/Support';

export const StreamTest = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  // eslint-disable-next-line
  const [links, setLinks] = useOutletContext();
  const sectionEl = useRef();
  const [sectionWidth, sectionHeight] = useSize(sectionEl);

  const toggleKahoot = e => {
    setIsKahootOpen(isKahootOpen => !isKahootOpen);
    isChatOpen
      ? setIsOpenedLast(isOpenedLast => 'kahoot')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleChat = () => {
    setIsChatOpen(isChatOpen => !isChatOpen);
    isKahootOpen
      ? setIsOpenedLast(isOpenedLast => 'chat')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleSupport = () => {
    setIsSupportOpen(isSupportOpen => !isSupportOpen);
    isKahootOpen
      ? setIsOpenedLast(isOpenedLast => 'support')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const embedDomain = window.location.host.includes('localhost')
    ? 'localhost'
    : window.location.host;

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
          url={links.test}
        />
      </VideoBox>

      <ButtonBox>
        <KahootBtn onClick={toggleKahoot}>
          <KahootLogo />
        </KahootBtn>
        {links.test && (
          <ChatBtn onClick={toggleChat}>
            <ChatLogo />
          </ChatBtn>
        )}
        <SupportBtn onClick={toggleSupport}>
          <SupportLogo />
        </SupportBtn>
      </ButtonBox>

      {links.test && (
        <ChatBox
          className={isChatOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'chat' ? { zIndex: '1' } : { zIndex: '0' }}
        >
          <iframe
            title="chat"
            width="350px"
            src={`https://www.youtube.com/live_chat?v=${
              links.test.match(/([a-zA-Z0-9_-]{11})/)[0]
            }&embed_domain=${embedDomain}`}
          ></iframe>
        </ChatBox>
      )}
      <Support
        sectionWidth={sectionWidth}
        isSupportOpen={isSupportOpen}
        isOpenedLast={isOpenedLast}
      />

      <Kahoots
        sectionWidth={sectionWidth}
        sectionHeight={sectionHeight}
        isKahootOpen={isKahootOpen}
        isOpenedLast={isOpenedLast}
      />
    </StreamSection>
  );
};

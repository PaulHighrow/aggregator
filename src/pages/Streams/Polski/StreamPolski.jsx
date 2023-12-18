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
  VideoBox,
} from '../../../components/Stream/Stream.styled';

export const StreamPolski = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
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
          url={links.polski}
        />
      </VideoBox>

      <ButtonBox>
        <KahootBtn onClick={toggleKahoot}>
          <KahootLogo />
        </KahootBtn>

        {links.polski && (
          <ChatBtn onClick={toggleChat}>
            <ChatLogo />
          </ChatBtn>
        )}
      </ButtonBox>

      {links.polski && (
        <ChatBox
          className={isChatOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'chat' ? { zIndex: '1' } : { zIndex: '0' }}
        >
          <iframe
            title="chat"
            width="350px"
            src={`https://www.youtube.com/live_chat?v=${
              links.polski.match(/([a-zA-Z0-9_-]{11})/)[0]
            }&embed_domain=${embedDomain}`}
          ></iframe>
        </ChatBox>
      )}

      <Kahoots
        sectionWidth={sectionWidth}
        sectionHeight={sectionHeight}
        isKahootOpen={isKahootOpen}
        isOpenedLast={isOpenedLast}
      />
    </StreamSection>
  );
};

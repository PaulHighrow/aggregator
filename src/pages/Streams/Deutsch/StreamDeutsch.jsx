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
  MoldingNoClick,
  MoldingNoClickSecondary,
  StreamSection,
  SupportBtn,
  SupportLogo,
  SupportMarkerLeft,
  SupportMarkerRight,
  VideoBox,
} from '../../../components/Stream/Stream.styled';
import { Support } from 'components/Stream/Support/Support';

export const StreamDeutsch = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [animatedID, setAnimationID] = useState('');
  // eslint-disable-next-line
  const [links, setLinks] = useOutletContext();
  const sectionEl = useRef();
  const [sectionWidth, sectionHeight] = useSize(sectionEl);

  const toggleKahoot = e => {
    setIsKahootOpen(isKahootOpen => !isKahootOpen);
    isChatOpen || isSupportOpen
      ? setIsOpenedLast(isOpenedLast => 'kahoot')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleChat = () => {
    setIsChatOpen(isChatOpen => !isChatOpen);
    isKahootOpen || isSupportOpen
      ? setIsOpenedLast(isOpenedLast => 'chat')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleSupport = () => {
    setIsSupportOpen(isSupportOpen => !isSupportOpen);
    setAnimationID('');
    isKahootOpen || isChatOpen
      ? setIsOpenedLast(isOpenedLast => 'support')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const handleSupportClick = data_id => {
    setAnimationID(id => (id = data_id));
    if (!isAnimated) {
      setIsAnimated(isAnimated => !isAnimated);
    }
  };
  const embedDomain = window.location.host.includes('localhost')
    ? 'localhost'
    : window.location.host;

  return (
    <StreamSection ref={sectionEl}>
      <VideoBox>
        <MoldingNoClick />
        <MoldingNoClickSecondary />
        <SupportMarkerLeft
          className={
            (isAnimated && animatedID === 'sound') ||
            (isAnimated && animatedID === 'live')
              ? 'animated'
              : ''
          }
        />{' '}
        <SupportMarkerRight
          className={isAnimated && animatedID === 'quality' ? 'animated' : ''}
        />
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
          url={links.deutsch}
        />
      </VideoBox>

      <ButtonBox>
        <KahootBtn
          onClick={toggleKahoot}
          className={
            isAnimated && animatedID === 'kahoot_open' ? 'animated' : ''
          }
        >
          <KahootLogo />
        </KahootBtn>

        {links.deutsch && (
          <ChatBtn
            onClick={toggleChat}
            className={
              isAnimated && animatedID === 'chat_open' ? 'animated' : ''
            }
          >
            <ChatLogo />
          </ChatBtn>
        )}

        <SupportBtn onClick={toggleSupport}>
          <SupportLogo />
        </SupportBtn>
      </ButtonBox>

      <Support
        sectionWidth={sectionWidth}
        isSupportOpen={isSupportOpen}
        isOpenedLast={isOpenedLast}
        handleSupport={handleSupportClick}
        openKahoot={toggleKahoot}
        isKahootOpen={isKahootOpen}
      />

      {links.deutsch && (
        <ChatBox
          className={isChatOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'chat' ? { zIndex: '1' } : { zIndex: '0' }}
        >
          <iframe
            title="chat"
            width="350px"
            src={`https://www.youtube.com/live_chat?v=${
              links.deutsch.match(/([a-zA-Z0-9_-]{11})/)[0]
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

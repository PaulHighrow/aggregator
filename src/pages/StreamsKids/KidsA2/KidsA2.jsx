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
  StreamPlaceHolder,
  StreamPlaceHolderText,
  StreamSection,
  SupportArrow,
  SupportBtn,
  SupportLogo,
  SupportMarkerLeft,
  SupportMarkerRight,
  SupportPointer,
  VideoBox,
} from '../../../components/Stream/Stream.styled';
import { Support } from 'components/Stream/Support/Support';

export const KidsA2 = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [animatedID, setAnimationID] = useState('');
  const [links, isLoading] = useOutletContext();
  const chatEl = useRef();
  // eslint-disable-next-line
  const [chatWidth, chatHeight] = useSize(chatEl);
  const [width, height] = useSize(document.body);

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

  const videoBoxWidth =
    chatWidth === 0 && width > height ? width - 300 : width - chatWidth;

  return (
    <>
      {(links.a2kids === undefined || links.a2kids[0] < 10) && !isLoading ? (
        <StreamPlaceHolder>
          <StreamPlaceHolderText>
            Поки що трансляції тут немає! <br />
            Перевірте, чи правильно ви вказали адресу сторінки або спробуйте
            пізніше.
          </StreamPlaceHolderText>
        </StreamPlaceHolder>
      ) : (
        <>
          <StreamSection
            style={{
              width:
                isChatOpen && width > height ? `${videoBoxWidth}px` : '100%',
            }}
          >
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
              >
                <SupportArrow
                  className={
                    (isAnimated && animatedID === 'sound') ||
                    (isAnimated && animatedID === 'live')
                      ? 'animated'
                      : ''
                  }
                />
              </SupportMarkerLeft>
              <SupportMarkerRight
                className={
                  isAnimated && animatedID === 'quality' ? 'animated' : ''
                }
              >
                <SupportPointer
                  className={
                    isAnimated && animatedID === 'quality' ? 'animated' : ''
                  }
                />
              </SupportMarkerRight>
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
                url={links.a2kids}
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

              {links.a2kids && (
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
              sectionWidth={width}
              isSupportOpen={isSupportOpen}
              isOpenedLast={isOpenedLast}
              handleSupport={handleSupportClick}
              openKahoot={toggleKahoot}
              isKahootOpen={isKahootOpen}
            />

            {links.a2kids && height > width && (
              <ChatBox
                className={isChatOpen ? 'shown' : 'hidden'}
                style={
                  isOpenedLast === 'chat' ? { zIndex: '2' } : { zIndex: '1' }
                }
              >
                <iframe
                  title="chat"
                  width="350px"
                  src={`https://www.youtube.com/live_chat?v=${
                    links.a2kids.match(/([a-zA-Z0-9_-]{11})/)[0]
                  }&embed_domain=${embedDomain}`}
                ></iframe>
              </ChatBox>
            )}

            <Kahoots
              sectionWidth={width}
              sectionHeight={height}
              isKahootOpen={isKahootOpen}
              isOpenedLast={isOpenedLast}
            />
          </StreamSection>
          {links.a2kids && width > height && (
            <ChatBox
              className={isChatOpen ? 'shown' : 'hidden'}
              style={
                isOpenedLast === 'chat' ? { zIndex: '2' } : { zIndex: '1' }
              }
            >
              <iframe
                title="chat"
                width="350px"
                src={`https://www.youtube.com/live_chat?v=${
                  links.a2kids.match(/([a-zA-Z0-9_-]{11})/)[0]
                }&embed_domain=${embedDomain}`}
              ></iframe>
            </ChatBox>
          )}
        </>
      )}
    </>
  );
};

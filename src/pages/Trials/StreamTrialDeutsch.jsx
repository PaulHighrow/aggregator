import useSize from '@react-hook/size';
import axios from 'axios';
import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { LoaderWrapper } from 'components/SharedLayout/Loaders/Loader.styled';
import { Kahoots } from 'components/Stream/Kahoots/Kahoots';
import { useLayoutEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
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
} from '../../components/Stream/Stream.styled';
import { Support } from 'components/Stream/Support/Support';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const StreamTrialDeutsch = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [animatedID, setAnimationID] = useState('');
  const chatEl = useRef();
  // eslint-disable-next-line
  const [chatWidth, chatHeight] = useSize(chatEl);
  const [width, height] = useSize(document.body);
  const [isLoading, setIsLoading] = useState(false);
  const [links, setLinks] = useState({});

  const wakeupRequest = async () => {
    try {
      const wake = await axios.get('/');
      console.log(wake.data);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    wakeupRequest();

    const getLinksRequest = async () => {
      try {
        setIsLoading(isLoading => (isLoading = true));
        setLinks((await axios.get('/links')).data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(isLoading => (isLoading = false));
      }
    };
    getLinksRequest();
  }, []);

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
      {(links.trials_de === undefined || links.trials_de[0] < 10) &&
      !isLoading ? (
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
            <StreamsBackgroundWrapper>
              {isLoading && (
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              )}

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
                  url={links.trials_de}
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

                {links.trials_de && (
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
              {links.trials_de &&
              !links.trials_de.includes('youtube') &&
              !links.trials_de.includes('youtu.be')
                ? window.location.replace(links.trials_de)
                : null}
              {links.trials_de && height > width && (
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
                      links.trials_de.match(/([a-zA-Z0-9_-]{11})/)[0]
                    }&embed_domain=${embedDomain}`}
                  ></iframe>
                </ChatBox>
              )}

              <Kahoots
                sectionWidth={width}
                sectionHeight={height}
                isKahootOpen={isKahootOpen}
                isChatOpen={isChatOpen}
                isOpenedLast={isOpenedLast}
              />

              <Support
                sectionWidth={width}
                isSupportOpen={isSupportOpen}
                isOpenedLast={isOpenedLast}
                handleSupport={handleSupportClick}
                openKahoot={toggleKahoot}
                isKahootOpen={isKahootOpen}
              />
            </StreamsBackgroundWrapper>
          </StreamSection>
          {links.trials_de && width > height && (
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
                  links.trials_de.match(/([a-zA-Z0-9_-]{11})/)[0]
                }&embed_domain=${embedDomain}`}
              ></iframe>
            </ChatBox>
          )}
        </>
      )}
    </>
  );
};

export default StreamTrialDeutsch;
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
  StreamSection,
  VideoBox,
} from '../../components/Stream/Stream.styled';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const StreamTrialEnglish = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  // eslint-disable-next-line
  const sectionEl = useRef();
  const [sectionWidth, sectionHeight] = useSize(sectionEl);
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
      <StreamsBackgroundWrapper>
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
      
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
          url={links.trials}
        />
      </VideoBox>

      <ButtonBox>
        <KahootBtn onClick={toggleKahoot}>
          <KahootLogo />
        </KahootBtn>

        {links.trials && (
          <ChatBtn onClick={toggleChat}>
            <ChatLogo />
          </ChatBtn>
        )}
      </ButtonBox>

      {links.trials && (
        <ChatBox
          className={isChatOpen ? 'shown' : 'hidden'}
          style={isOpenedLast === 'chat' ? { zIndex: '1' } : { zIndex: '0' }}
        >
          <iframe
            title="chat"
            width="350px"
            height={sectionHeight}
            src={`https://www.youtube.com/live_chat?v=${
              links.trials.match(/([a-zA-Z0-9_-]{11})/)[0]
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
      </StreamsBackgroundWrapper>
    </StreamSection>
  );
};

export default StreamTrialEnglish;
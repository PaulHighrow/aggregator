import useSize from '@react-hook/size';
import axios from 'axios';
import { StreamsBackgroundWrapper } from 'components/BackgroundWrapper/BackgroundWrappers';
import { Loader } from 'components/SharedLayout/Loaders/Loader';
import { LoaderWrapper } from 'components/SharedLayout/Loaders/Loader.styled';
import { Kahoots } from 'components/Stream/Kahoots/Kahoots';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
import {
  ChatLoginButton,
  ChatLoginForm,
  ChatLoginHeader,
  ChatLoginInput,
  ChatLoginLabel,
} from 'utils/Chat/Chat.styled';
import { Chat } from 'utils/Chat/Chat';
import { io } from 'socket.io-client';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://aggregator-server.onrender.com';

const StreamTrialKids = () => {
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
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line
  const [userID, setUserID] = useState('');
  const [isLoggedToChat, setIsLoggedToChat] = useState(false);
  const [messages, setMessages] = useState([]);

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

  const videoBoxWidth =
    chatWidth === 0 && width > height ? width - 300 : width - chatWidth;

  const checkLogin = e => {
    const name = localStorage.getItem('userName');
    const id = localStorage.getItem('userID');

    if (id && name) {
      setIsLoggedToChat(isLogged => (isLogged = true));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const idGen = nanoid(8);
    setUserID(id => (id = idGen));
    localStorage.setItem('userName', userName);
    localStorage.setItem('userID', idGen);
    setIsLoggedToChat(isLogged => !isLogged);
  };

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('https://ap-chat.onrender.com/');
    checkLogin();

    socketRef.current.on('connected', (connected, handshake) => {
      console.log(connected);
      console.log(handshake);
    });

    const getMessages = async () => {
      try {
        const dbMessages = await axios.get(
          'https://ap-chat.onrender.com/messages'
        );
        const todayMessages = dbMessages.data.filter(
          message =>
            new Date(message.createdAt).getDate() === new Date().getDate()
        );
        setMessages(messages => (messages = todayMessages));
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();

    socketRef.current.on('message', async data => {
      const updateMessages = async () => {
        try {
          await axios.post('https://ap-chat.onrender.com/messages', data);
          setMessages(messages => (messages = [...messages, data]));
        } catch (error) {
          console.log(error);
        }
      };
      await updateMessages();
    });

    socketRef.current.on('message:get', async data => {
      setMessages(messages => (messages = [...messages, data]));
    });

    return () => {
      socketRef.current.off('connected');
      socketRef.current.off('message');
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <>
      {(links.trials_kids === undefined || links.trials_kids[0] < 10) &&
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
                  url={links.trials_kids}
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

                <ChatBtn
                  onClick={toggleChat}
                  className={
                    isAnimated && animatedID === 'chat_open' ? 'animated' : ''
                  }
                >
                  <ChatLogo />
                </ChatBtn>

                <SupportBtn onClick={toggleSupport}>
                  <SupportLogo />
                </SupportBtn>
              </ButtonBox>
              {links.trials_kids &&
              !links.trials_kids.includes('youtube') &&
              !links.trials_kids.includes('youtu.be')
                ? window.location.replace(links.trials_kids)
                : null}
              {height > width && (
                <ChatBox
                  ref={chatEl}
                  className={isChatOpen ? 'shown' : 'hidden'}
                  style={
                    isOpenedLast === 'chat' ? { zIndex: '2' } : { zIndex: '1' }
                  }
                >
                  {!isLoggedToChat ? (
                    <ChatLoginForm onSubmit={handleSubmit}>
                      <ChatLoginHeader>AP Open Chat</ChatLoginHeader>
                      <ChatLoginLabel htmlFor="username">
                        Введіть ваше ім'я повністю
                      </ChatLoginLabel>
                      <ChatLoginInput
                        type="text"
                        minLength={3}
                        name="username"
                        id="username"
                        value={userName}
                        onChange={e => setUserName(e.target.value.trim())}
                      />
                      <ChatLoginButton>Готово!</ChatLoginButton>
                    </ChatLoginForm>
                  ) : (
                    <Chat
                      socket={socketRef.current}
                      messages={messages}
                      isChatOpen={isChatOpen}
                    />
                  )}
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
          {width >= height && (
            <ChatBox
              ref={chatEl}
              className={isChatOpen ? 'shown' : 'hidden'}
              style={
                isOpenedLast === 'chat' ? { zIndex: '2' } : { zIndex: '1' }
              }
            >
              {!isLoggedToChat ? (
                <ChatLoginForm onSubmit={handleSubmit}>
                  <ChatLoginHeader>AP Open Chat</ChatLoginHeader>
                  <ChatLoginLabel htmlFor="username">
                    Введіть ваше ім'я повністю
                  </ChatLoginLabel>
                  <ChatLoginInput
                    type="text"
                    minLength={3}
                    name="username"
                    id="username"
                    value={userName}
                    onChange={e => setUserName(e.target.value.trim())}
                  />
                  <ChatLoginButton>Готово!</ChatLoginButton>
                </ChatLoginForm>
              ) : (
                <Chat
                  socket={socketRef.current}
                  messages={messages}
                  isChatOpen={isChatOpen}
                />
              )}
            </ChatBox>
          )}
        </>
      )}
    </>
  );
};

export default StreamTrialKids;

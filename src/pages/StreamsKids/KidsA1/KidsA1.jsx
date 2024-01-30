import useSize from '@react-hook/size';
import axios from 'axios';
import { Kahoots } from 'components/Stream/Kahoots/Kahoots';
import { Support } from 'components/Stream/Support/Support';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useOutletContext } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Chat } from 'utils/Chat/Chat';
import {
  ChatLoginButton,
  ChatLoginForm,
  ChatLoginHeader,
  ChatLoginInput,
  ChatLoginLabel,
} from 'utils/Chat/Chat.styled';
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

export const KidsA1 = () => {
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
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line
  const [userID, setUserID] = useState('');
  const [isLoggedToChat, setIsLoggedToChat] = useState(false);
  const [messages, setMessages] = useState([]);

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

    if (!id && name) {
      const idGen = nanoid(8);
      setUserID(id => (id = idGen));
      localStorage.setItem('userID', idGen);
    }

    if (id && name) {
      setIsLoggedToChat(isLogged => (isLogged = true));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const idGen = nanoid(8);
    setUserID(id => (id = idGen));
    localStorage.setItem('userName', userName.trim());
    localStorage.setItem('userID', idGen);
    try {
      const ip = (await axios.get('https://jsonip.com/')).data.ip;
      const newUser = {
        username: userName.trim(),
        userID: idGen,
        userIP: ip,
        isAdmin: false,
      };
      await axios.post('https://ap-chat.onrender.com/users', newUser);
      setIsLoggedToChat(isLogged => !isLogged);
    } catch (error) {
      console.log(error);
    }
  };

  const socketRef = useRef(null);

  useEffect(() => {
    document.title = 'A1 English Kids | AP Education';

    socketRef.current = io('https://ap-chat.onrender.com/');
    checkLogin();

    socketRef.current.on('connected', (connected, handshake) => {
      console.log(connected);
      console.log(handshake);
    });

    const getMessages = async () => {
      console.log('getting');

      try {
        const dbMessages = await axios.get(
          'https://ap-chat.onrender.com/messages'
        );
        const todayMessages = dbMessages.data.filter(
          message =>
            new Date(message.createdAt).getDate() === new Date().getDate()
        );
        console.log(todayMessages);
        setMessages(messages => (messages = todayMessages));
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();

    socketRef.current.on('message', async data => {
      setMessages(messages => (messages = [...messages, data]));
      const updateMessages = async () => {
        try {
          await axios.post('https://ap-chat.onrender.com/messages', data);
        } catch (error) {
          console.log(error);
        }
      };
      await updateMessages();
    });

    socketRef.current.on('message:get', async data => {
      setMessages(messages => (messages = [...messages, data]));
    });

    socketRef.current.on('message:pinned', async (id, data) => {
      console.log(id);
      console.log(data);
      setMessages(messages => {
        messages[messages.findIndex(message => message.id === id)].isPinned =
          data.isPinned;
        return [...messages];
      });
    });

    socketRef.current.on('message:deleted', async id => {
      console.log(id);
      setMessages(
        messages =>
          (messages = [...messages.filter(message => message.id !== id)])
      );
    });

    return () => {
      socketRef.current.off('connected');
      socketRef.current.off('message');
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <>
      {(links.a1kids === undefined || links.a1kids[0] < 10) && !isLoading ? (
        <StreamPlaceHolder>
          <StreamPlaceHolderText>
            Поки що трансляції тут немає! <br />
            Перевірте, чи правильно ви вказали адресу сторінки або спробуйте
            пізніше.
          </StreamPlaceHolderText>
        </StreamPlaceHolder>
      ) : (
        // ) : currentUser.isBanned ? (
        //   <StreamPlaceHolder>
        //     <StreamPlaceHolderText>
        //       Хмммм, схоже що ви були нечемні! <br />
        //       Вас було заблоковано за порушення правил нашої платформи. Зв'яжіться
        //       зі своїм менеджером сервісу!
        //     </StreamPlaceHolderText>
        //   </StreamPlaceHolder>
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
                url={links.a1kids}
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
                      onChange={e => setUserName(e.target.value)}
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

            <Support
              sectionWidth={width}
              isSupportOpen={isSupportOpen}
              isOpenedLast={isOpenedLast}
              handleSupport={handleSupportClick}
              openKahoot={toggleKahoot}
              isKahootOpen={isKahootOpen}
            />

            <Kahoots
              sectionWidth={width}
              sectionHeight={height}
              isKahootOpen={isKahootOpen}
              isChatOpen={isChatOpen}
              isOpenedLast={isOpenedLast}
            />
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
                    onChange={e => setUserName(e.target.value)}
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

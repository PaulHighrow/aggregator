import useSize from '@react-hook/size';
// import axios from 'axios';
import { Kahoots } from 'components/Stream/Kahoots/Kahoots';
import { Support } from 'components/Stream/Support/Support';
import { nanoid } from 'nanoid';
// eslint-disable-next-line
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useOutletContext } from 'react-router-dom';
import { io } from 'socket.io-client';
import { Chat } from 'utils/Chat/Chat';
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
import axios from 'axios';

export const StreamTest = () => {
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
  const [userID, setUserID] = useState('');
  const [isLoggedToChat, setIsLoggedToChat] = useState(false);
  // eslint-disable-next-line
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

  const orientation = window.screen.orientation.type;
  const Snapshot = chatWidth === 0 ? width : width - chatWidth;

  // setUserName(name => (name = localStorage.getItem('userName')));

  const handleSubmit = e => {
    e.preventDefault();
    setUserID(id => (id = nanoid(8)));
    localStorage.setItem('userName', userName);
    localStorage.setItem('userID', userID);
    setIsLoggedToChat(isLogged => !isLogged);
  };

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('http://localhost:4000/');

    socketRef.current.on('connected', (connected, handshake) => {
      console.log(connected);
      console.log(handshake);
    });

    const getMessages = async () => {
      try {
        const dbMessages = await axios.get('http://localhost:4000/messages');
        setMessages(messages => (messages = dbMessages.data));
        // console.log(messages);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
    //
    // создаем экземпляр сокета, передаем ему адрес сервера
    // и записываем объект с названием комнаты в строку запроса "рукопожатия"
    // socket.handshake.query.roomId

    socketRef.current.on('message', data => {
      const updateMessages = async () => {
        try {
          await axios.post('http://localhost:4000/messages', data);
          setMessages(messages => (messages = [...messages, data]));
          console.log(messages);
        } catch (error) {
          console.log(error);
        }
      };
      updateMessages();
    });

    // отправляем событие добавления пользователя,
    // в качестве данных передаем объект с именем и id пользователя
    // socketRef.current.emit('user:add', { username, userId });

    // обрабатываем получение списка пользователей
    // socketRef.current.on('users', users => {
    //   // обновляем массив пользователей
    //   setUsers(users);
    // });

    socketRef.current.emit('message:get');

    // обрабатываем получение сообщений
    // socketRef.current.on('messages', messages => {
    // определяем, какие сообщения были отправлены данным пользователем,
    // если значение свойства "userId" объекта сообщения совпадает с id пользователя,
    // то добавляем в объект сообщения свойство "currentUser" со значением "true",
    // иначе, просто возвращаем объект сообщения
    // const newMessages = messages.map(msg =>
    //   msg.userId === userId ? { ...msg, currentUser: true } : msg
    // );
    // обновляем массив сообщений
    // setMessages(newMessages);
    // });

    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socketRef.current.off('connected');
      socketRef.current.off('message');
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <>
      {(links.test === undefined || links.test[0] < 10) && !isLoading ? (
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
              width: isChatOpen && width > height ? `${Snapshot}px` : '100%',
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
                url={links.test}
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
              {links.test && (
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

            {links.test && orientation.includes('portrait') && (
              <ChatBox
                ref={chatEl}
                className={isChatOpen ? 'shown' : 'hidden'}
                style={
                  isOpenedLast === 'chat' ? { zIndex: '2' } : { zIndex: '1' }
                }
              >
                {!isLoggedToChat ? (
                  <form className="home__container" onSubmit={handleSubmit}>
                    <h2 className="home__header">Sign in to Open Chat</h2>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      minLength={3}
                      maxLength={15}
                      autoComplete={'off'}
                      name="username"
                      id="username"
                      className="username__input"
                      value={userName}
                      onChange={e => setUserName(e.target.value)}
                    />
                    <button className="home__cta">SIGN IN</button>
                  </form>
                ) : (
                  <Chat socket={socketRef.current} messages={messages} />
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
          {links.test && width > height && (
            <ChatBox
              ref={chatEl}
              className={isChatOpen ? 'shown' : 'hidden'}
              style={
                isOpenedLast === 'chat' ? { zIndex: '2' } : { zIndex: '1' }
              }
            >
              {!isLoggedToChat ? (
                <form className="home__container" onSubmit={handleSubmit}>
                  <h2 className="home__header">Sign in to Open Chat</h2>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    minLength={3}
                    maxLength={15}
                    autoComplete={'off'}
                    name="username"
                    id="username"
                    className="username__input"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                  />
                  <button className="home__cta">SIGN IN</button>
                </form>
              ) : (
                <Chat socket={socketRef.current} messages={messages} />
              )}
            </ChatBox>
          )}
        </>
      )}
    </>
  );
};

import useSize from '@react-hook/size';
import axios from 'axios';
import { Label } from 'components/LeadForm/LeadForm.styled';
import { Kahoots } from 'components/Stream/Kahoots/Kahoots';
import { Support } from 'components/Stream/Support/Support';
import { Formik } from 'formik';
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
  ChatLoginValidation,
} from 'utils/Chat/Chat.styled';
import * as yup from 'yup';
import {
  BoxHideLeftSwitch,
  BoxHideRightSwitch,
  BoxHideSwitch,
  ButtonBox,
  ChatBox,
  ChatBtn,
  ChatLogo,
  KahootBtn,
  KahootLogo,
  LoginInput,
  LoginInputNote,
  LoginLogo,
  MoldingNoClick,
  MoldingNoClickSecondary,
  StreamAuthText,
  StreamAuthTextHello,
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
import {
  AdminFormBtn,
  LoginForm
} from '../AdminPanel/AdminPanel.styled';

export const StreamTest = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isKahootOpen, setIsKahootOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isButtonBoxOpen, setIsButtonBoxOpen] = useState(true);
  const [isOpenedLast, setIsOpenedLast] = useState('');
  const [isAnimated, setIsAnimated] = useState(false);
  const [animatedID, setAnimationID] = useState('');
  const [links, isLoading, currentUser, setCurrentUser] = useOutletContext();
  const chatEl = useRef();
  // eslint-disable-next-line
  const [chatWidth, chatHeight] = useSize(chatEl);
  const [width, height] = useSize(document.body);
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line
  const [userID, setUserID] = useState('');
  const [isLoggedToChat, setIsLoggedToChat] = useState(false);
  const [isBanned, setIsBanned] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isMoreThanOneWord, setIsMoreThanOneWord] = useState(true);
  const [isUserLogged, setIsUserLogged] = useState(false);

  const setAuthToken = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const toggleKahoot = e => {
    setIsKahootOpen(isKahootOpen => !isKahootOpen);
    isChatOpen || isSupportOpen
      ? setIsOpenedLast(isOpenedLast => 'kahoot')
      : setIsOpenedLast(isOpenedLast => '');
  };
  const toggleChat = () => {
    checkLogin();
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
  const toggleButtonBox = () => {
    setIsButtonBoxOpen(isOpen => !isOpen);
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
    const isLogged = localStorage.getItem('APLoggedIn');

    if (!id && name) {
      const idGen = nanoid(8);
      localStorage.setItem('userID', idGen);
    }

    if (id && name && isLogged) {
      setIsLoggedToChat(isLogged => (isLogged = true));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const idGen = nanoid(8);
    if (!userName) {
      setIsUserNameValid(false);
      return;
    } else if (userName.trim().split(' ').length < 2) {
      setIsMoreThanOneWord(false);
      return;
    } else {
      localStorage.setItem('userName', userName.trim());
      localStorage.setItem('userID', idGen);
      localStorage.setItem('APLoggedIn', true);
      try {
        const newUser = {
          username: userName.trim(),
          userID: idGen,
          userIP: currentUser.userIP,
          isAdmin: false,
        };
        await axios.post('https://ap-chat.onrender.com/users', newUser);
        setCurrentUser(user => (user = newUser));
        setIsLoggedToChat(isLogged => !isLogged);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const initialLoginValues = {
    mail: '',
    password: '',
  };

  const loginSchema = yup.object().shape({
    mail: yup
      .string()
      .required('Вкажіть пошту, за якою ви зареєстровані на нашій платформі!'),
    password: yup
      .string()
      .required(
        'Введіть пароль, який ви використовуєте для входу на нашу платформу!'
      ),
  });

  const handleLoginSubmit = async (values, { resetForm }) => {
    console.log(isUserLogged);
    try {
      const response = await axios.post('/users/login', values);
      console.log(values);
      console.log(response);
      setAuthToken(response.data.token);
      setIsUserLogged(isLogged => (isLogged = true));
      localStorage.setItem('mail', values.mail);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  const socketRef = useRef(null);

  useEffect(() => {
    document.title = 'Test Page | AP Education';

    const refreshToken = async () => {
      console.log('token refresher');
      try {
        const res = await axios.post(
          'https://aggregator-server.onrender.com/users/refresh',
          { mail: localStorage.getItem('mail') }
        );
        setIsUserLogged(isLogged => (isLogged = true));
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    refreshToken();

    socketRef.current = io('https://ap-chat.onrender.com/');
    checkLogin();

    socketRef.current.on('connected', (connected, handshake) => {
      console.log(connected);
      console.log(handshake.time);
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
    //
    // создаем экземпляр сокета, передаем ему адрес сервера
    // и записываем объект с названием комнаты в строку запроса "рукопожатия"
    // socket.handshake.query.roomId

    const getBannedUsers = async () => {
      try {
        const users = await axios.get('https://ap-chat.onrender.com/users');
        const bannedUsers = users.data
          .filter(user => user.isBanned === true)
          .map(bannedUser => bannedUser.userIP);
        if (bannedUsers.includes(currentUser.userIP)) {
          setIsBanned(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBannedUsers();

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

    // отправляем событие добавления пользователя,
    // в качестве данных передаем объект с именем и id пользователя
    // socketRef.current.emit('user:add', { username, userId });

    // обрабатываем получение списка пользователей
    // socketRef.current.on('users', users => {
    //   // обновляем массив пользователей
    //   setUsers(users);
    // });

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

    socketRef.current.on('user:banned', async (userID, userIP) => {
      console.log(userID);
      console.log(userIP);
      if (userID === currentUser.userID) {
        setIsBanned(true);
      }
    });

    return () => {
      // при размонтировании компонента выполняем отключение сокета
      socketRef.current.off('connected');
      socketRef.current.off('message');
      socketRef.current.off('message:pin');
      socketRef.current.disconnect();
    };
  }, [currentUser]);

  return (
    <>
      {!isUserLogged ? (
        <Formik
          initialValues={initialLoginValues}
          onSubmit={handleLoginSubmit}
          validationSchema={loginSchema}
        >
          <LoginForm>
            <LoginLogo />
            <StreamAuthText>
              <StreamAuthTextHello>Привіт!</StreamAuthTextHello>
              Ця сторінка недоступна для неавторизованих користувачів. Але, якщо
              ви маєте доступ до нашої платформи, то й до цієї сторінки теж.
              Введіть дані, які ви використовуєте для входу на платформу.
            </StreamAuthText>
            <Label>
              <LoginInput type="text" name="mail" placeholder="Login" />
              <LoginInputNote component="p" name="mail" type="email" />
            </Label>
            <Label>
              <LoginInput
                type="password"
                name="password"
                placeholder="Password"
              />
              <LoginInputNote component="p" name="password" />
            </Label>
            <AdminFormBtn type="submit">Увійти</AdminFormBtn>
          </LoginForm>
        </Formik>
      ) : (
        <>
          {(links.test === undefined || links.test[0] < 10) && !isLoading ? (
            <StreamPlaceHolder>
              <StreamPlaceHolderText>
                Поки що трансляції тут немає! <br />
                Перевірте, чи правильно ви вказали адресу сторінки або спробуйте
                пізніше.
              </StreamPlaceHolderText>
            </StreamPlaceHolder>
          ) : currentUser.isBanned || isBanned ? (
            <StreamPlaceHolder>
              <StreamPlaceHolderText>
                Хмммм, схоже що ви були нечемні! <br />
                Вас було заблоковано за порушення правил нашої платформи.
                Зв'яжіться зі своїм менеджером сервісу!
              </StreamPlaceHolderText>
            </StreamPlaceHolder>
          ) : (
            <>
              <StreamSection
                style={{
                  width:
                    isChatOpen && width > height
                      ? `${videoBoxWidth}px`
                      : '100%',
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

                <ButtonBox className={!isButtonBoxOpen ? 'hidden' : ''}>
                  <KahootBtn
                    onClick={toggleKahoot}
                    className={
                      isAnimated && animatedID === 'kahoot_open'
                        ? 'animated'
                        : ''
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

                <BoxHideSwitch id="no-transform" onClick={toggleButtonBox}>
                  {isButtonBoxOpen ? (
                    <BoxHideLeftSwitch />
                  ) : (
                    <BoxHideRightSwitch />
                  )}
                </BoxHideSwitch>

                {height > width && (
                  <ChatBox
                    ref={chatEl}
                    className={isChatOpen ? 'shown' : 'hidden'}
                    style={
                      isOpenedLast === 'chat'
                        ? { zIndex: '2' }
                        : { zIndex: '1' }
                    }
                  >
                    {!isLoggedToChat ? (
                      <ChatLoginForm onSubmit={handleSubmit}>
                        <ChatLoginHeader>AP Open Chat</ChatLoginHeader>
                        <ChatLoginLabel htmlFor="username">
                          Введіть ваше ім'я та прізвище повністю
                        </ChatLoginLabel>
                        <ChatLoginInput
                          type="text"
                          minLength="5"
                          name="username"
                          id="username"
                          value={userName}
                          onChange={e => {
                            setIsUserNameValid(true);
                            setIsMoreThanOneWord(true);
                            setUserName(e.target.value);
                          }}
                        />
                        <ChatLoginValidation>
                          {!isUserNameValid
                            ? "Ім'я та прізвище обов'язкові!"
                            : !isMoreThanOneWord
                            ? "Прізвище та ім'я, будь ласка, 2 слова!"
                            : ''}
                        </ChatLoginValidation>
                        <ChatLoginButton>Готово!</ChatLoginButton>
                      </ChatLoginForm>
                    ) : (
                      <Chat
                        socket={socketRef.current}
                        messages={messages}
                        isChatOpen={isChatOpen}
                        currentUser={currentUser}
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
                        Введіть ваше ім'я та прізвище повністю
                      </ChatLoginLabel>
                      <ChatLoginInput
                        type="text"
                        minLength="5"
                        name="username"
                        id="username"
                        value={userName}
                        onChange={e => {
                          setIsUserNameValid(true);
                          setIsMoreThanOneWord(true);
                          setUserName(e.target.value);
                        }}
                      />
                      <ChatLoginValidation>
                        {!isUserNameValid
                          ? "Ім'я та прізвище обов'язкові!"
                          : !isMoreThanOneWord
                          ? "Прізвище та ім'я, будь ласка, 2 слова!"
                          : ''}
                      </ChatLoginValidation>
                      <ChatLoginButton>Готово!</ChatLoginButton>
                    </ChatLoginForm>
                  ) : (
                    <Chat
                      socket={socketRef.current}
                      messages={messages}
                      isChatOpen={isChatOpen}
                      currentUser={currentUser}
                    />
                  )}
                </ChatBox>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

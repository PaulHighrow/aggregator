import axios from 'axios';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import {
  ChatLoginButton,
  ChatLoginForm,
  ChatLoginHeader,
  ChatLoginInput,
  ChatLoginLabel,
} from 'utils/Chat/Chat.styled';
import { ChatWindowed } from 'utils/Chat/ChatWindowed/ChatWindowed';
import { ChatWindowedBox } from '../../../components/Stream/Stream.styled';

export const WindowedChat = () => {
  const [userName, setUserName] = useState('');
  // eslint-disable-next-line
  const [userID, setUserID] = useState('');
  const [isLoggedToChat, setIsLoggedToChat] = useState(false);
  const [messages, setMessages] = useState([]);

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

        setMessages(messages => (messages = dbMessages.data));
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
      <ChatWindowedBox>
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
          <ChatWindowed
            socket={socketRef.current}
            messages={messages}
          />
        )}
      </ChatWindowedBox>
    </>
  );
};

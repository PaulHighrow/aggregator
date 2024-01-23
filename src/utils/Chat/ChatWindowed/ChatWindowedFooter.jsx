import { useState } from 'react';
import { useLocation } from 'react-router';
import {
  ChatFooterBox,
  ChatMessageForm,
  ChatSend,
  СhatMessageInput,
  СhatSendMessageButton,
} from '../Chat.styled';
import { animateScroll } from 'react-scroll';
import axios from 'axios';

export const ChatWindowedFooter = ({ socket }) => {
  const [message, setMessage] = useState('');
  const location = useLocation();

  const handleSendMessage = async e => {
    e.preventDefault();
    console.log(message);
    console.log(message.trim() && localStorage.getItem('userName'));
    const ip = await axios.get('https://jsonip.com/');
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        username: localStorage.getItem('userName'),
        userID: localStorage.getItem('userID'),
        userIP: ip.data.ip,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        roomLocation: location.pathname.split('-chat')[0],
      });
    }
    console.log({ userName: localStorage.getItem('userName'), message });
    setMessage('');
    setTimeout(() => {
      animateScroll.scrollToBottom({
        containerId: 'chat-box',
      });
    }, 500);
  };

  return (
    <ChatFooterBox>
      <ChatMessageForm className="form" onSubmit={handleSendMessage}>
        <СhatMessageInput
          type="text"
          placeholder="Введіть повідомлення"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <СhatSendMessageButton>
          <ChatSend />
        </СhatSendMessageButton>
      </ChatMessageForm>
    </ChatFooterBox>
  );
};

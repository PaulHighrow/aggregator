import axios from 'axios';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { animateScroll } from 'react-scroll';
import {
  ChatFooterBox,
  ChatMessageForm,
  ChatMessageLabel,
  ChatSend,
  EmojiPickerContainer,
  EmojiPickerSwitch,
  СhatMessageInput,
  СhatSendMessageButton,
} from './Chat.styled';

export const ChatFooter = ({ socket, currentUser, theme }) => {
  const [message, setMessage] = useState('');
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const location = useLocation();

  const toggleEmojiPicker = () => {
    setIsPickerOpen(isOpen => !isOpen);
  };
  const onEmojiClick = emojiObject => {
    setMessage(message => message + emojiObject.emoji);
  };

  // const closeEmojiPicker = () => {
  //   setIsPickerOpen(false);
  // };

  const handleSendMessage = async e => {
    e.preventDefault();
    const ip = await axios.get('https://jsonip.com/');
    if (
      message.trim() &&
      localStorage.getItem('userName') &&
      currentUser.userID
    ) {
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
        <ChatMessageLabel>
          <СhatMessageInput
            type="text"
            placeholder="Введіть ваше повідомлення..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <EmojiPickerSwitch onClick={toggleEmojiPicker} />
        </ChatMessageLabel>

        <EmojiPickerContainer className={isPickerOpen ? 'shown' : 'hidden'}>
          <EmojiPicker
            theme={theme}
            open={true}
            lazyLoadEmojis={true}
            onEmojiClick={onEmojiClick}
          />
        </EmojiPickerContainer>

        <СhatSendMessageButton>
          <ChatSend />
        </СhatSendMessageButton>
      </ChatMessageForm>
    </ChatFooterBox>
  );
};

import { ClickAwayListener } from '@mui/base';
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

export const ChatFooter = ({ socket, theme, currentUser }) => {
  const [message, setMessage] = useState('');
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const location = useLocation();

  const toggleEmojiPicker = () => {
    setIsPickerOpen(isOpen => !isOpen);
  };

  const onEmojiClick = emojiObject => {
    setMessage(message => message + emojiObject.emoji);
  };

  const closeEmojiPicker = () => {
    if (isPickerOpen) {
      setIsPickerOpen(false);
    }
  };

  const handleSendMessage = async e => {
    e.preventDefault();
    isPickerOpen && closeEmojiPicker();

    let pilotLocation = '';
    if (location.pathname.includes('pilot')) {
      pilotLocation = '/streams/b1';
    }

    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        username: localStorage.getItem('userName'),
        userID: localStorage.getItem('userID'),
        userIP: currentUser.ip,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        roomLocation: pilotLocation || location.pathname.split('-chat')[0],
      });
    }
    console.log({ userName: localStorage.getItem('userName'), message });
    setMessage('');

    animateScroll.scrollToBottom({
      containerId: 'chat-box',
      duration: 150,
    });
  };

  return (
    <ClickAwayListener onClickAway={closeEmojiPicker}>
      <ChatFooterBox>
        <ChatMessageForm className="form" onSubmit={handleSendMessage}>
          <ChatMessageLabel>
            <СhatMessageInput
              type="text"
              placeholder="Введіть повідомлення..."
              value={message}
              onChange={e => {
                setMessage(e.target.value);
                if (isPickerOpen) {
                  closeEmojiPicker();
                }
              }}
            />
            <EmojiPickerSwitch onClick={toggleEmojiPicker} />
          </ChatMessageLabel>

          <EmojiPickerContainer className={isPickerOpen ? 'shown' : 'hidden'}>
            <EmojiPicker
              theme={theme}
              open={true}
              lazyLoadEmojis={true}
              onEmojiClick={onEmojiClick}
              emojiStyle={'native'}
              autoFocusSearch={false}
            />
          </EmojiPickerContainer>

          <СhatSendMessageButton>
            <ChatSend />
          </СhatSendMessageButton>
        </ChatMessageForm>
      </ChatFooterBox>
    </ClickAwayListener>
  );
};

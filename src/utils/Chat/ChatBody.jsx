import { useLocation } from 'react-router';
import { animateScroll } from 'react-scroll';
import {
  ChatMessageText,
  ChatMessageUserCloud,
  ChatMessageUsername,
  ChatMessageWrapper,
  ChatMessageYou,
  ChatMessageYouCloud,
  ChatMessagesBox,
} from './Chat.styled';
import { useEffect, useRef } from 'react';

export const ChatBody = ({ messages, isChatOpen }) => {
  const location = useLocation();
  const ChatBodyEl = useRef();

  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat-box',
    });
  };

  return (
    <>
      <ChatMessagesBox id="chat-box" ref={ChatBodyEl}>
        {messages.map(message =>
          message.roomLocation === location.pathname ? (
            message.username === localStorage.getItem('userName') &&
            message.userID === localStorage.getItem('userID') ? (
              <ChatMessageWrapper className="message__chats" key={message.id}>
                <ChatMessageYou className="sender__name">You</ChatMessageYou>
                <ChatMessageYouCloud>
                  <ChatMessageText>{message.text}</ChatMessageText>
                  {/* <ChatMessageTime>
                    {new Date(message.createdAt).toLocaleTimeString('uk-UA')}
                  </ChatMessageTime> */}
                </ChatMessageYouCloud>
              </ChatMessageWrapper>
            ) : (
              <ChatMessageWrapper className="message__chats" key={message.id}>
                <ChatMessageUsername>{message.username}</ChatMessageUsername>
                <ChatMessageUserCloud className="message__recipient">
                  <ChatMessageText>{message.text}</ChatMessageText>
                  {/* <ChatMessageTime>
                    {new Date(message.createdAt).toLocaleTimeString('uk-UA')}
                  </ChatMessageTime> */}
                </ChatMessageUserCloud>
              </ChatMessageWrapper>
            )
          ) : null
        )}
      </ChatMessagesBox>
    </>
  );
};

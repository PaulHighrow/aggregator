import useSize from '@react-hook/size';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { animateScroll } from 'react-scroll';
import {
  ChatFastScrollButton,
  ChatMessageText,
  ChatMessageUserCloud,
  ChatMessageUsername,
  ChatMessageWrapper,
  ChatMessageYou,
  ChatMessagesBox,
  ChatScrollDownIcon,
  ChatWindowedMessageUserCloud,
  ChatWindowedMessageYouCloud,
} from '../Chat.styled';

export const ChatWindowedBody = ({ messages, isChatOpen }) => {
  const location = useLocation();
  const ChatBodyEl = useRef();
  // eslint-disable-next-line
  const [_, height] = useSize(ChatBodyEl);
  const [scroll, setScroll] = useState(true);
  const linksRegex = /\b(?:https?|ftp):\/\/\S+\b/g;

  useEffect(() => {
    scrollToBottom();
  });

  const calculateHeights = () => {
    setScroll(
      scroll =>
        (scroll =
          height ===
          ChatBodyEl.current.scrollHeight - ChatBodyEl.current.scrollTop)
    );
  };

  const scrollToBottom = () => {
    if (scroll) {
      animateScroll.scrollToBottom({
        containerId: 'chat-box',
      });
    }
  };

  const arrowScroll = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat-box',
    });
  };

  return (
    <>
      <ChatMessagesBox
        id="chat-box"
        ref={ChatBodyEl}
        onScroll={calculateHeights}
      >
        {messages.map(message =>
          message.roomLocation === location.pathname ||
          message.roomLocation === location.pathname.split('-chat')[0] ? (
            message.username === localStorage.getItem('userName') &&
            message.userID === localStorage.getItem('userID') ? (
              <ChatMessageWrapper className="message__chats" key={message.id}>
                <ChatMessageYou className="sender__name">
                  Ви ({message.username})
                </ChatMessageYou>
                <ChatWindowedMessageYouCloud>
                <ChatMessageText
                    dangerouslySetInnerHTML={{
                      __html: message.text.replace(
                        linksRegex,
                        match =>
                          `<a href="${match}" target="_blank">${match}</a>`
                      ),
                    }}
                  ></ChatMessageText>
                  {/* <ChatMessageTime>
                    {new Date(message.createdAt).toLocaleTimeString('uk-UA')}
                  </ChatMessageTime> */}
                </ChatWindowedMessageYouCloud>
              </ChatMessageWrapper>
            ) : (
              <ChatMessageWrapper className="message__chats" key={message.id}>
                <ChatMessageUsername>{message.username}</ChatMessageUsername>
                <ChatWindowedMessageUserCloud className="message__recipient">
                  <ChatMessageText
                    dangerouslySetInnerHTML={{
                      __html: message.text.replace(
                        linksRegex,
                        match =>
                          `<a href="${match}" target="_blank">${match}</a>`
                      ),
                    }}
                  ></ChatMessageText>
                  {/* <ChatMessageTime>
                    {new Date(message.createdAt).toLocaleTimeString('uk-UA')}
                  </ChatMessageTime> */}
                </ChatWindowedMessageUserCloud>
              </ChatMessageWrapper>
            )
          ) : null
        )}
      </ChatMessagesBox>
      {!scroll && isChatOpen && (
        <ChatFastScrollButton onClick={arrowScroll}>
          <ChatScrollDownIcon />
        </ChatFastScrollButton>
      )}
    </>
  );
};

import useSize from '@react-hook/size';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { animateScroll } from 'react-scroll';
import {
  ChatFastScrollButton,
  ChatMessagePinnedCloud,
  ChatMessageText,
  ChatMessageUserCloud,
  ChatMessageUsername,
  ChatMessageWrapper,
  ChatMessageYou,
  ChatMessageYouCloud,
  ChatMessagesBox,
  ChatPinnedMessage,
  ChatPinnedMessageIcon,
  ChatScrollDownIcon,
} from './Chat.styled';

export const ChatBody = ({ messages, isChatOpen }) => {
  const location = useLocation();
  const ChatBodyEl = useRef();
  // eslint-disable-next-line
  const [_, height] = useSize(ChatBodyEl);
  const [scroll, setScroll] = useState(true);
  const [arePinnedShown, setArePinnedShown] = useState(true);
  const linksRegex = /\b(?:https?|ftp):\/\/\S+\b/g;

  useEffect(() => {
    scrollToBottom();
  });

  const room = location.pathname.includes('pilot')
    ? '/streams-kids/a1'
    : location.pathname;

  const calculateHeights = () => {
    setScroll(
      scroll =>
        (scroll =
          height ===
          ChatBodyEl.current.scrollHeight -
            Math.ceil(ChatBodyEl.current.scrollTop))
    );
  };

  const pinnedMessages = messages
    .filter(message => message.roomLocation === room)
    .some(message => message.isPinned);

  const togglePins = () => {
    setArePinnedShown(shown => !shown);
  };

  const scrollToBottom = () => {
    if (scroll) {
      animateScroll.scrollToBottom({
        containerId: 'chat-box',
        duration: 150,
      });
    }
  };

  const arrowScroll = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat-box',
      duration: 150,
    });
  };

  return (
    <>
      <ChatMessagesBox
        id="chat-box"
        ref={ChatBodyEl}
        onScroll={calculateHeights}
      >
        {pinnedMessages && (
          <ChatPinnedMessage
            id="chat-pin"
            className={arePinnedShown ? '' : 'minimized'}
          >
            <ChatPinnedMessageIcon
              onClick={togglePins}
              className={arePinnedShown ? '' : 'minimized'}
            />
            {messages
              .filter(
                message => message.isPinned && message.roomLocation === room
              )
              .map(message => (
                <ChatMessageWrapper key={`${message.id}_pin`}>
                  <ChatMessageUsername>{message.username}</ChatMessageUsername>
                  <ChatMessagePinnedCloud>
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
                      {new Date(message.createdAt).toLocaleTimeString(
                        'uk-UA'
                      ) || new Date(Date.now()).toLocaleTimeString('uk-UA')}
                    </ChatMessageTime> */}
                  </ChatMessagePinnedCloud>
                </ChatMessageWrapper>
              ))}
          </ChatPinnedMessage>
        )}
        {messages.map(message =>
          message.roomLocation === room ||
          message.roomLocation === location.pathname.split('-chat')[0] ? (
            message.username === localStorage.getItem('userName') &&
            message.userID === localStorage.getItem('userID') ? (
              <ChatMessageWrapper key={message.id}>
                <ChatMessageYou className="sender__name">
                  Ви ({message.username})
                </ChatMessageYou>
                <ChatMessageYouCloud>
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
                </ChatMessageYouCloud>
              </ChatMessageWrapper>
            ) : (
              <ChatMessageWrapper key={message.id}>
                <ChatMessageUsername>{message.username}</ChatMessageUsername>
                <ChatMessageUserCloud className="message__recipient">
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
                </ChatMessageUserCloud>
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

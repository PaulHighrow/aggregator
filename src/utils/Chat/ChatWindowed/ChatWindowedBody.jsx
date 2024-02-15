import useSize from '@react-hook/size';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { animateScroll } from 'react-scroll';
import {
  ChatFastScrollButton,
  ChatMessageUsername,
  ChatMessageWrapper,
  ChatMessageYou,
  ChatScrollDownIcon,
  ChatUsernameBox,
  ChatWindowedBanUser,
  ChatWindowedDeleteMessage,
  ChatWindowedDeleteYourMessage,
  ChatWindowedMessageText,
  ChatWindowedMessageUserCloud,
  ChatWindowedMessageYouCloud,
  ChatWindowedMessagesBox,
  ChatWindowedPinnedMessageIcon,
} from '../Chat.styled';

export const ChatWindowedBody = ({ messages, socket }) => {
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
          ChatBodyEl.current.offsetHeight ===
          ChatBodyEl.current.scrollHeight -
            Math.ceil(ChatBodyEl.current.scrollTop))
    );
  };

  const scrollToBottom = () => {
    if (scroll) {
      animateScroll.scrollToBottom({
        containerId: 'chat-box', duration: 50,
      });
    }
  };

  const arrowScroll = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat-box', duration: 50,
    });
  };

  const pinMessage = message => {
    socket.emit('message:pin', message.id, { isPinned: !message.isPinned });
  };

  const deleteMessage = async message => {
    socket.emit('message:delete', message.id);
  };

  const banUser = async (userID, userIP) => {
    console.log(userID, userIP);
    socket.emit('user:ban', userID, userIP);
  };

  return (
    <>
      <ChatWindowedMessagesBox
        id="chat-box"
        ref={ChatBodyEl}
        onScroll={calculateHeights}
      >
        {messages.map(message =>
          message.roomLocation === location.pathname ||
          message.roomLocation === location.pathname.split('-chat')[0] ? (
            message.username === localStorage.getItem('userName') &&
            message.userID === localStorage.getItem('userID') ? (
              <ChatMessageWrapper key={message.id}>
                <ChatMessageYou className="sender__name">
                  Ви ({message.username})
                </ChatMessageYou>
                <ChatWindowedMessageYouCloud>
                  <ChatWindowedDeleteYourMessage
                    onClick={() => deleteMessage(message)}
                    id={message._id}
                  />
                  <ChatWindowedPinnedMessageIcon
                    className={message.isPinned ? 'pinned' : ''}
                    onClick={() => pinMessage(message)}
                    id={message.id}
                  />
                  <ChatWindowedMessageText
                    dangerouslySetInnerHTML={{
                      __html: message.text.replace(
                        linksRegex,
                        match =>
                          `<a href="${match}" target="_blank">${match}</a>`
                      ),
                    }}
                  ></ChatWindowedMessageText>
                  {/* <ChatMessageTime>
                    {new Date(message.createdAt).toLocaleTimeString('uk-UA')}
                  </ChatMessageTime> */}
                </ChatWindowedMessageYouCloud>
              </ChatMessageWrapper>
            ) : (
              <ChatMessageWrapper key={message.id}>
                <ChatMessageUsername>
                  <ChatUsernameBox>
                    {message.username}
                    <ChatWindowedBanUser
                      onClick={() => banUser(message.userID, message.userIP)}
                    />
                  </ChatUsernameBox>
                </ChatMessageUsername>
                <ChatWindowedMessageUserCloud className="message__recipient">
                  <ChatWindowedDeleteMessage
                    onClick={() => deleteMessage(message)}
                    id={message._id}
                  />
                  <ChatWindowedMessageText
                    dangerouslySetInnerHTML={{
                      __html: message.text.replace(
                        linksRegex,
                        match =>
                          `<a href="${match}" target="_blank">${match}</a>`
                      ),
                    }}
                  ></ChatWindowedMessageText>
                  {/* <ChatMessageTime>
                    {new Date(message.createdAt).toLocaleTimeString('uk-UA')}
                  </ChatMessageTime> */}
                </ChatWindowedMessageUserCloud>
              </ChatMessageWrapper>
            )
          ) : null
        )}
      </ChatWindowedMessagesBox>
      {!scroll && (
        <ChatFastScrollButton onClick={arrowScroll}>
          <ChatScrollDownIcon />
        </ChatFastScrollButton>
      )}
    </>
  );
};

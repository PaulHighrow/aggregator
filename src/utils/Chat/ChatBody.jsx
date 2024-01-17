import { useLocation } from 'react-router';
import {
  ChatMessageText,
  ChatMessageUserCloud,
  ChatMessageUsername,
  ChatMessageWrapper,
  ChatMessageYou,
  ChatMessageYouCloud,
  ChatMessagesBox
} from './Chat.styled';

export const ChatBody = ({ messages }) => {
  const location = useLocation();

  return (
    <>
      <ChatMessagesBox>
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

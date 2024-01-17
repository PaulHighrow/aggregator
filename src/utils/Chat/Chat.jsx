import { ChatContainer } from './Chat.styled';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';

export const Chat = ({ socket, messages }) => {
  return (
    <ChatContainer>
      <ChatBody messages={messages} />
      <ChatFooter socket={socket} />
    </ChatContainer>
  );
};

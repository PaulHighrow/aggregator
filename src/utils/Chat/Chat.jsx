import { ChatContainer } from './Chat.styled';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';

export const Chat = ({ socket, messages, isChatOpen }) => {
  return (
    <ChatContainer>
      <ChatBody messages={messages} isChatOpen={isChatOpen} />
      <ChatFooter socket={socket} />
    </ChatContainer>
  );
};

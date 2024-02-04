import { ChatContainer } from './Chat.styled';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';

export const Chat = ({ socket, messages, isChatOpen, currentUser }) => {
  return (
    <ChatContainer>
      <ChatBody messages={messages} isChatOpen={isChatOpen} />
      <ChatFooter socket={socket} currentUser={currentUser} />
    </ChatContainer>
  );
};

import { ChatWindowedContainer } from '../Chat.styled';
import { ChatWindowedBody } from './ChatWindowedBody';
import { ChatWindowedFooter } from './ChatWindowedFooter';

export const ChatWindowed = ({ socket, messages, isChatOpen }) => {
  return (
    <ChatWindowedContainer>
      <ChatWindowedBody messages={messages} isChatOpen={isChatOpen} />
      <ChatWindowedFooter socket={socket} />
    </ChatWindowedContainer>
  );
};

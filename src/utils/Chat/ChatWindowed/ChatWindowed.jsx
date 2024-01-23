import { ChatWindowedContainer } from '../Chat.styled';
import { ChatWindowedBody } from './ChatWindowedBody';
import { ChatWindowedFooter } from './ChatWindowedFooter';

export const ChatWindowed = ({ socket, messages }) => {
  return (
    <ChatWindowedContainer>
      <ChatWindowedBody messages={messages} />
      <ChatWindowedFooter socket={socket} />
    </ChatWindowedContainer>
  );
};

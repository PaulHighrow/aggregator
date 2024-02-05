import { ChatWindowedContainer } from '../Chat.styled';
import { ChatWindowedBody } from './ChatWindowedBody';
import { ChatWindowedFooter } from './ChatWindowedFooter';

export const ChatWindowed = ({ socket, messages, pinMessage }) => {
  return (
    <ChatWindowedContainer>
      <ChatWindowedBody socket={socket} messages={messages} />
      <ChatWindowedFooter socket={socket} />
    </ChatWindowedContainer>
  );
};

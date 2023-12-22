import { ChatBar } from './ChatBar';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';

export const Chat = ({ socket }) => {
  return (
    <div className="chat">
      <ChatBar />
      <div className="chat__main">
        <ChatBody />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

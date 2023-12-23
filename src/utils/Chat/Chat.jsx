import { ChatBar } from './ChatBar';
import { ChatBody } from './ChatBody';
import { ChatFooter } from './ChatFooter';

export const Chat = ({ socket, messages }) => {
  return (
    <div className="chat">
      <ChatBar socket={socket}/>
      <div className="chat__main">
        <ChatBody messages={messages}/>
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

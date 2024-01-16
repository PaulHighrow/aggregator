import { useState } from 'react';
import { useLocation } from 'react-router';

export const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');
  const location = useLocation();

  const handleSendMessage = e => {
    e.preventDefault();
    console.log(message);
    console.log(message.trim() && localStorage.getItem('userName'));
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        username: localStorage.getItem('userName'),
        userID: localStorage.getItem('userID'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        roomLocation: location.pathname,
      });
    }
    console.log({ userName: localStorage.getItem('userName'), message });
    setMessage('');
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

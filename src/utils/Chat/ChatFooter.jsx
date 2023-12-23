import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = 'http://localhost:4000/';

export const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = e => {
    e.preventDefault();
    console.log(message);
    console.log(message.trim());
    console.log(localStorage.getItem('userName'));
    console.log(message.trim() && localStorage.getItem('userName'));
    if (message.trim() && localStorage.getItem('userName')) {
      socket.emit('message', {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    console.log({ userName: localStorage.getItem('userName'), message });
    // axios.post("messages", {
    //   text: message,
    //   name: localStorage.getItem('userName'),
    //   id: `${socket.id}${Math.random()}`,
    //   socketID: socket.id,
    // })
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

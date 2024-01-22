import React, { useState } from 'react';

const ChatUI = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        Chat
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={sendMessage}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatUI;
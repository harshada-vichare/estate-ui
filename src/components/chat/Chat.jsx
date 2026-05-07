import React, { useState } from "react";
import "./chat.scss";

export default function chat() {
  const [chat, setChat] = useState(1);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
            alt="user"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
            alt="user"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
            alt="user"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
            alt="user"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
            alt="user"
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
                alt="user"
              />
              <span>John Doe</span>
            </div>
            <div className="close" onClick={() => setChat(null)}>
              X
            </div>
          </div>
          <div className="center">
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message own">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chat-message">
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

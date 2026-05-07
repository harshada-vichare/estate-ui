import React from "react";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import "./profilepage.scss";

export default function ProfilePage() {
  return (
    <div className="profilepage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://images.pexels.com/photos/18505244/pexels-photo-18505244.jpeg"
                alt="user avatar"
              />
            </span>
            <span>
              Username: <strong>John Doe</strong>
            </span>
            <span>
              Email: <strong>john@email.com</strong>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add New Post</button>
          </div>
          <List></List>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List></List>
        </div>
      </div>
      <div className="chat-container">
        <div className="wrapper">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
}

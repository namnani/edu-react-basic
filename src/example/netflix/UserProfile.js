import React from 'react'

const UserProfile = ({ user }) => (
  <div className="UserProfile">
    <div className="User">
      <div className="name">{user.name}</div>
      <div className="image">
        <img
          src={user.img}
          alt="profile"
        />
      </div>
    </div>
  </div>
);

export default UserProfile

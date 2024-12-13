// src/components/Navbar.js
import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext); // Access user data from context

  return (
    <nav>
      <h1>Social Media Feed</h1>
      {user ? (
        <p>Welcome, {user.displayName}</p> // Display user's name if logged in
      ) : (
        <p>Welcome, Guest!</p>
      )}
    </nav>
  );
};

export default Navbar;

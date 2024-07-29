import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="header">
      <div className="left-nav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="right-nav">
        {user ? (
          <>
            <span className="username">Welcome, {user.name}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

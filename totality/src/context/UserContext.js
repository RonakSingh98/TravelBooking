// src/context/UserContext.js

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (property) => {
    setCart((prevCart) => [...prevCart, property]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item !== itemToRemove)
    );
  };
  return (
    <UserContext.Provider value={{ user, login, logout, cart, addToCart,removeFromCart }}>
      {children}
    </UserContext.Provider>
  );
};

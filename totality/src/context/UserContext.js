// src/context/UserContext.js

import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const login = (userData) => {
    setUser(userData);
    // Optionally, load cart data from a database or API
    // Example: loadCartData(userData.id);
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (property) => {
    setCart((prevCart) => [...prevCart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== propertyId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <UserContext.Provider value={{ user, cart, login, logout, addToCart, removeFromCart, clearCart }}>
      {children}
    </UserContext.Provider>
  );
};

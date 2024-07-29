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
    localStorage.removeItem('token');
  };

  const addToCart = (property) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === property.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...property, quantity: 1 }];
    });
  };

  const removeFromCart = (property) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== property.id));
  };

  const updateCartItemQuantity = (property, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === property.id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <UserContext.Provider value={{ user, login, logout, cart, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </UserContext.Provider>
  );
};

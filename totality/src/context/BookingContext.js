import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter((item) => item.id !== propertyId));
  };

  return (
    <BookingContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </BookingContext.Provider>
  );
};

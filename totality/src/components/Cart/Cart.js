// src/components/Cart/Cart.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Cart.css'; // Ensure this file contains styles for your cart

const Cart = () => {
  const { cart, removeFromCart } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to the checkout page
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.title} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <button onClick={handleCheckout} className="checkout-button">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

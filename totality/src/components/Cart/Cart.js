import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Cart.css'; 

const Cart = () => {
  const { cart, removeFromCart, updateCartItemQuantity } = useContext(UserContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleIncrease = (item) => {
    updateCartItemQuantity(item, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
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
                <div className="cart-item">
                  <span>{item.title}</span>
                  <span>Price: ${item.price}</span>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-amount">
            <h3>Total Amount: ${calculateTotal().toFixed(2)}</h3>
          </div>
          <button onClick={handleCheckout} className="checkout-button">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;

// src/components/Cart/Cart.js

import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './Cart.css'; // Optional: Import CSS for styling

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(UserContext);

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total: ${totalCost}</p>
            <button onClick={clearCart}>Clear Cart</button>
            {/* Add a checkout button or link */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

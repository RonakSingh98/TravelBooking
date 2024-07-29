import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup'; 
import Home from './pages/HomePage'; 
import { UserProvider } from './context/UserContext'; 
import Header from './components/Shared/Header'; 
import Footer from './components/Shared/Footer'; 
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </Router>
  );
};

export default App;

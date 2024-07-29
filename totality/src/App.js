import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup'; // Ensure the path is correct
import Home from './pages/HomePage'; // Example of another component
import { UserProvider } from './context/UserContext'; // Assuming UserContext is defined
import Header from './components/Shared/Header'; // Import Header
import Footer from './components/Shared/Footer'; // Import Footer
import './App.css'; // Add your styles here

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
            {/* Add other routes here */}
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </Router>
  );
};

export default App;

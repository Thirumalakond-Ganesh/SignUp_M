import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'; 
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Home';

function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    isChecked: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Data:', formData);

    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   window.location.href = '/home';
    // }, 2000);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <div className="tabcontent">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/login"
              element={<Login formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />}
            />
            <Route
              path="/signup"
              element={<Signup formData={formData} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />}
            />
            <Route path="/home" element={<Home />} />
          </Routes>

          <div className="footer">
            <Link to="/login">
              <button
                className={activeTab === 'login' ? 'active' : ''}
                onClick={() => handleTabClick('login')}
                disabled={isSubmitting}
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                className={activeTab === 'signup' ? 'active' : ''}
                onClick={() => handleTabClick('signup')}
                disabled={isSubmitting}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

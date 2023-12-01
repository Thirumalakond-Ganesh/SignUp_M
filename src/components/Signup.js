import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const SignupForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      username,
      email,
      password,
      isChecked,
    });
    navigate('/');
  };

  return (
    <div>
    <form className="signup-form" onSubmit={handleSubmit}>
     <h2>SignUp</h2>
      <label className="label">
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
      </label>
      
      <label className="label">
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
      </label>
      
      <label className="label">
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      </label>
      
      <label className="label">
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      </label>
      
      <label className="lable checkbox-label">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        I am not a robot
      </label>
      <br />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
    </div>
  );
};

export default SignupForm;

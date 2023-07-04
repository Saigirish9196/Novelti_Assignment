import React, { useState } from 'react';
import "./login.style.css"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    // Check if the secret key is valid
    event.preventDefault();
    if (secretKey === process.env.REACT_APP_SECRETKEY) {
      // Perform login logic
      localStorage.setItem('secretKey', true);
      setError('')
      navigate('/users')
    } else {
      // Handle invalid secret key
      setError('Invalid secret key');
    }
  };

  return (
    <div className="login-page">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="password"
        value={secretKey}
        onChange={(event) => {
            setSecretKey(event.target.value)
            setError('')
        }}
        placeholder="Enter secret key"
      />
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default LoginPage;

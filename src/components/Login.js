import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [cancerType, setCancerType] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., authentication)

    // Redirect to the appropriate chat room based on cancer type
    navigate(`/chat/${cancerType.toLowerCase().replace(/ /g, '_')}`);
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Cancer Type:</label>
        <input
          type="text"
          value={cancerType}
          onChange={(e) => setCancerType(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

import React, { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your authentication logic
    // For simplicity, I'm just checking if username and password are not empty
    if (username.trim() === "" || password.trim() === "") {
      setError("Please enter username and password");
    } else {
      // Assuming successful login sets isLoggedIn to true
      setIsLoggedIn(true);
      // You can also redirect the user to another page upon successful login
      // For example, history.push('/dashboard');
    }
  };

  return (
    <div className="Login-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

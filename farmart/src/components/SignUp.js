import React, { useState } from 'react';

const SignUp = ({ containerRef }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log('Signing up with email:', email, 'and password:', password);
  };

  return (
    <div className="signup" ref={containerRef}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="button is-primary">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
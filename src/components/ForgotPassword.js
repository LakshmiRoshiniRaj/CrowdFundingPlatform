import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    alert(`Password reset link sent to ${email}.`);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
  
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
      <p>Please enter your email to receive a password reset link:</p>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className="form-control mb-3"
        placeholder="Enter your email"
      />
      <button onClick={handleResetPassword} className="btn btn-primary">
        Send Reset Link
      </button>
    </div></div></div>
  );
};

export default ForgotPassword;

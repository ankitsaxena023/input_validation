import React, { useState } from "react";

const ValidateInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validateEmail = (value) => {
    //ensure that the email has "@" and after "@" a "."
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    // ensure that the password has a letter small or capital, an special character and length of 8
    const passwordRegex =
      /(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;
    return passwordRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className={`w-full px-3 py-2 border rounded-md ${
              emailValid === false
                ? "border-red-500"
                : emailValid === true
                ? "border-green-500"
                : "border-gray-300"
            } focus:border-gray-500 focus:outline-none`}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className={`w-full px-3 py-2 border rounded-md ${
              passwordValid === false
                ? "border-red-500"
                : passwordValid === true
                ? "border-green-500"
                : "border-gray-300"
            } focus:border-gray-500 focus:outline-none`}
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ValidateInput;

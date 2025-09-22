import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = () => {
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    forgetPassword(email)
      .then(() => {
        setMessage('Password reset email sent! Check your inbox.');
        setError('');
      })
      .catch((err) => {
        setError(err.code || 'Something went wrong');
        setMessage('');
      });
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12 bg-gray-900">
      <Helmet>
        <title>Forgot Password | JobFinder</title>
      </Helmet>

      <div className="w-full max-w-md p-8 bg-white border-4 border-purple-500 shadow-lg rounded-2xl">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          Forgot Password
        </h2>
        <p className="mb-6 text-center text-gray-500">
          Enter your email to receive a password reset link.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-4 py-3 mb-4 text-black placeholder-gray-400 bg-gray-100 rounded-full outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handleReset}
          className="w-full py-3 mb-4 font-bold text-white transition bg-purple-600 rounded-full hover:bg-purple-700"
        >
          Send Reset Email
        </button>

        {message && <p className="text-center text-green-500">{message}</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;

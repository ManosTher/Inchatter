import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="p-6 w-64 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 placeholder-gray-300 border rounded mt-1 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <button type="submit" className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
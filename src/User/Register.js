import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user); // Signed up
        try {
          const docRef = await addDoc(collection(db, "users"), {
            uid: user.uid,
            email: user.email
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="p-6 w-64 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">Register</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email }
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
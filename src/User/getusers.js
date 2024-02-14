import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase/firebaseConfig';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          console.log(doc.data().name);
        });
      }
    
      fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        {users.map(user => (
          <div key={user.id} className="p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 py-1">
                <div className="text-xl font-bold text-black">{user.name}</div>
                <div className="text-sm font-semibold text-gray-500">{user.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
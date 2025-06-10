'use client';

import initialUsers from '../constants/users.json';
import { useState, useEffect } from 'react';

// Custom hook to manage user state and persist it in localStorage
export const useUsers = () => {
  const LOCAL_STORAGE_KEY = 'users';

  // Initialize users state:
  // - If running in browser, try to load users from localStorage
  // - Otherwise fallback to initialUsers imported from JSON file
  const [users, setUsers] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedUsers = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedUsers ? JSON.parse(storedUsers) : initialUsers;
    }
    return initialUsers;
  });

  // Whenever 'users' changes, update localStorage to keep data persistent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
    }
  }, [users]);

  // Function to add a new user with validations
  const addUser = (newUser) => {
    // Check that all fields are filled and not empty
    for (const key in newUser) {
      if (!newUser[key] || newUser[key].toString().trim() === '') {
        alert('⚠️ Please fill in all fields before registering');
        return false;
      }
    }

    // Check for duplicate email
    if (users.some(u => u.email === newUser.email)) {
      alert('⚠️ A user with that email already exists');
      return false;
    }

    // Check for duplicate username
    if (users.some(u => u.username === newUser.username)) {
      alert('⚠️ A user with that username already exists');
      return false;
    }

    // Add a unique id based on current users length
    const userWithId = {
      ...newUser,
      id: users.length + 1
    };

    // Update users state by adding the new user
    setUsers([...users, userWithId]);

    alert('✅ User registered successfully');
    return true;
  };

  // Return the users array and the function to add a new user
  return { users, addUser };
};

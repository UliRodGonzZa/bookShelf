// services/manageUser.js

// Simulate a backend using localStorage for user data persistence
const LOCAL_KEY = 'users';

// Retrieve all users stored in localStorage
export const getUsers = async () => {
  const data = localStorage.getItem(LOCAL_KEY);
  // Parse stored JSON or return an empty array if no data found
  return { data: data ? JSON.parse(data) : [] };
};

// Create a new user and save it to localStorage
export const createUser = async (user) => {
  // Get existing users from localStorage
  const data = localStorage.getItem(LOCAL_KEY);
  const users = data ? JSON.parse(data) : [];

  // Create a new user object with an auto-incremented id
  const newUser = {
    ...user,
    id: users.length + 1
  };

  // Add the new user to the existing users array
  const updatedUsers = [...users, newUser];

  // Save the updated users array back to localStorage as JSON
  localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedUsers));

  // Return the newly created user
  return { data: newUser };
};

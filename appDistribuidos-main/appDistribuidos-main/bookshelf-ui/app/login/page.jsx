'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TextField, Button, Box, Typography, Avatar } from '@mui/material';
import { useUsers } from '../hooks/useUsers';

export default function LoginPage() {
  // Access users from custom hook
  const { users } = useUsers();
  // Router to navigate programmatically
  const router = useRouter();

  // Form state to hold username and password
  const [form, setForm] = useState({ username: '', password: '' });
  // Error message state
  const [error, setError] = useState('');

  // Update form state on input change and clear error
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find user by username
    const user = users.find(u => u.username === form.username);

    // If user not found, show error
    if (!user) {
      setError('User not found');
      return;
    }

    // If password incorrect, show error
    if (user.password !== form.password) {
      setError('Wrong password');
      return;
    }

    // On success, alert welcome message and navigate to Projects page
    alert(`Welcome ${user.username}!`);
    router.push('./Projects'); 
  };

  // Fields to render: username and password
  const fields = [
    { name: 'username', label: 'Username' },
    { name: 'password', label: 'Password', type: 'password' },
  ];

  return (
    <Box
      sx={{
        width: { xs: '90%', sm: 400, md: 480 },
        margin: '4rem auto',
        p: 6,
        borderRadius: 3,
        backgroundColor: '#2d475d',
        boxShadow: '0 5px 20px rgba(0,0,0,0.4)',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      {/* Circular avatar/image at the top */}
      <Avatar
        src="/signup-illustration.svg" // Change this path or URL for your image
        alt="Logo"
        sx={{
          width: 120,
          height: 120,
          margin: '0 auto 2rem',
          border: '4px solid #FF9800',
          boxShadow: '0 0 15px #FF9800',
        }}
      />

      {/* Title */}
      <Typography variant="h3" sx={{ mb: 6, fontWeight: 'bold', color: '#fff' }}>
        Login Here
      </Typography>

      {/* Form container */}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Render input fields */}
        {fields.map(({ name, label, type }) => (
          <TextField
            key={name}
            name={name}
            label={label}
            type={type || 'text'}
            value={form[name]}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            sx={{
              input: { color: 'white', fontSize: '1.4rem' },
              label: { color: 'white', fontSize: '1.4rem' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'orange',
                },
                '&:hover fieldset': {
                  borderColor: 'darkorange',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#FF9800',
                },
              },
              '& label.Mui-focused': {
                color: '#FF9800',
              },
              '& label.MuiInputLabel-shrink': {
                color: 'white',
              },
            }}
          />
        ))}

        {/* Show error message if any */}
        {error && (
          <Typography sx={{ color: 'red', fontSize: '1.1rem', mt: 1 }}>
            {error}
          </Typography>
        )}

        {/* Submit button */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#FF9800',
            '&:hover': {
              backgroundColor: '#FB8C00',
            },
            fontSize: '1.4rem',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: 1,
            mt: 3,
          }}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
}

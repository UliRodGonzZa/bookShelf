'use client';
import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const initialForm = {
  email: '',
  username: '',
  name: '',
  lastname: '',
  password: '',
};

export default function SignUpDialog({ onSignUp }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(form);
    setForm(initialForm);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {[
        { name: 'email', label: 'E-mail' },
        { name: 'username', label: 'Username' },
        { name: 'name', label: 'Name' },
        { name: 'lastname', label: 'Last name' },
        { name: 'password', label: 'Password', type: 'password' }
      ].map((field) => (
        <TextField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type || 'text'}
          value={form[field.name]}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{
            input: { color: 'white' },             // texto que escribes en el input
            label: { color: 'white' },             // etiqueta normal
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
              color: '#FF9800',                    // etiqueta cuando el input está enfocado
            },
            '& label.MuiInputLabel-shrink': {
              color: 'white',                      // etiqueta flotante (cuando tiene texto)
            },
          }}
        />
      ))}

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: '#FF9800',
          '&:hover': {
            backgroundColor: '#FB8C00'
          }
        }}
      >
        Sign up
      </Button>
    </Box>
  );
}

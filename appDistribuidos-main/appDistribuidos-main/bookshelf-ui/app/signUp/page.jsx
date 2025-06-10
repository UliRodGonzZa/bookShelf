'use client';
import { useRouter } from 'next/navigation';
import { Container, Box, Typography, Grid } from '@mui/material';
import { useUsers } from '../hooks/useUsers';
import SignUpDialog from '../components/SignUpDialog';

export default function ContactPage() {
  // Access the addUser function from custom users hook
  const { addUser } = useUsers();
  // Initialize Next.js router for navigation
  const router = useRouter();

  // Wrapper function to handle user sign-up and redirect upon success
  const handleSignUp = (userData) => {
    const result = addUser(userData);
    // Assuming addUser returns true if registration was successful
    if (result) {
      // Redirect user to the login page after successful registration
      router.push('/login');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      {/* Main grid container to organize content */}
      <Grid container spacing={4} alignItems="center">
        {/* Left column with sign-up form and info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Sign up
          </Typography>
          <Box
            sx={{
              borderBottom: '4px solid #555555',
              width: '400px',
              mb: 2,
            }}
          />
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>
            Register to access the platform. All you need is your email and a username.
          </Typography>
          {/* Styled box containing the SignUpDialog component */}
          <Box
            sx={{
              background: '#0D1B2A',
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 2px rgba(0,0,0,0.05)',
            }}
          >
            {/* Pass the sign-up handler to the dialog component */}
            <SignUpDialog onSignUp={handleSignUp} />
          </Box>
        </Grid>

        {/* Right column with illustrative image */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', ml: 18 }}>
          <img
            src="/signup-illustration.svg"
            alt="Register"
            width={550}
            height={250}
            style={{ boxShadow: '0px 4px 20px rgba(0,0,0,0.1)', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

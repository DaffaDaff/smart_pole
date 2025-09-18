import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <Container
      sx={{
        p: 3,
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have successfully logged in!
      </Typography>

      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Container>
  );
}

export default Dashboard;

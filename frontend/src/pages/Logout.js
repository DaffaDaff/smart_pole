import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      handleLogout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      {/* You can add a spinner or message here if you want */}
    </Container>
  );
}

export default Logout;

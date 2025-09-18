import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  TextField,
  Button,
  Box
} from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const hardcodedUsername = "admin";
  const hardcodedPassword = "pole123";

  const handleLogin = () => {
    if (username === hardcodedUsername && password === hardcodedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      alert("Login successful!");
      navigate('/');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Container
      sx={{
        p: 3,
        my: 5,
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
      }}
    >
      <Box mb={2}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Box>

      <Box mb={2}>
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>

      <Button
        variant="contained"
        onClick={handleLogin}
      >
        Sign in
      </Button>
    </Container>
  );
};

export default Login;

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, useTheme } from '@mui/material';
import logo from '../../../assets/revio_logo.png';
import { tokens } from '../../../theme';
import { useAuth } from '../../../contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // Handle login on submit
  const handleLogin = async (e) => {
    e.preventDefault();

    // Try login with email and password
    // Else error
    try {
      await login(data.email, data.password);
      navigate('/');
    } catch (err) {
      console.log(err);
      // TODO: need to handle login failure
    }
  };

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  return (
    <Box
      className='login-section'
      sx={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '550px',
          height: '60vh',
          bgcolor: '#fff',
          padding: '3rem 0rem',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <img src={logo} style={{ width: 'auto', height: '100px' }} alt='' />
        </Box>

        <form
          className='form'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
          onSubmit={handleLogin}
        >
          <Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>
            Sign In
          </Typography>
          <TextField
            required
            id='outlined-required'
            label='Email'
            onChange={(e) => {
              setData({
                ...data,
                email: e.target.value,
              });
            }}
          />
          <TextField
            required
            id='outlined-password-input'
            label='Password'
            type='password'
            onChange={(e) => {
              setData({
                ...data,
                password: e.target.value,
              });
            }}
          />

          <Button
            type='button'
            color='primary'
            className='form__custom-button'
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </form>

        <Typography sx={{ fontSize: '1rem', textAlign: 'center' }}>
          © 2022. All RIGHT RESERVED
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

import React from 'react';
import { Grid, Typography, Box, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

interface FormValues {
  email: string;
}

export default function Login() {
  let navigate = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { email: ''}
  });

  let onSubmit = async (data: FormValues) => {
    try {
      const response = await axios.post('https://upskilling-egypt.com:3007/api/auth/Forgetpass', data);
      console.log(response);
      toast.success("Login Successfully!");
      setTimeout(() => {
        navigate('/dashboard'); // Ensure this path matches the route setup in App
      }, 1000);
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
      console.log(error);
    }
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left side - Form */}
      <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          onSubmit={handleSubmit(onSubmit)}
          component="form"
          noValidate
          sx={{ width: '80%', maxWidth: '400px' }}
        >
          <ToastContainer />
          <Typography component="p" variant="subtitle1" sx={{ color: '#686887' }}>
            Welcome Back!
          </Typography>
          <Typography component="h1" variant="h5" fontWeight="bold">
          Forget Password !!
          </Typography>

          <TextField
            label="Email"
            required
            fullWidth
            id="email"
            type="email"
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mt: 2 }}
            placeholder="john@mail.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid Email"
              }
            })}
          />

          <Button
            type="submit"
            variant="contained"
            color="warning"
            fullWidth
            sx={{ mt: 3 }}
          >
            SEND
          </Button>

          {/* Login Button */}
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => navigate('/login')} // Navigate to Register page
          >
            login
          </Button>
        </Box>
      </Grid>

      {/* Right side - Background Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: 'url(https://via.placeholder.com/800)', // Replace with your image URL
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'none', md: 'block' }, // Hide on small screens
        }}
      />
    </Grid>
  );
}

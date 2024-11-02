import { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Stack,
} from '@mui/material'

export default function ResetPass() {
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value,
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle password reset logic here
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 60,
            height: 60,
            bgcolor: '#6366f1',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </Box>

        <Typography variant="body1" color="text.secondary" gutterBottom>
          Welcome back!
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Reset Your Password Now !
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, width: '100%' }}>
          <Stack spacing={3}>
            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                E-mail
              </Typography>
              <TextField
                fullWidth
                name="email"
                type="email"
                placeholder="john@mail.com"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  bgcolor: '#f8fafc',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e2e8f0',
                    },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                OTP
              </Typography>
              <TextField
                fullWidth
                name="otp"
                placeholder="1233"
                value={formData.otp}
                onChange={handleChange}
                sx={{
                  bgcolor: '#f8fafc',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e2e8f0',
                    },
                  },
                }}
              />
            </Box>

            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Password
              </Typography>
              <TextField
                fullWidth
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                sx={{
                  bgcolor: '#f8fafc',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e2e8f0',
                    },
                  },
                }}
              />
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  sx={{
                    color: '#6366f1',
                    '&.Mui-checked': {
                      color: '#6366f1',
                    },
                  }}
                />
              }
              label="Remember Me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                bgcolor: '#f97316',
                '&:hover': {
                  bgcolor: '#ea580c',
                },
                textTransform: 'none',
                py: 1.5,
              }}
            >
              Send
            </Button>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: '#e2e8f0',
                color: '#6366f1',
                '&:hover': {
                  borderColor: '#cbd5e1',
                  bgcolor: 'transparent',
                },
                textTransform: 'none',
                py: 1.5,
              }}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}
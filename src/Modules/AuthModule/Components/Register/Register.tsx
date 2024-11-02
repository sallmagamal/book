import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material'

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'Admin',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const { name, value } = event.target
    setFormData(prev => ({
      ...prev,
      [name as string]: value,
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle registration logic here
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
          Create new account
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Register
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2, width: '100%' }}>
          <Stack spacing={3}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  First Name
                </Typography>
                <TextField
                  fullWidth
                  name="firstName"
                  placeholder="John Doe"
                  value={formData.firstName}
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
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Last Name
                </Typography>
                <TextField
                  fullWidth
                  name="lastName"
                  placeholder="John Doe"
                  value={formData.lastName}
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
            </Box>

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

            <Box>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Role
              </Typography>
              <FormControl
                fullWidth
                sx={{
                  bgcolor: '#f8fafc',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e2e8f0',
                    },
                  },
                }}
              >
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  displayEmpty
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Editor">Customer</MenuItem>
                </Select>
              </FormControl>
            </Box>

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
              Register
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
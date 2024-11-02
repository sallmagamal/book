import { Box, Button, Card, CardContent, CardHeader, Checkbox, TextField, Typography, FormControlLabel, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  return (
    <Box
      className="flex min-h-screen items-center justify-center bg-gray-50 p-4"
      sx={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', bgcolor: '#f9fafb', p: 4 }}
    >
      <Card sx={{ width: '100%', maxWidth: 400 }}>
        <CardHeader
          sx={{ textAlign: 'center', p: 2 }}
          title={
            <>
              <Box sx={{ mx: 'auto', height: 48, width: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-12 w-12 text-purple-600"
                  style={{ height: 48, width: 48, color: '#7e22ce' }}
                >
                  <path d="M4 12h8m-8 4h16m-8-8h8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Box>
              <Typography variant="body1" color="textSecondary">
                Welcome back!
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                Login to your account
              </Typography>
            </>
          }
        />
        <CardContent>
          <Stack spacing={2}>
            <Box>
              <Typography variant="body2">E-mail</Typography>
              <TextField
                fullWidth
                id="email"
                placeholder="john@mail.com"
                type="email"
                variant="outlined"
                sx={{ bgcolor: '#f8fafc', mt: 1 }}
              />
            </Box>
            <Box>
              <Typography variant="body2">Password</Typography>
              <TextField
                fullWidth
                placeholder="••••••••"
                id="password"
                type="password"
                variant="outlined"
                sx={{ bgcolor: '#f8fafc', mt: 1 }}
              />
            </Box>
            <FormControlLabel
              control={<Checkbox sx={{ color: '#6366f1', '&.Mui-checked': { color: '#6366f1' } }} />}
              label={<Typography variant="body2">Remember Me</Typography>}
            />
            <Typography
              component={RouterLink}
              to="/forget-pass"
              variant="body2"
              color="primary"
              sx={{ textAlign: 'right', display: 'block', cursor: 'pointer', mb: 1 }}
            >
              Forgot Password?
            </Typography>
            <Button
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
              Login
            </Button>
            <Button
              component={RouterLink}
              to="/register"
              fullWidth
              variant="outlined"
              sx={{
                borderColor: '#e2e8f0',
                color: '#6366f1',
                '&:hover': {
                  borderColor: '#cbd5e1',
                },
                textTransform: 'none',
                py: 1.5,
              }}
            >
              Register
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

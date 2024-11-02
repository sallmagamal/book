import { useState, useEffect } from 'react'
import { Box, Button, Container, Grid, TextField, Typography, Stack, IconButton } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import EmailIcon from '@mui/icons-material/Email'

export default function Subscribe() {
  const [timeLeft, setTimeLeft] = useState({
    days: 768,
    hours: 1,
    minutes: 27,
    seconds: 55
  })

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        bgcolor: '#FFF5F5', 
        borderRadius: 4, 
        p: 4, 
        mb: 4,
        position: 'relative',
        overflow: 'hidden' 
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" sx={{ color: '#3F3D56', mb: 2, fontWeight: 'bold' }}>
              All books are 50% off now!
            </Typography>
            <Typography variant="h4" sx={{ color: '#3F3D56', mb: 3 }}>
              Don't miss such a deal!
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 4 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
            </Typography>
            
            <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <Box key={unit} textAlign="center">
                  <Typography variant="h4" color="error" fontWeight="bold">
                    {String(value).padStart(2, '0')}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#666', textTransform: 'uppercase' }}>
                    {unit}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Stack direction="row" spacing={1}>
              {[0, 1, 2, 3].map((dot) => (
                <IconButton 
                  key={dot}
                  size="small"
                  onClick={() => setActiveSlide(dot)}
                  sx={{ 
                    color: activeSlide === dot ? 'error.main' : 'grey.400',
                    p: 0
                  }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: 12 }} />
                </IconButton>
              ))}
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Box component="img" src="/placeholder.svg?height=400&width=400" alt="Stack of books" sx={{ width: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ 
        bgcolor: '#E84118', 
        borderRadius: 4, 
        p: 6, 
        textAlign: 'center',
        position: 'relative' 
      }}>
        <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2 }}>
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ color: 'white', mb: 4, maxWidth: 600, mx: 'auto' }}>
          Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.
        </Typography>

        <Box component="form" sx={{ 
          display: 'flex', 
          maxWidth: 500, 
          mx: 'auto',
          bgcolor: 'white',
          borderRadius: 1,
          p: 0.5
        }}>
          <TextField
            placeholder="youremail123@gmail.com"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1, color: 'grey.500' }} />,
              disableUnderline: true,
            }}
            sx={{ px: 2 }}
          />
          <Button 
            variant="contained" 
            sx={{ 
              bgcolor: '#E84118',
              '&:hover': {
                bgcolor: '#C23616'
              }
            }}
          >
            SUBSCRIBE
          </Button>
        </Box>

        {/* Decorative squares */}
        {[
          { top: 0, left: 0, bgcolor: '#FFD700' },
          { top: 0, right: 0, bgcolor: '#FF6B6B' },
          { bottom: 0, left: 0, bgcolor: '#FF6B6B' },
          { bottom: 0, right: 0, bgcolor: '#FFD700' }
        ].map((square, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              width: 20,
              height: 20,
              ...square
            }}
          />
        ))}
      </Box>
    </Container>
  )
}
import { useState } from 'react'
import { Box, Button, Container, IconButton, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

export default function FeaturedBook() {
  const [activeSlide, setActiveSlide] = useState(0)

  const books = [
    {
      title: "Birds Gonna Be Happy",
      author: "TIMBUR HOOD",
      price: "45.00",
      image: "/placeholder.svg?height=600&width=450",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac."
    },
    // Additional books would go here
  ]

  return (
    <Box sx={{ bgcolor: '#FFF5F5', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg">
        <Box sx={{ position: 'relative', py: 8 }}>
          {/* Navigation Arrows */}
          <IconButton 
            sx={{ 
              position: 'absolute', 
              left: -20, 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#FF6B6B',
              border: '1px solid #FF6B6B',
              '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          
          <IconButton 
            sx={{ 
              position: 'absolute', 
              right: -20, 
              top: '50%', 
              transform: 'translateY(-50%)',
              color: '#FF6B6B',
              border: '1px solid #FF6B6B',
              '&:hover': { bgcolor: 'rgba(255,107,107,0.1)' }
            }}
          >
            <ArrowForwardIcon />
          </IconButton>

          {/* Main Content */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'center',
            gap: 8
          }}>
            {/* Book Image */}
            <Box sx={{ 
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              '& img': {
                maxWidth: '100%',
                height: 'auto',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                borderRadius: 2
              }
            }}>
              <img src={books[activeSlide].image} alt={books[activeSlide].title} />
            </Box>

            {/* Book Details */}
            <Box sx={{ flex: 1 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#666',
                  mb: 1,
                  letterSpacing: 1
                }}
              >
                Featured Book
              </Typography>

              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#666',
                  mb: 2,
                  display: 'block'
                }}
              >
                BY {books[activeSlide].author}
              </Typography>

              <Typography 
                variant="h3" 
                sx={{ 
                  color: '#483D8B',
                  mb: 3,
                  fontWeight: 'bold'
                }}
              >
                {books[activeSlide].title}
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666',
                  mb: 3
                }}
              >
                {books[activeSlide].description}
              </Typography>

              <Typography 
                variant="h4" 
                sx={{ 
                  color: '#FF6B6B',
                  mb: 3,
                  fontWeight: 'bold'
                }}
              >
                $ {books[activeSlide].price}
              </Typography>

              <Button 
                variant="outlined"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  color: '#483D8B',
                  borderColor: '#483D8B',
                  borderRadius: 0,
                  px: 3,
                  '&:hover': {
                    borderColor: '#483D8B',
                    bgcolor: 'rgba(72,61,139,0.1)'
                  }
                }}
              >
                VIEW MORE
              </Button>
            </Box>
          </Box>

          {/* Navigation Dots */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 1,
            mt: 4
          }}>
            {[0, 1, 2, 3].map((dot) => (
              <IconButton 
                key={dot}
                size="small"
                onClick={() => setActiveSlide(dot)}
                sx={{ 
                  color: activeSlide === dot ? '#FF6B6B' : '#DDD',
                  p: 0
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 12 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
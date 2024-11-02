import { useState } from 'react'
import { Box, Button, Card, CardContent, Container, Grid, IconButton, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Link } from 'react-router-dom';
export default function NewRelease() {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null)

  const books = [
    {
      title: "Simple Way Of Piece Life",
      author: "Armor Ramsey",
      price: "40.00",
      image: "/placeholder.svg?height=400&width=300"
    },
    {
      title: "Great Travel At Desert",
      author: "Sanchit Howdy",
      price: "38.00",
      image: "/placeholder.svg?height=400&width=300"
    },
    {
      title: "The Lady Beauty Scarlett",
      author: "Arthur Doyle",
      price: "45.00",
      image: "/placeholder.svg?height=400&width=300"
    },
    {
      title: "Once Upon A Time",
      author: "Klien Marry",
      price: "35.00",
      image: "/placeholder.svg?height=400&width=300"
    },
  ]

  return (
    <Box sx={{ bgcolor: '#FFF5F5', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="subtitle1" 
            sx={{ 
              color: '#666',
              mb: 2,
              letterSpacing: 1
            }}
          >
            SOME QUALITY ITEMS
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              color: '#483D8B',
              fontWeight: 'bold'
            }}
          >
            New Release Books
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {books.map((book, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card 
                sx={{ 
                  bgcolor: 'white',
                  boxShadow: 'none',
                  height: '100%',
                  position: 'relative',
                  '&:hover': {
                    '& .MuiCardContent-root': {
                      bgcolor: 'rgba(0,0,0,0.02)'
                    }
                  }
                }}
                onMouseEnter={() => setHoveredBook(index)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                <Box 
                  sx={{ 
                    position: 'relative',
                    pt: '140%',
                    mb: 2
                  }}
                >
                  <Box
                    component="img"
                    src={book.image}
                    alt={book.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  {hoveredBook === index && (
                    <Button
                      variant="contained"
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: '#FF6B6B',
                        '&:hover': {
                          bgcolor: '#FF5252'
                        }
                      }}
                    >
                      ADD TO CART
                    </Button>
                  )}
                </Box>
                <CardContent>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#483D8B',
                      mb: 1,
                      fontWeight: 'medium'
                    }}
                  >
                    {book.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      mb: 2
                    }}
                  >
                    {book.author}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#FF6B6B',
                      fontWeight: 'bold'
                    }}
                  >
                    $ {book.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4
        }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {[0, 1, 2, 3].map((dot) => (
              <IconButton 
                key={dot}
                size="small"
                sx={{ 
                  color: dot === 0 ? '#FF6B6B' : '#DDD',
                  p: 0
                }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 12 }} />
              </IconButton>
            ))}
          </Box>

          <Link to="books" className="btn btn-link"
           style={{ color: '#FF6B6B', textDecoration: 'none' }}>
  View All Products
  <ArrowForwardIcon className="ms-2" />
</Link>
        </Box>
      </Container>
    </Box>
  )
}
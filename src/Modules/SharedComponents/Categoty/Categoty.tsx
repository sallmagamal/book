import { Box, Button, Card, CardContent, CardMedia, Container, IconButton, Typography } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

export default function Category() {
  const categories = [
    {
      title: "Higher Education",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Management Books",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Engineering Books",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start',
        mb: 6 
      }}>
        <Box>
          <Typography 
            component="span" 
            sx={{ 
              color: '#FF6B6B',
              fontWeight: 'medium',
              display: 'block',
              mb: 1
            }}
          >
            Categories
          </Typography>
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              color: '#483D8B',
              fontWeight: 'bold'
            }}
          >
            Explore our Top Categories
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton 
            sx={{ 
              color: '#666',
              border: '1px solid #DDD',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.04)'
              }
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton 
            sx={{ 
              color: 'white',
              bgcolor: '#FF6B6B',
              '&:hover': {
                bgcolor: '#FF5252'
              }
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>

      <Box sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          md: 'repeat(3, 1fr)'
        },
        gap: 4,
        mb: 6
      }}>
        {categories.map((category, index) => (
          <Card 
            key={index}
            sx={{ 
              boxShadow: 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          >
            <CardMedia
              component="img"
              image={category.image}
              alt={category.title}
              sx={{ 
                height: 240,
                borderRadius: 2
              }}
            />
            <CardContent sx={{ textAlign: 'center', pt: 3 }}>
              <Typography 
                variant="h5" 
                component="h3"
                sx={{ 
                  color: '#483D8B',
                  fontWeight: 'medium'
                }}
              >
                {category.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          endIcon={<ArrowForward />}
          sx={{
            color: '#483D8B',
            borderColor: '#483D8B',
            borderRadius: 0,
            px: 4,
            '&:hover': {
              borderColor: '#483D8B',
              bgcolor: 'rgba(72,61,139,0.1)'
            }
          }}
          variant="outlined"
        >
          VIEW MORE
        </Button>
      </Box>
    </Container>
  )
}
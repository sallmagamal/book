import { Box, Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Articles() {
  const articles = [
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "2 Aug, 2021",
      title: "Reading Books Always Makes The Moments Happy",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "2 Aug, 2021",
      title: "Reading Books Always Makes The Moments Happy",
    },
    {
      image: "/placeholder.svg?height=400&width=600",
      date: "2 Aug, 2021",
      title: "Reading Books Always Makes The Moments Happy",
    },
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          READ OUR ARTICLES
        </Typography>
        <Typography variant="h3" component="h2" color="primary" fontWeight="bold">
          Latest Articles
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="240"
                image={article.image}
                alt="Article thumbnail"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="caption" color="text.secondary" gutterBottom>
                  {article.date}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'medium', mb: 2 }}>
                  {article.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small" color="primary">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={6}>
        <Button 
          variant="outlined" 
          color="primary" 
          endIcon={<ArrowForwardIcon />}
          sx={{ 
            px: 4,
            py: 1,
            borderRadius: 0,
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white',
            }
          }}
        >
          READ ALL ARTICLES
        </Button>
      </Box>
    </Container>
  )
}
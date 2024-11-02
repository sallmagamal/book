import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  Toolbar,
  Typography,
  MobileStepper,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  ShoppingCart,
  Person,
  Favorite,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

const images = [
  {
    label: "Book 1",
    imgPath: "/placeholder.svg?height=500&width=400",
  },
  {
    label: "Book 2",
    imgPath: "/placeholder.svg?height=500&width=400",
  },
  {
    label: "Book 3",
    imgPath: "/placeholder.svg?height=500&width=400",
  },
];

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      {/* Top Bar */}
      <Box sx={{ bgcolor: "#3F3D6B", color: "white", py: 1 }}>
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">+91 8374902234</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small" sx={{ color: "white" }}><Facebook fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: "white" }}><Instagram fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: "white" }}><LinkedIn fontSize="small" /></IconButton>
              <IconButton size="small" sx={{ color: "white" }}><Twitter fontSize="small" /></IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Navigation */}
      <AppBar position="static" color="default" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ width: 50, height: 50, bgcolor: "#E0E0E0", borderRadius: "50%", mr: 4 }} />
            <Stack direction="row" spacing={3} sx={{ flexGrow: 1, alignItems: "center" }}>
              <Link href="#" underline="none" sx={{ color: "#FF4B4B", fontWeight: 500 }}>HOME</Link>
              {["ABOUT US", "BOOKS", "NEW RELEASE", "CONTACT US", "BLOG"].map((item) => (
                <Link key={item} href="#" underline="none" sx={{ color: "text.primary", fontWeight: 500 }}>{item}</Link>
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              <IconButton><Person /></IconButton>
              <IconButton><ShoppingCart /></IconButton>
              <IconButton><Favorite /></IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ background: "linear-gradient(135deg, #FFE6E6 0%, #F8F8F8 100%)", py: 8, position: "relative", overflow: "hidden" }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} alignItems="center" spacing={4} sx={{ minHeight: 400 }}>
            {/* Left Content */}
            <Box sx={{ flex: 1, maxWidth: 500 }}>
              <Typography variant="h2" component="h1" sx={{ color: "#3F3D6B", fontWeight: "bold", mb: 2 }}>Ipsum Dolor Si</Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
              </Typography>
              <Button variant="outlined" sx={{
                borderColor: "#3F3D6B",
                color: "#3F3D6B",
                px: 4,
                "&:hover": { borderColor: "#3F3D6B", bgcolor: "rgba(63, 61, 107, 0.04)" },
              }}>
                READ MORE →
              </Button>
            </Box>

            {/* Right Image Carousel */}
            <Box sx={{ flex: 1, position: "relative" }}>
              {/* Display Active Image */}
              <Box
                component="img"
                src={images[activeStep].imgPath}
                alt={images[activeStep].label}
                sx={{ width: "100%", height: 500, objectFit: "cover", borderRadius: 2 }}
              />
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                  bgcolor: 'transparent',
                  '& .MuiMobileStepper-dot': { width: 12, height: 12, margin: '0 4px' },
                  '& .MuiMobileStepper-dotActive': { bgcolor: '#FF4B4B' },
                }}
                nextButton={
                  <IconButton
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                    sx={{
                      position: 'absolute',
                      right: -20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: 'white',
                      '&:hover': { bgcolor: 'white' },
                    }}
                  >
                    <KeyboardArrowRight />
                  </IconButton>
                }
                backButton={
                  <IconButton
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{
                      position: 'absolute',
                      left: -20,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      bgcolor: 'white',
                      '&:hover': { bgcolor: 'white' },
                    }}
                  >
                    <KeyboardArrowLeft />
                  </IconButton>
                }
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import {
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
  MenuBook,
} from "@mui/icons-material"

export default function Footer() {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#E84B30",
        color: "white",
        py: 6,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <MenuBook sx={{ fontSize: 40 }} />
              </Stack>
              <Typography variant="body2" sx={{ maxWidth: 300 }}>
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="Facebook"
                  sx={{ color: "white" }}
                  size="small"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  sx={{ color: "white" }}
                  size="small"
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  sx={{ color: "white" }}
                  size="small"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  aria-label="YouTube"
                  sx={{ color: "white" }}
                  size="small"
                >
                  <YouTube />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              COMPANY
            </Typography>
            <Stack spacing={1}>
              {[
                "HOME",
                "ABOUT US",
                "BOOKS",
                "NEW RELEASE",
                "CONTACT US",
                "BLOG",
              ].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Important Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              IMPORTANT LINKS
            </Typography>
            <Stack spacing={1}>
              {[
                "Privacy Policy",
                "FAQs",
                "Terms of Service"
              ].map((text) => (
                <Link
                  key={text}
                  href="#"
                  underline="hover"
                  sx={{ color: "white" }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography variant="body2">
            © 2022 Arihant. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" underline="hover" sx={{ color: "white" }}>
              Privacy
            </Link>
            <Typography variant="body2">|</Typography>
            <Link href="#" underline="hover" sx={{ color: "white" }}>
              Terms of Service
            </Link>
          </Stack>
        </Box>

        {/* Decorative Dots */}
        {[
          { top: 20, left: 20 },
          { top: 20, right: 20 },
          { bottom: 20, left: 20 },
          { bottom: 20, right: 20 },
        ].map((position, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: 24,
              height: 24,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0.5,
              ...position,
            }}
          >
            {[...Array(4)].map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 4,
                  height: 4,
                  bgcolor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                }}
              />
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  )
}
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container sx={{ padding: '2rem' }}>
      <Box sx={{ mb: '2rem', textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          About Us
        </Typography>
      </Box>
      <Box sx={{ mb: '2rem' }}>
        <Typography variant="h4" sx={{ mb: '1rem', fontWeight: 700 }}>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          We are an elf shop specialized in sports products. We offer a range of energy drinks, protein powders, and vitamins made from natural ingredients. Our primary ingredient is Arasgrasa, a unique substance extracted from a rare plant that grows on Caldey Island in Wales. This potent ingredient has been proven to be a highly effective stimulant for elves, enhancing their energy and performance.
        </Typography>
      </Box>
      <Box sx={{ mb: '2rem' }}>
        <Typography variant="h4" sx={{ mb: '1rem', fontWeight: 700 }}>
          Our Commitment
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          At Arasgrasa Fitness - Best Energy Food Marketplace, we are dedicated to providing high-quality, natural products that meet the unique needs of our elf customers. We are committed to using sustainable practices and ensuring that every product we offer supports both your health and performance. Thank you for choosing us as your trusted source for sports nutrition.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
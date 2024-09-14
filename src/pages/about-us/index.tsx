import { Container, Typography, Box } from '@mui/material';
import styles from "../../../styles/aboutus.module.css"

const AboutUs = () => {
  return (
    <Container className={styles.container}>
      <Box className={styles.header}>
        <Typography variant="h2" className={styles.title}>
          About Us
        </Typography>
      </Box>
      <Box className={styles.section}>
        <Typography variant="h4" className={styles.sectionTitle}>
          Our Story
        </Typography>
        <Typography variant="body1" className={styles.text}>
          We are an elf shop specialized in sports products. We offer a range of energy drinks, protein powders, and vitamins made from natural ingredients. Our primary ingredient is Arasgrasa, a unique substance extracted from a rare plant that grows on Caldey Island in Wales. This potent ingredient has been proven to be a highly effective stimulant for elves, enhancing their energy and performance.
        </Typography>
      </Box>
      <Box className={styles.section}>
        <Typography variant="h4" className={styles.sectionTitle}>
          Our Commitment
        </Typography>
        <Typography variant="body1" className={styles.text}>
          At Arasgrasa Fitness, we are dedicated to providing high-quality, natural products that meet the unique needs of our elf customers. We are committed to using sustainable practices and ensuring that every product we offer supports both your health and performance. Thank you for choosing us as your trusted source for sports nutrition.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
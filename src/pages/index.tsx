import Head from 'next/head';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import styles from '../../styles/index.module.css';

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Arasgrasa Fitness</title>
        <meta name="description" content="Our Arasgrasa Fitness shop sells products to make you a stronger and healthier elf" />
      </Head>

      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Unique fitness products for elves</h1>
          <p>Made out of natural and eco-friendly ingridients</p>
          <button className={styles.button} onClick={() => router.push('/product')}>Learn more</button>
        </div>
      </div>

      <section className={styles.mainContent}> 
      <Grid className={styles.description} container>
        <Grid item xs={12} sm={6} md={4}>
        <div className={styles.content}>
          <h2>About Us</h2>
          <p>We are an elf shop specialised in sport products. We sell energy drinks, protein powder, vitamins 
          made out of natural ingredients. Our main ingredient is Arasgrasa which is known to be extracted 
          from a plant that grows on Caldey Island in Wales. It is proved to be a very efficient
          stimulant on elves.
          </p>
          <button className={styles.button} onClick={() => router.push('/blog')}>Learn more in our Blog</button>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card>
          <a href='/blog/benefits-arasgrasa-plant' style={{ textDecoration: 'none' }} rel='canonical'>
            <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article1/image.png' />
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                The benefits of Arasgrasa
              </Typography>
              <Typography className={styles.comments} >
                "Amazing product, keeps me healthy and full of energy"
              </Typography>
              <Typography className={styles.commentAuthor} >
                - Father Elf
              </Typography>
            </CardContent>
          </a>
        </Card>
        </Grid>
      </Grid>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>Email: contact@arasgrasa.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
          <div className={styles.socialMedia}>
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className={styles.copyright}>
            <p>&copy; 2024 Arasgrasa Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </section>
    </div>
  );
};

export default Home;

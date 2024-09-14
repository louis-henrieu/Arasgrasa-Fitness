import Head from 'next/head';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/router'
import styles from '../../styles/index.module.css';


const StyledCompanyName = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))


const Home = () => {
  const router = useRouter();
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>
          <h1>Unique fitness products for elves</h1>
          <p>Made out of natural and eco-friendly ingridients</p>
          <button className={styles.button} onClick={() => router.push('/product')}>Buy Now !</button>
        </div>
      </div>

      <section> 
      <Grid className={styles.description} container>
        <Grid item xs={12} sm={6} md={4}>
        <div className={styles.content}>
          <Typography variant='h2' sx={{ marginBottom: '10px'}}>About Us</Typography>
          <Typography sx={{ color: 'text.secondary' }}>We are an elf shop specialised in sport products. We sell energy drinks, protein powder, vitamins 
          made out of natural ingredients. Our main ingredient is Arasgrasa which is known to be extracted 
          from a plant that grows on Caldey Island in Wales. It is proved to be a very efficient
          stimulant on elves.
          </Typography>
          <button className={styles.button} onClick={() => router.push('/blog')}>Learn more in our Blog</button>
        </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ marginTop: '35px'}}>
          <a href='/blog/benefits-arasgrasa-plant' style={{ textDecoration: 'none' }} rel='canonical'>
            <CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article1/image.png' />
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                The benefits of Arasgrasa
              </Typography>
              <Typography sx={{ color: 'text.secondary', display: 'flex', justifyContent: 'center' }}>
                "Amazing product, keeps me healthy and full of energy"
              </Typography>
              <Typography sx={{ color: 'text.secondary', display: 'flex', justifyContent: 'center' }}>
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
            <Typography href='mailto:contact@arasgrasa.com' target='_blank' component={StyledCompanyName}>Email: contact@arasgrasa.com </Typography>
            <br/>
            <Typography href='tel:+1234567890' target='_blank' component={StyledCompanyName}>Phone: +123 456 7890</Typography>
          </div>
          <div className={styles.socialMedia}>
            <h3>Follow Us</h3>
            <Typography href="https://facebook.com" target="_blank" component={StyledCompanyName}>Facebook</Typography>
            <Typography href="https://twitter.com" target="_blank" component={StyledCompanyName}>Twitter</Typography>
            <Typography href="https://instagram.com/arasgrasa" target="_blank" component={StyledCompanyName}>Instagram</Typography>
          </div>
        </div>
      </footer>
      </section>
    </div>
  );
};

export default Home;

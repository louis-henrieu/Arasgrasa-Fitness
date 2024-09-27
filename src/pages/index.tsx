import Grid from'@mui/material/Grid';import Card from'@mui/material/Card';import Link from'next/link';import{styled}from'@mui/material/styles';import CardMedia from'@mui/material/CardMedia';import CardContent from'@mui/material/CardContent';import Typography from'@mui/material/Typography';import{useRouter}from'next/router';import{color}from'@mui/system';const StyledCompanyName=styled(Link)(({theme})=>({fontWeight:500,textDecoration:'none',color:`${theme.palette.primary.main} !important`}));const Home=()=>{const router=useRouter();return(<div><div style={{
  height: '500px', backgroundImage: 'url(/images/home/background.webp)', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', }}><div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}/>
  <div style={{
    zIndex: 1,
    textAlign: 'center',
    color: 'white',
  }}>
    <h1>Unique fitness products for elves</h1><p>Made out of natural and eco-friendly ingridients</p>
    <button style={{
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#4DE287',
      border: 'none',
      color: '#333',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }} onClick={() => router.push('/product')}>
Buy Now!</button></div>
</div><section><Grid style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15%',
  }}container><Grid item xs={12} sm={6} md={4}><div style={{ textAlign: 'center', zIndex: 1, color: 'white' }}><Typography variant='h2' sx={{ marginBottom: '10px' }}>About Us</Typography>
        <Typography sx={{ color: 'text.secondary' }}>
          We are an elf shop specialised in sport products. We sell energy drinks, protein powder, vitamins made
          out of natural ingredients. Our main ingredient is Arasgrasa which is known to be extracted from a plant
          that grows on Caldey Island in Wales. It is proved to be a very efficient stimulant on elves.
        </Typography><button style={{
      marginTop: '20px', padding: '10px 20px', backgroundColor: '#4DE287', border: 'none', color: '#333', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s', }} onClick={() =>router.push('/blog')}>Learn more in our Blog</button>
      </div></Grid><Grid item xs={12}sm={6}md={4}><Card sx={{ marginTop: '35px' }}><a href='/blog/benefits-arasgrasa-plant'style={{ textDecoration: 'none' }}><CardMedia sx={{ height: '14.5625rem' }} image='/images/blog/article1/image.webp' /><CardContent><Typography variant='h5' sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>The benefits of Arasgrasa</Typography>
            <Typography sx={{ color: 'text.secondary', display: 'flex', justifyContent: 'center' }}>
              "Amazing product, keeps me healthy and full of energy"
            </Typography><Typography sx={{ color: 'text.secondary', display: 'flex', justifyContent: 'center' }}>-Father Elf</Typography>
          </CardContent></a></Card>
    </Grid></Grid><footer style={{
    marginTop: '40px',
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  }}><div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', color: 'white', }}><div><h3>Contact Us</h3>
        <Typography href='mailto:contact@arasgrasa.com' target='_blank' component={StyledCompanyName}>
          Email: contact@arasgrasa.com{' '}
        </Typography><br /><Typography href='tel:+1234567890'target='_blank'component={StyledCompanyName}>Phone: +1234567890</Typography>
      </div><div><h3>Follow Us</h3>
        <Typography
          href='https://facebook.com'
          target='_blank'
          component={StyledCompanyName}
          sx={{ marginRight: '10px' }}
        >
          Facebook
        </Typography><Typography
          href='https://twitter.com'
          target='_blank'
          component={StyledCompanyName}
          sx={{ marginRight: '10px' }}>Twitter</Typography>
        <Typography href='https://instagram.com/arasgrasa' target='_blank' component={StyledCompanyName}>
Instagram</Typography>
      </div></div></footer>
</section></div>);};export default Home;

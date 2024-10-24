import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Head from 'next/head'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

const StyledBox1 = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  borderRadius: '5px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.action.hover
}))

const StyledBox2 = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  borderRadius: '5px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.action.hover
}))

const StyledCompanyName = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))  

const ContactUs = () => {
  return (
    <><Head>
      <title>Contact Us - Arasgrasa Fitness</title>
      <meta name="description" content="Get in touch with Arasgrasa Fitness. If you have any questions, feel free to contact us via phone or email. Follow us on social media for updates." />
      <link rel="canonical" href="https://www.arasgrasa.fr/contact/"/>
    </Head>
    <Container sx={{ padding: '2rem' }}>
        <Box sx={{ mt: 13, textAlign: 'center' }}>
          <CustomChip rounded size='small' skin='light' color='primary' label='Question' />
          <Typography variant='h4' sx={{ my: 2 }}>
            You still have a question?
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>
            If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!
          </Typography>

          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <StyledBox1>
                <CustomAvatar skin='light' variant='rounded' sx={{ mb: 2.5, height: 38, width: 38 }}>
                  <Icon fontSize='1.75rem' icon='tabler:phone' />
                </CustomAvatar>
                <Typography
                  href="tel:+1234567890"
                  variant='h4'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ mb: 2.5, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  +123 456 7890
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>We are always happy to help!</Typography>
              </StyledBox1>
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledBox2>
                <CustomAvatar skin='light' variant='rounded' sx={{ mb: 2.5, height: 38, width: 38 }}>
                  <Icon fontSize='1.75rem' icon='tabler:mail' />
                </CustomAvatar>
                <Typography
                  href='mailto:contact@arasgrasa.com'
                  variant='h4'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ mb: 2.5, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                >
                  contact@arasgrasa.com
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Best way to get answer faster!</Typography>
              </StyledBox2>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: '2rem', borderTop: '1px solid #ddd', pt: '1rem' }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ ml: '1rem' }}>
              <Typography href="https://facebook.com" target="_blank" variant='body2' component={StyledCompanyName} sx={{ marginRight: '10px' }}>Facebook</Typography>
              <br />
              <Typography href="https://twitter.com" target="_blank" variant='body2' component={StyledCompanyName} sx={{ marginRight: '10px' }}>Twitter</Typography>
              <br />
              <Typography href="https://instagram.com/arasgrasa" variant='body2' target="_blank" component={StyledCompanyName}>Instagram</Typography>
            </Box>
          </Box>
        </Box>
      </Container></>
  );
};

export default ContactUs;

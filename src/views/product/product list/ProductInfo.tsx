// ** React Imports
import { MouseEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid, { GridProps } from '@mui/material/Grid'
import Image from 'next/image'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import ProductTypes from 'src/types/ProductTypes'
import { Rating } from '@mui/material'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const ProductInfo = ({ product }: { product: ProductTypes }) => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Card>
      <a href={product.link} rel='noreferrer' style={{ textDecoration: 'none' }}>
        <Grid container spacing={6}>
          <StyledGrid item md={5} xs={12}>
              <CardContent sx={{ display: 'flex', alignItems: 'normal', justifyContent: 'normal' }}>
              <Image width={500} height={500} style={{ width: '100%', height: 'auto' }} alt='Energy drink item' src={product.image} />
              </CardContent>
          </StyledGrid>
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              pt: ['0 !important', '0 !important', '1.5rem !important'],
              pl: ['1.5rem !important', '1.5rem !important', '0 !important']
            }}
          >
            <CardContent>
              <Typography variant='h5' sx={{ mb: 2 }}>
                {product.title}
              </Typography>
              <Typography sx={{ mb: 3.5, color: 'text.secondary' }}>{product.description.short}</Typography>
              <Typography sx={{ fontWeight: 500, mb: 3 }}>
                Price:{' '}
                <Box component='span' sx={{ fontWeight: 'bold' }}>
                  {product.price}🔔
                </Box>
              </Typography>
              <Typography sx={{ fontWeight: 500, mb: 3 }}>
                <Box component='span' sx={{ fontWeight: 'bold' }}>
                  <Rating precision={0.5} readOnly value={product.rating} />
                </Box>
              </Typography>
            </CardContent>
            <CardActions className='card-action-dense'>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <Button sx={{ '& svg': { mr: 2 } }}>
                  <Icon icon='tabler:shopping-cart-plus' fontSize={20} />
                  Add to Card
                </Button>
                <IconButton
                  id='long-button'
                  aria-label='share'
                  aria-haspopup='true'
                  onClick={handleClick}
                  aria-controls='long-menu'
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Icon icon='tabler:share' fontSize={20} />
                </IconButton>
                <Menu
                  open={open}
                  id='long-menu'
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'long-button'
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <Icon icon='tabler:brand-facebook' />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Icon icon='tabler:brand-twitter' />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Icon icon='tabler:brand-linkedin' />
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Icon icon='tabler:brand-google-drive' />
                  </MenuItem>
                </Menu>
              </Box>
            </CardActions>
          </Grid>
        </Grid>
      </a>
    </Card>
  )
}

export default ProductInfo

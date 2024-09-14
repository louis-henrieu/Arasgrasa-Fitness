// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import BookIcon from '@mui/icons-material/Book'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import InfoIcon from '@mui/icons-material/Info'
import ContactMailIcon from '@mui/icons-material/ContactMail'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import Autocomplete from 'src/layouts/components/Autocomplete'
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import { useMediaQuery, useTheme } from '@mui/material'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const shortcuts: ShortcutsType[] = [
  {
    title: 'Calendar',
    url: '/apps/calendar',
    icon: 'tabler:calendar',
    subtitle: 'Appointments'
  },
  {
    title: 'Invoice App',
    url: '/apps/invoice/list',
    icon: 'tabler:file-invoice',
    subtitle: 'Manage Accounts'
  },
  {
    title: 'User App',
    icon: 'tabler:users',
    url: '/apps/user/list',
    subtitle: 'Manage Users'
  },
  {
    url: '/apps/roles',
    icon: 'tabler:lock',
    subtitle: 'Permissions',
    title: 'Role Management'
  },
  {
    subtitle: 'CRM',
    title: 'Dashboard',
    url: '/dashboards/crm',
    icon: 'tabler:device-analytics'
  },
  {
    title: 'Settings',
    icon: 'tabler:settings',
    subtitle: 'Account Settings',
    url: '/pages/account-settings/account'
  },
  {
    icon: 'tabler:help',
    title: 'Help Center',
    url: '/pages/help-center',
    subtitle: 'FAQs & Articles'
  },
  {
    title: 'Dialogs',
    icon: 'tabler:square',
    subtitle: 'Useful Popups',
    url: '/pages/dialog-examples'
  }
]

const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  // ** Hook

  const onClickHome = () => {
    window.location.href = '/'
  }

  const onClickBlog = () => {
    window.location.href = '/blog'
  }

  const onClickProduct = () => {
    window.location.href = '/product'
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='home'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={onClickHome}
            color='inherit'
          >
            <HomeIcon />
          </IconButton>
        ) : (
          <>
            <Box sx={{ width: '1rem' }} />
            <Typography
              variant='h6'
              sx={{
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={onClickHome}
            >
              Home
            </Typography>
          </>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='products'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={onClickProduct}
            color='inherit'
          >
            <ShoppingBasketIcon />
          </IconButton>
        ) : (
          <>
            <Box sx={{ width: '2rem' }} />
            <Typography
              variant='h6'
              sx={{
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={onClickProduct}
            >
              Products
            </Typography>
          </>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='blog'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={onClickBlog}
            color='inherit'
          >
            <BookIcon />
          </IconButton>
        ) : (
          <>
            <Box sx={{ width: '2rem' }} />
            <Typography
              variant='h6'
              sx={{
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
              onClick={onClickBlog}
            >
              Blog
            </Typography>
          </>
        )}
        {/* <Box sx={{ width: '2rem' }} />
        <Typography variant='h6' sx={{ cursor: 'pointer' }}>
          Training plans
        </Typography> */}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='About us'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            <InfoIcon />
          </IconButton>
        ) : (
          <>
            <Box sx={{ width: '2rem' }} />
            <Typography
              variant='h6'
              sx={{
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              About us
            </Typography>
          </>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='contact'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={onClickHome}
            color='inherit'
          >
            <ContactMailIcon />
          </IconButton>
        ) : (
          <>
            <Box sx={{ width: '2rem' }} />
            <Typography
              variant='h6'
              sx={{
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              Contact
            </Typography>
          </>
        )}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
    </Box>
  )
}

export default AppBarContent

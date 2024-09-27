// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import LanguageDropdown from 'src/@core/layouts/components/shared-components/LanguageDropdown'
import NotificationDropdown, {
  NotificationsType
} from 'src/@core/layouts/components/shared-components/NotificationDropdown'
import ShortcutsDropdown, { ShortcutsType } from 'src/@core/layouts/components/shared-components/ShortcutsDropdown'
import Badge from '@mui/material/Badge'
import Typography from '@mui/material/Typography'
import { useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'

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

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {isMatch ? (
            <Typography variant='h6' sx={{ cursor: 'pointer' }}>
              Aras
            </Typography>
        ) : (
          <Typography variant='h4' sx={{ cursor: 'pointer' }}>
            Arasgrasa
          </Typography>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='home'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            href='/'
            color='inherit'
          >
            <Icon icon='tabler:home' />
          </IconButton>
        ) : (
          <>
            <Box sx={{ minWidth: '2rem' }} />
            <Link href='/' passHref>
              <Typography variant='h6' sx={{ cursor: 'pointer' }}>
                Home
              </Typography>
            </Link>
          </>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='products'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            href='/product'
            color='inherit'
          >
            <Icon icon='tabler:basket-plus' />
          </IconButton>
        ) : (
          <>
            <Box sx={{ minWidth: '2rem' }} />
            <Link href='/product' passHref>
              <Typography variant='h6' sx={{ cursor: 'pointer' }}>
                Products
              </Typography>
            </Link>
          </>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='blog'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            href='/blog'
            color='inherit'
          >
            <Icon icon='tabler:brand-blogger' />
          </IconButton>
        ) : (
          <>
            <Box sx={{ minWidth: '2rem' }} />
            <Link href='/blog' passHref>
              <Typography variant='h6' sx={{ cursor: 'pointer' }}>
                Blog
              </Typography>
            </Link>
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
            href='/about-us'
            color='inherit'
          >
            <Icon icon='tabler:file-info' />
          </IconButton>
        ) : (
          <>
            <Box sx={{ minWidth: '2rem' }} />
            <Link href='/about-us' passHref>
              <Typography variant='h6' sx={{ cursor: 'pointer' }}>
                About us
              </Typography>
            </Link>
          </>
        )}
        {isMatch ? (
          <IconButton
            size='large'
            aria-label='contact'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            href='/contact'
            color='inherit'

          >
            <Icon icon='tabler:mail' />
          </IconButton>
        ) : (
          <>
            <Box sx={{ minWidth: '2rem' }} />
            <Link href='/contact' passHref>
              <Typography variant='h6' sx={{ cursor: 'pointer' }}>
                Contact
              </Typography>
            </Link>
          </>
        )}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center'}}>
        <ModeToggler settings={settings} saveSettings={saveSettings} label='Toggle Dark/Light Mode' />
      </Box>
    </Box>
  )
}

export default AppBarContent

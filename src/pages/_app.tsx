// ** Next Imports
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'

// ** Store Imports
import { store } from 'src/store'
import { Provider } from 'react-redux'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import 'src/configs/i18n'
import themeConfig from 'src/configs/themeConfig'

// ** Third Party Import
import { Toaster } from 'react-hot-toast'

// ** Component Imports
import UserLayout from 'src/layouts/UserLayout'
import ThemeComponent from 'src/@core/theme/ThemeComponent'

// ** Spinner Import

// ** Contexts
import { SettingsConsumer, SettingsProvider } from 'src/@core/context/settingsContext'

// ** Styled Components
import ReactHotToast from 'src/@core/styles/libs/react-hot-toast'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** Prismjs Styles
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

import 'src/iconify-bundle/icons-bundle-react'

// ** Global css styles
import '../../styles/globals.css'

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  // Variables
  const contentHeightFixed = Component.contentHeightFixed ?? false
  const getLayout =
    Component.getLayout ?? (page => <UserLayout contentHeightFixed={contentHeightFixed}>{page}</UserLayout>)

  const setConfig = Component.setConfig ?? undefined

  const isProd = process.env.NODE_ENV === "production";

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      if (isProd) {
        if (process.env.NEXT_PUBLIC_GA_ID) {
          window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
            page_path: url,
          });
        } else {
          console.error('NEXT_PUBLIC_GA_ID is not defined');
        }
      }
    }
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [Router.events]);

  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta name="language" content="en"/>
          <meta name="theme-color" content="#f8f7fa"/>
          <meta name='title' content={`${themeConfig.templateName}`} />
          <meta
            name='description'
            content={`The official Arasgrasa Fitness - Best Energy Food Marketplace, the elf's leading energy drink for sport performance nutrition.`}
          />
          <meta name='author' content='Arasgrasa Fitness - Best Energy Food Marketplace' />
          <meta name='robots' content='index, follow' />
          <meta name='metadataBaseUri' content='https://arasgrasa.fr/' />          
          <meta name='keywords' content='arasgrasa, arasgrasa fitness, best energy food marketplace, arasgrasa burger, fitness, gym, workout, yoga, bodybuilding, health, cardio, nutrition energy drink, sport performance, sport nutrition, sport drink, vitamins' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta property="og:title" content="Arasgrasa Fitness - Best Energy Food Marketplace in the world"/>
          <meta property="og:description" content="The official Arasgrasa Fitness shop, the elf's leading energy drink for sport performance and sport nutrition with vitamins is happy to welcome you. Enjoy your workout with our eco-friendly products."/>
          <meta property="og:image" content="https://arasgrasa.fr/images/flavicon.webp"/>
          <meta property="og:url" content="https://arasgrasa.fr/"/>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-MEWLRD35LB`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MEWLRD35LB');
              `
            }}
          />
        </Head>

          <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
            <SettingsConsumer>
              {({ settings }) => {
                return (
                  <ThemeComponent settings={settings}>
                        {getLayout(<Component {...pageProps} />)}
                    <ReactHotToast> 
                      <Toaster position={settings.toastPosition} toastOptions={{ className: 'react-hot-toast' }} />
                    </ReactHotToast>
                  </ThemeComponent>
                )
              }}
            </SettingsConsumer>
          </SettingsProvider>
      </CacheProvider>
    </Provider>
  )
}

export default App

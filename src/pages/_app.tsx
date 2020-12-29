import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeContextProvider } from '../shared/context'

// Component
const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap'
        rel='stylesheet'
      />
    </Head>
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  </Fragment>
)

// Display Name
App.displayName = `App`

export default memo(App)

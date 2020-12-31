import React, { FC, Fragment, memo } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Flex } from '../../shared/components'
import { decode, decrypt } from '../../shared/utils'

// Type
type WidgetProps = {
  username: string
  encryptedToken: string
}

// Component
const Widget: FC<WidgetProps> = ({ username, encryptedToken }) => {
  const token = decrypt(decode(encryptedToken))

  return (
    <Fragment>
      <Head>
        <title>Twitch TrashFire Widget</title>
        <meta name='description' content='Twitch TrashFire' />
      </Head>
      <WidgetWrapper>
        <Flex flexDirection='column'>
          <p>Username: {username}</p>
          <p>Token: {token}</p>
        </Flex>
      </WidgetWrapper>
    </Fragment>
  )
}

// Styles
const WidgetWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`

// Display Names
Widget.displayName = `Widget`
WidgetWrapper.displayName = `WidgetWrapper`

export default memo(Widget)

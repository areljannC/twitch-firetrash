import React, { FC, Fragment, useState, useRef, useEffect, memo } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import * as tmi from 'tmi.js'
import { Flex } from '../../shared/components'
import { decode, decrypt } from '../../shared/utils'

// Types
type WidgetProps = {
  username: string
  encryptedToken: string
}

// Component
const Widget: FC<WidgetProps> = ({ username, encryptedToken }) => {
  const tmiClient = useRef(null)
  const [fireIconDimensions, setFireIconDimensions] = useState({
    width: 100,
    height: 100
  })
  const [trashIconDimensions, setTrashIconDimensions] = useState({
    width: 100,
    height: 100
  })
  const token = decrypt(decode(encryptedToken))

  useEffect((): void => {
    tmiClient.current = new tmi.Client({
      options: { debug: true },
      connection: {
        reconnect: true,
        secure: true
      },
      identity: {
        username: username,
        password: token
      },
      channels: [username]
    })
    tmiClient.current.connect()
    tmiClient.current.on('message', (channel, tags, message, self) => {
      if (self) {
        return
      }

      if (message.toLowerCase().includes('#fire')) {
        setFireIconDimensions((fid) => ({
          width: fid.width + 20,
          height: fid.height + 20
        }))
        setTrashIconDimensions((tid) => ({
          width: tid.width - 20,
          height: tid.height - 20
        }))
      }

      if (message.toLowerCase().includes('#trash')) {
        setTrashIconDimensions((tid) => ({
          width: tid.width + 20,
          height: tid.height + 20
        }))
        setFireIconDimensions((fid) => ({
          width: fid.width - 20,
          height: fid.height - 20
        }))
      }
    })
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Twitch TrashFire Widget</title>
        <meta name='description' content='Twitch TrashFire' />
      </Head>
      <WidgetWrapper>
        <Flex flexDirection='column'>
          <Image
            alt='fire icon'
            src='/assets/fire.png'
            width={`${fireIconDimensions.width}px`}
            height={`${fireIconDimensions.height}px`}
          />
          <Image
            alt='trash icon'
            src='/assets/trash.png'
            width={`${trashIconDimensions.height}px`}
            height={`${trashIconDimensions.height}px`}
          />
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

export default Widget

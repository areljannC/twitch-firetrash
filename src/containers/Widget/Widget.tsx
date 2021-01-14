import React, { FC, Fragment, useState, useRef, useEffect, memo } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import * as tmi from 'tmi.js'
import { Flex } from '../../shared/components'
import { decode, decrypt } from '../../shared/utils'

// Types
type WidgetProps = {
  username: string
  encryptedToken: string
}

// Constants
const ICON_WIDTH = 200
const ICON_HEIGHT = 200
const ICON_SCALE_CHANGE = 0.2
const ICON_ANIMATION_DURATION = 0.3
const VOTE_TALLY_TOTAL_LIMIT = 5

// Component
const Widget: FC<WidgetProps> = ({ username, encryptedToken }) => {
  const tmiClient = useRef(null)
  const [fireIconScale, setFireIconScale] = useState(1)
  const [trashIconScale, setTrashIconScale] = useState(1)
  const [animateFire, setAnimateFire] = useState(false)
  const [animateTrash, setAnimateTrash] = useState(false)
  const voteTally = useRef(
    new Map([
      ['total', 0],
      ['fire', 0],
      ['trash', 0]
    ])
  )

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
        if (voteTally.current.get('total') === VOTE_TALLY_TOTAL_LIMIT) {
          if (voteTally.current.get('trash') > 0) {
            voteTally.current.set('trash', voteTally.current.get('trash') - 1)
            voteTally.current.set('fire', voteTally.current.get('fire') + 1)
          }
        } else {
          voteTally.current.set('total', voteTally.current.get('total') + 1)
          voteTally.current.set('fire', voteTally.current.get('fire') + 1)
        }

        setFireIconScale(1 + voteTally.current.get('fire') / voteTally.current.get('total'))
        setTrashIconScale(1 - voteTally.current.get('trash') / voteTally.current.get('total'))
        setAnimateFire(true)
        setAnimateTrash(true)
        setTimeout(() => {
          setAnimateFire(false)
          setAnimateTrash(false)
        }, 500)
      }

      if (message.toLowerCase().includes('#trash')) {
        if (voteTally.current.get('total') === VOTE_TALLY_TOTAL_LIMIT) {
          if (voteTally.current.get('fire') > 0) {
            voteTally.current.set('fire', voteTally.current.get('fire') - 1)
            voteTally.current.set('trash', voteTally.current.get('trash') + 1)
          }
        } else {
          voteTally.current.set('total', voteTally.current.get('total') + 1)
          voteTally.current.set('trash', voteTally.current.get('trash') + 1)
        }

        setTrashIconScale(1 + voteTally.current.get('trash') / voteTally.current.get('total'))
        setFireIconScale(1 - voteTally.current.get('fire') / voteTally.current.get('total'))
        setAnimateTrash(true)
        setAnimateFire(true)
        setTimeout(() => {
          setAnimateTrash(false)
          setAnimateFire(false)
        }, 500)
      }

      // if (voteTally.current.get('total') % 5 === 0) {
      //   tmiClient.current.say(channel, `Total votes: ${voteTally.current.get('total')}`)
      //   tmiClient.current.say(channel, `🔥 votes: ${voteTally.current.get('fire')}`)
      //   tmiClient.current.say(channel, `💩 votes: ${voteTally.current.get('trash')}`)
      // }
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
          <motion.div
            animate={animateFire ? 'animated' : 'normal'}
            variants={{
              animated: {
                scale: fireIconScale + ICON_SCALE_CHANGE,
                transition: { duration: ICON_ANIMATION_DURATION }
              },
              normal: {
                scale: fireIconScale,
                transition: { duration: ICON_ANIMATION_DURATION }
              }
            }}
          >
            <Image alt='fire icon' src='/assets/fire.png' width={`${ICON_WIDTH}px`} height={`${ICON_HEIGHT}px`} />
          </motion.div>
          <motion.div
            animate={animateTrash ? 'animated' : 'normal'}
            variants={{
              animated: {
                scale: trashIconScale + ICON_SCALE_CHANGE,
                transition: { duration: ICON_ANIMATION_DURATION }
              },
              normal: {
                scale: trashIconScale,
                transition: { duration: ICON_ANIMATION_DURATION }
              }
            }}
          >
            <Image alt='trash icon' src='/assets/trash.png' width={`${ICON_WIDTH}px`} height={`${ICON_HEIGHT}px`} />
          </motion.div>
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

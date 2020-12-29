import React, { FC, Fragment, useState, memo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import {
  Flex,
  TextField,
  TextFieldLabel,
  TextFieldInput
} from '../../shared/components'

// Component
const Landing: FC = () => {
  const [twitchUsername, setTwitchUsername] = useState<string>('testing')
  const [twitchToken, setTwitchToken] = useState<string>('')

  const handleTwitchUsernameChange = (event) => {
    setTwitchUsername(event.target.value)
  }

  const handleTwitchTokenChange = (event) => {
    setTwitchToken(event.target.value)
  }

  return (
    <Fragment>
      <Head>
        <title>Twitch TrashFire</title>
        <meta name='description' content='Twitch TrashFire' />
      </Head>
      <LandingWrapper>
        <Flex flexDirection='column'>
          <h1>Twitch FireTrash</h1>
          <p>{twitchUsername}</p>
          <p>{twitchToken}</p>
          <TextField >
            <TextFieldLabel hasError>Twitch Username</TextFieldLabel>
            <TextFieldInput
              name='twitch_username_textfield'
              value={twitchUsername}
              onChange={handleTwitchUsernameChange}
            />
          </TextField>
          <TextField width='600px'>
            <TextFieldLabel>Twitch Token</TextFieldLabel>
            <TextFieldInput
              name='twitch_token_textfield'
              value={twitchToken}
              onChange={handleTwitchTokenChange}
            />
          </TextField>
          <Link href={`widget/${twitchUsername}/${twitchToken}`}>
            Go to extension
          </Link>
        </Flex>
      </LandingWrapper>
    </Fragment>
  )
}

// Styles
const LandingWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`

// Display Names
Landing.displayName = `Landing`
LandingWrapper.displayName = `LandingWrapper`

export default memo(Landing)

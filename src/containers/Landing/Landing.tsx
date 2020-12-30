import React, {
  FC,
  Fragment,
  useState,
  ChangeEvent,
  MouseEvent,
  memo
} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {
  Flex,
  Header,
  TextField,
  TextFieldLabel,
  TextFieldInput,
  Button
} from '../../shared/components'
import { isValidTwitchUsername } from '../../shared/utils'

// Component
const Landing: FC = () => {
  const router = useRouter()
  const [twitchUsername, setTwitchUsername] = useState<string>('')
  const [twitchToken, setTwitchToken] = useState<string>('')
  const [hasErrorTwitchUsername, setHasErrorTwitchUsername] = useState<boolean>(
    false
  )

  const handleTwitchUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value
    isValidTwitchUsername(username)
      ? setHasErrorTwitchUsername(false)
      : setHasErrorTwitchUsername(true)
    setTwitchUsername(username)
  }

  const handleTwitchTokenChange = (event: ChangeEvent<HTMLInputElement>) => {
    const token = event.target.value
    setTwitchToken(token)
  }

  const handleGoToWidgetUsernameTokenPage = () =>
    router.push(`widget/${twitchUsername}/${twitchToken}`)

  return (
    <Fragment>
      <Head>
        <title>Twitch TrashFire</title>
        <meta name='description' content='Twitch TrashFire' />
      </Head>
      <LandingWrapper>
        <Flex flexDirection='column'>
          <Header>Twitch FireTrash</Header>
          <TextField>
            <TextFieldLabel hasError={hasErrorTwitchUsername}>
              Twitch Username
            </TextFieldLabel>
            <TextFieldInput
              name='twitch_username_textfield'
              value={twitchUsername}
              onChange={handleTwitchUsernameChange}
              hasError={hasErrorTwitchUsername}
            />
          </TextField>
          <TextField>
            <TextFieldLabel>Twitch OAuth Token</TextFieldLabel>
            <TextFieldInput
              name='twitch_token_textfield'
              value={twitchToken}
              onChange={handleTwitchTokenChange}
            />
          </TextField>
          <Button
            onClick={handleGoToWidgetUsernameTokenPage}
            disabled={hasErrorTwitchUsername}
          >
            Go to extension
          </Button>
        </Flex>
      </LandingWrapper>
    </Fragment>
  )
}

// Styles
const LandingWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`

// Display Names
Landing.displayName = `Landing`
LandingWrapper.displayName = `LandingWrapper`

export default memo(Landing)

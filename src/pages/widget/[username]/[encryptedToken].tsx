import React, { FC, memo } from 'react'
import { Widget } from '../../../containers'

// Types
type WidgetUsernameToken = {
  username: string
  encryptedToken: string
}

// Server Side Props
export const getServerSideProps = async ({ params }) => {
  const username: string = params.username
  const encryptedToken: string = params.encryptedToken

  return {
    props: { username, encryptedToken }
  }
}

// Component
const WidgetUsernameToken: FC<WidgetUsernameToken> = ({
  username,
  encryptedToken
}) => <Widget username={username} encryptedToken={encryptedToken} />

// Display Names
WidgetUsernameToken.displayName = `WidgetUsernameToken`

export default memo(WidgetUsernameToken)

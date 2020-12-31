import React, { FC, memo } from 'react'
import { useRouter } from 'next/router'
import { Widget } from '../../../containers'

// Component
const WidgetUsernameToken: FC = () => {
  const router = useRouter()
  const username = router.query.username as string
  const encryptedToken = router.query.encryptedToken as string

  return (
    <Widget username={username} encryptedToken={encryptedToken} />
  )
}

// Display Names
WidgetUsernameToken.displayName = `WidgetUsernameToken`

export default memo(WidgetUsernameToken)

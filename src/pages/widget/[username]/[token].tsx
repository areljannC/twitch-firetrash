import React, { FC, memo } from 'react'
import { useRouter } from 'next/router'
import { Widget } from '../../../containers'

// Component
const WidgetUsernameToken: FC = () => {
  const router = useRouter()
  const username = router.query.username as string
  const token = router.query.token as string

  return <Widget username={username} token={token} />
}

// Display Name
WidgetUsernameToken.displayName = `WidgetUsernameToken`

export default memo(WidgetUsernameToken)

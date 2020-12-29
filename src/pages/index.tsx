import React, { FC, memo } from 'react'
import { Landing } from '../containers'

// Component
const Index: FC = () => <Landing />

// Display Name
Index.displayName = `Index`

export default memo(Index)

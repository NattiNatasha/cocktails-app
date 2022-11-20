import { ReactNode, useState, useEffect } from 'react'
import { TelegramContext } from './TelegramContext'
import { AUTH_BASE_URL } from '../utils/consts'

interface Props {
  children: ReactNode
}

export const TelegramProvider = ({ children, ...props }: Props) => {
  const [featureFlag, setFeatureFlag] = useState(false)

  useEffect(() => {
    fetch(`${AUTH_BASE_URL}/api/feature-flag`)
      .then((response) => response.json())
      .then((data) => {
        setFeatureFlag(data.isTelegramShareEnabled)
      })
  }, [])

  return (
    <TelegramContext.Provider
      value={{
        featureFlag,
      }}
      {...props}
    >
      {children}
    </TelegramContext.Provider>
  )
}

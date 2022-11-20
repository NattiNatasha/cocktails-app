import { createContext } from 'react'

interface Props {
  featureFlag: boolean
}

export const TelegramContext = createContext<Props>({
  featureFlag: false,
})

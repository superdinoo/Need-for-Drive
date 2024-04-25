import * as iconRx from 'react-icons/rx'

export interface MenuIconsProps {
  name: keyof typeof iconRx
  handleClick: () => void
}

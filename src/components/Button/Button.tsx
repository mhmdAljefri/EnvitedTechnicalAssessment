import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"
import styles from './Button.module.css'

export type Props = {
  /** button color @default 'gradient' */
  color?: 'gradient' | 'danger' | 'success'
  /** button size, @default 'sm' */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** should button rendered with full width? @default false */
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>
const Button: FC<Props> = ({ children, className, color = 'gradient', size = 'sm', fullWidth, ...props }) => {
  return (
    <button {...props} className={clsx(className, styles.root,
      {
        [styles[color]]: !!color,
        [styles[size]]: !!size,
      }
    )}>{children}</button>
  )
}

export default Button
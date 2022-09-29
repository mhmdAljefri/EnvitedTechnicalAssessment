import clsx from "clsx"
import { ComponentPropsWithoutRef, FC, ReactNode } from "react"
import Link, { LinkProps } from 'next/link'
import styles from './IconWithText.module.css'

type WrapperProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'>
export type Props = {
  icon: ReactNode
  heading: ReactNode
  text: ReactNode
  wrapperProps?: WrapperProps
  href?: LinkProps['href']
}
const IconWithText: FC<Props> = ({ icon, heading, text, href, wrapperProps }) => {
  const clickable = !!href

  return (
    <div {...wrapperProps} className={clsx(wrapperProps?.className, styles.root)}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>

      <div >
        <div className={styles.heading}>
          {heading}
        </div>
        <div className={styles.text}>
          {text}
        </div>
      </div>
      {clickable && (
        <Link href={href} passHref>
          <a className={styles.arrow}>
            <img src="/icons/Arrow.svg" alt="Arrow" />
          </a>
        </Link>
      )}
    </div>
  )
}

export default IconWithText
import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './EventLayout.module.css'

type Props = {
  imageSection?: ReactNode
  dataSection?: ReactNode
}
const EventLayout: FC<Props> = ({ imageSection, dataSection }) => {
  return (
    <div className={styles.root}>
      <div className={styles.eventWrapper}>
        <div className={styles.eventNestedWrapper}>
          {imageSection}
        </div>

        <div className={clsx(styles.eventNestedWrapper, styles.textSection)}>
          {dataSection}
        </div>
      </div>
    </div>
  )
}

export default EventLayout
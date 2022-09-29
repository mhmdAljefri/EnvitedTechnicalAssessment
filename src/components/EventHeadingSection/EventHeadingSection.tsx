import React, { FC } from 'react'
import { Event } from 'types'
import styles from './EventHeadingSection.module.css'

type Props = Pick<Event, 'hostName' | 'name'>
const EventHeadingSection: FC<Props> = ({ name, hostName }) => {
  return (
    <div>
      <h1 className={styles.heading}>{name}</h1>
      <h2 className={styles.subHeading}>Hosted by <strong>{hostName}</strong></h2>
    </div>
  )
}

export default EventHeadingSection
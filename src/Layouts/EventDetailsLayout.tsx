import clsx from 'clsx'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import EventHeadingSection from 'src/components/EventHeadingSection'
import { Event } from 'types'
import EventLayout from './EventLayout'

type Props = {
  eventData: Event
  children?: ReactNode
}
const EventDetailsLayout: FC<Props> = ({ eventData, children }) => {
  return (
    <EventLayout
      imageSection={
        <Image src={eventData.image} layout='responsive' alt={eventData.name} width={593} height={593} />
      }
      dataSection={
        <>
          <EventHeadingSection name={eventData.name} hostName={eventData.hostName} />
          {children}
        </>
      }
    />
  )
}

export default EventDetailsLayout
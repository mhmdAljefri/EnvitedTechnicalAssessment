import type { NextPage } from 'next'
import IconWithText from 'src/components/IconWithText'
import EventDetailsLayout from 'src/Layouts/EventDetailsLayout'

const Event: NextPage = () => {
  const eventData = {
    name: 'Birthday Bash',
    image: '/event-image.jpg',
    hostName: 'Elysia',
    from: new Date(),
    to: new Date(),
  }

  return (
    <EventDetailsLayout eventData={eventData}>
      <div>
        <IconWithText
          href="event-details"
          icon={<img src="/icons/Calendar.svg" />}
          heading={dateFormatter(eventData?.from)}
          text={<p>to <strong>{dateFormatter(eventData?.to)}</strong></p>}
        />
        <IconWithText
          href="event-details"
          icon={<img src="/icons/Location.svg" />}
          heading="Street name"
          text="Suburb, State, Postcode"
        />
      </div>
    </EventDetailsLayout>

  )
}

const dateFormatter = (date: Date) => Intl.DateTimeFormat('en').format(date)

export default Event

import type { NextPage } from 'next'
import EventLayout from 'src/Layouts/EventLayout'
import ImageField from 'src/components/FormInputs/ImageField'
import LabeledTextField from 'src/components/FormInputs/LabeledTextField'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import * as z from 'zod'
import { useRouter } from 'next/router'

const schema = z.object({
  name: z.string(),
  hostName: z.string(),
  from: z.string(),
  to: z.string(),
  Location: z.string(),
})

const CreateEvent: NextPage = () => {
  const { push } = useRouter()
  return (
    <Form
      schema={schema}
      onSubmit={() => Promise.resolve('create event').then(() => push('/event'))}
      render={({ values, handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit}>
          {submitError && (
            <div role="alert" className='bg-danger-light text-danger'>
              {submitError}
            </div>
          )}
          <EventLayout
            imageSection={
              <ImageField name='image' />
            }

            dataSection={
              <div className='flex gap-5 flex-col'>
                <LabeledTextField name='name' label='Event Name' />
                <LabeledTextField name='hostName' label='Host Name' />
                <LabeledTextField type='datetime-local' name='from' label='Event Start date' />
                <LabeledTextField type="datetime-local" name='to' label='Event End date' />
                <LabeledTextField name='Location' label='Event Location' />

                <Button type="submit" size='lg'>Next</Button>
              </div>
            }


          />
        </form>
      )}
    />
  )
}

export default CreateEvent;

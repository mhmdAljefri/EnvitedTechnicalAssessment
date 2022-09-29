import type { NextPage } from 'next'
import Image from 'next/image'
import Button from 'src/components/Button'
import styles from './index.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <h1 className={styles.heroTitle}>
          Imagine if
          <span className={styles.gradientText}>Snapchat</span>
          had events.
        </h1>

        <h2 className={styles.heroSubTitle}>Easily host and share events with your friends across any social media.</h2>

        <div className={styles.heroImageWrapper}>
          <Image src="/hero.png" layout='responsive' width={165.63} height={292} />
        </div>
      </div>
      <div>
        <Button size='lg' className={styles.createEventButton}>
          🎉 Create my event
        </Button>
      </div>
    </div>
  )
}

export default Home

import Head from 'next/head'
import Link from 'next/link'

import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'
import withAuth from '../utils/withAuth'

function PrivateClietn() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App | Private Client</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Private Client
        </h1>
        <Link href="/">
          <a href="">Voltar</a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export default withAuth(PrivateClietn)
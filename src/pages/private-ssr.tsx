import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Footer } from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function PrivateSSR() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App | Private SSR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Private SSR
        </h1>
        <Link href="/">
          <a href="">Voltar</a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = req.cookies

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
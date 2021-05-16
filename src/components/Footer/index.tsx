import Image from 'next/image'

import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      Powered by{' '}
      <span className={styles.logo}>
        <Image src="https://github.com/mjpancheri.png" alt="mjpancheri" width={32} height={32} />
      </span>
      {' & Rocketseat'}
    </footer>
  )
}
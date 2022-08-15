import styles from './Header.module.css'

import rocketlogo from '../assets/rocket-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketlogo} alt="Logotipo de foguete" />
      <div>
        <p className={styles.to}>to</p>
        <p className={styles.do}>do</p>
      </div>
    </header>
  )
}
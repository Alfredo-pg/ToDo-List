import styles from './App.module.css'
import { Header } from './components/Header'
import { Taks } from './components/Tasks'

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Taks />
      </div>
    </div>
  )
}

export default App

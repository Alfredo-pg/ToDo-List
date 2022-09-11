import styles from './App.module.css'
import { Header } from './components/Header'
import { TaksList } from './components/TaskList'

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TaksList />
      </div>
    </div>
  )
}

export default App

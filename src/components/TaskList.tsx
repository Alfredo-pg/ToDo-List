import { ClipboardText } from 'phosphor-react'
import { Taks } from './Task'

import styles from './TaskList.module.css'

export function TaksList() {
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.taskCreatedNumber}>
          Tarefas criadas
          <span className={styles.spanNumber}>
            0
          </span>
        </p>

        <p className={styles.taskCompletedNumber}>
          Concluídas
          <span className={styles.spanNumber}>
            0
          </span>
        </p>
      </header>

      <Taks />

      <main className={styles.tasklist}>
        <ClipboardText size={56}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </main>
    </div>
  )
}
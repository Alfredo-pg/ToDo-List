import { ClipboardText, PlusCircle } from 'phosphor-react'
import { Taks } from './Task'

import styles from './TaskList.module.css'

export function TaksList() {
  function createTask(taskText: string) {
    
  }

  return (
    <div>
      <form  className={styles.createTask}>
        <textarea
          name="text"
          placeholder='Adicione uma nova tarefa'
        />

        <button>
          Criar
          <PlusCircle size={24}/>
        </button>
      </form>

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

      <main className={styles.tasklist}>
        <ClipboardText size={56}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </main>
    </div>
  )
}
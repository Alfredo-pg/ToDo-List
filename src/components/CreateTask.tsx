import { PlusCircle } from 'phosphor-react'

import styles from './CreateTask.module.css'

export function CreateTask() {
  return (
    <div>
      <form className={styles.createTask}>
        <textarea
          name="text"
          placeholder='Adicione uma nova tarefa'
        />

        <button>
          Criar
          <PlusCircle size={24}/>
        </button>
      </form>
    </div>
  )
}
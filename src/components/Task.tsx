import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

interface TaskProps {
  content: string
}

export function Task({content}: TaskProps) {
  return(
    <div className={styles.task}>
      <div className={styles.checkBox}>
        <input id='checkboxid' type="checkbox"/>
        <label htmlFor="checkboxid"></label>
      </div>

      <div className={styles.taskBox}>
        <p>
          {content}
        </p>
      </div>

      <button className={styles.trash} title="Deletar Tarefa">
        <Trash size={20}/>
      </button>
    </div>
  )
}
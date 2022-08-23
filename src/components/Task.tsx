import { Trash } from 'phosphor-react'

import styles from './Task.module.css'

export function Taks() {
  return(
    <div className={styles.task}>
      <div className={styles.checkBox}>
        <input id='checkboxid' type="checkbox"/>
        <label htmlFor="checkboxid"></label>
      </div>

      <div className={styles.taskBox}>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
      </div>

      <button className={styles.trash} title="Deletar Tarefa">
        <Trash size={20}/>
      </button>
    </div>
  )
}
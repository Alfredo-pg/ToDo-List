import { Trash } from 'phosphor-react'
import { useState } from 'react'

import styles from './Task.module.css'

interface TaskProps {
  content: string
  isComplete: boolean
  onCompleteTask: (task: string) => void
  onDeleteTask: (task: string) => void
}

export function Task({ content, onDeleteTask, onCompleteTask, isComplete }: TaskProps) {

  function handleCompleteTask() {
    onCompleteTask(content)
  }

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return(
    <div className={styles.task}>
      <div className={styles.checkBox}>
        <input id={content} type="checkbox"/>
        <label onClick={handleCompleteTask} htmlFor={content}></label>
      </div>

      <div className={styles.taskBox}>
        <p className={isComplete === false ? '' : styles.taskTrue}>
          {content}
        </p>
      </div>

      <button onClick={handleDeleteTask} className={styles.trash} title="Deletar Tarefa">
        <Trash size={20}/>
      </button>
    </div>
  )
}
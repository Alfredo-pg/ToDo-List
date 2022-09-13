import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { EmptyList } from './EmptyList'
import { Task } from './Task'

import styles from './TaskList.module.css'

export function TaksList() {
  const [tasks, setTasks] = useState(Array<string>)

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewtTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  return (
    <div>
      <form onSubmit={handleCreateTask} className={styles.createTask}>
        <textarea
          name="text"
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewtTaskInvalid}
          required
        />

        <button>
          Criar
          <PlusCircle size={24} />
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

      {tasks.length === 0 
      ? <EmptyList />
      : tasks.map(task =>{
        return (
          <Task
            key={task}
            content={task}
          />
        )
      })}

    </div>
  )
}
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { EmptyList } from './EmptyList'
import { Task } from './Task'

import styles from './TaskList.module.css'

interface TasksList {
  content: string,
  isComplete: boolean
}

export function TaksList() {
  const [tasks, setTasks] = useState<TasksList[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      content: newTaskText,
      isComplete: false
    }

    setTasks([...tasks, newTask])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewtTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function completeTask(content: string) {
    const completedTasks = tasks.map(task => {
      if (task.content == content) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }

      return task
    })
    
    setTasks(completedTasks)
  }

  function countCompleteTasks() {
    let count = 0

    tasks.forEach(task => {
      if (task.isComplete == true) {
        count += 1
      }
    })
    return count
  }

  const countCompletedTasks = countCompleteTasks()

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeleteOne = tasks.filter(task =>{
      return task.content !== taskToDelete
    })

    setTasks(taskWithoutDeleteOne)
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
            {tasks.length}
          </span>
        </p>

        <p className={styles.taskCompletedNumber}>
          Concluídas
          <span className={styles.spanNumber}>
            {countCompletedTasks} de {tasks.length}
          </span>
        </p>
      </header>

      {tasks.length === 0 
      ? <EmptyList />
      : tasks.map(task =>{
        return (
          <Task
            key={task.content}
            content={task.content}
            isComplete={task.isComplete}
            onDeleteTask={deleteTask}
            onCompleteTask={completeTask}
          />
        )
      })}
    </div>
  )
}
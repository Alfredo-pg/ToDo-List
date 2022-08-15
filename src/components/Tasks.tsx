import styles from './Tasks.module.css'

export function Taks() {
  return(
    <form className={styles.tasks}>
      <textarea
        name="text"
        placeholder='Adicione uma nova tarefa'
      />
      
      <button>
        Criar
      </button>
    </form>
  )
}
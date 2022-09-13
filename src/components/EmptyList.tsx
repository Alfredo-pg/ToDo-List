import { ClipboardText } from 'phosphor-react'

import styles from './EmptyList.module.css'

export function EmptyList () {
  return (
    <main className={styles.tasklist}>
      <ClipboardText size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </main>
  )
}
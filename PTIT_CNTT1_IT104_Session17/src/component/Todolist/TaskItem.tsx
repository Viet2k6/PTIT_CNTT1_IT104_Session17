import styles from './Todolist.module.css'
import type { Task } from './types'

type Props = {
  task: Task
  onDelete: (task: Task) => void
}

function TaskItem({ task, onDelete }: Props) {
  return (
    <div className={styles.taskItem}>
      <div className={styles.taskLeft}>
        <input
          type="checkbox"
          checked={task.completed}
          readOnly 
        />
        <span>{task.name}</span>
      </div>
      <div className={styles.taskActions}>
        <button className={styles.taskButton}>✏️</button>
        <button className={styles.taskButton} onClick={() => onDelete(task)}>🗑️</button>
      </div>
    </div>
  )
}

export default TaskItem

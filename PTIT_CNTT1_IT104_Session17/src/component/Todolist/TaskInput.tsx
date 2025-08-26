import { useState } from 'react'
import styles from './Todolist.module.css'

type Props = {
  onAdd: (name: string) => void
  error: string
}

function TaskInput({ onAdd, error }: Props) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    onAdd(input.trim())
    setInput('')
  }

  return (
    <div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.addButton} onClick={handleSubmit}>
          Thêm
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default TaskInput

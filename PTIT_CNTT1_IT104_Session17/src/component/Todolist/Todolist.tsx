import { useState, useEffect } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import ConfirmModal from './ConfirmModal'
import type { Task } from './types'
import styles from './Todolist.module.css'

function Todolist() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState('')
  const [confirmTask, setConfirmTask] = useState<Task | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('tasks')
    if (stored) setTasks(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = (name: string) => {
    if (!name) return setError('Tên công việc không được để trống')
    if (tasks.some((t) => t.name === name))
      return setError('Tên công việc không được phép trùng')

    const newTask: Task = {
      id: Date.now(),
      name,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setError('')
  }

  const handleDelete = (task: Task) => {
    setConfirmTask(task)
  }

  const confirmDelete = () => {
    if (confirmTask) {
      setTasks(tasks.filter((t) => t.id !== confirmTask.id))
      setConfirmTask(null)
    }
  }

  return (
    <div className={styles.container}>
      <h2>Danh sách công việc</h2>
      <TaskInput onAdd={handleAdd} error={error} />
      <TaskList tasks={tasks} onDelete={handleDelete} />
      <ConfirmModal
        task={confirmTask}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmTask(null)}
      />
      <p>
        Công việc đã hoàn thành: {tasks.filter((t) => t.completed).length} / {tasks.length}
      </p>
    </div>
  )
}

export default Todolist

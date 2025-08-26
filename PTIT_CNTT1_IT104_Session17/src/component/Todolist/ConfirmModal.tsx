import styles from './Todolist.module.css'
import type { Task } from './types'

type Props = {
  task: Task | null
  onConfirm: () => void
  onCancel: () => void
}

function ConfirmModal({ task, onConfirm, onCancel }: Props) {
  if (!task) return null

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p>Bạn có xác nhận xóa công việc &lt;<strong>{task.name}</strong>&gt; không?</p>
        <button className={`${styles.modalButton} ${styles.cancelButton}`} onClick={onCancel}>Hủy</button>
        <button className={`${styles.modalButton} ${styles.confirmButton}`} onClick={onConfirm}>Đồng ý</button>
      </div>
    </div>
  )
}

export default ConfirmModal

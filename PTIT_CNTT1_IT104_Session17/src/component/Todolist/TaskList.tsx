import TaskItem from './TaskItem'
import type { Task } from './types'

type Props = {
  tasks: Task[]
  onDelete: (task: Task) => void
}

function TaskList({ tasks, onDelete }: Props) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default TaskList

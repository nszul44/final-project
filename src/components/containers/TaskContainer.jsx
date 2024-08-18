import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

import TaskView from '../views/TaskView';

function TaskContainer() {
  let { taskId } = useParams(); //get id from URL
  taskId = parseInt(taskId); //convert to integer

  //get task from state based on URL parameter
  const task = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
  );

  return <TaskView task={task}/>
}

export default TaskContainer;
import { Link } from "react-router-dom";

function TaskView({ task, employees, handleSubmit }) {
  if (!task) {
    return (
      <section>
        <h2>Task not found!</h2>
      </section>
    );
  }

  const priorities = ["Low", "Medium", "High"];
  const employeeAssigned = task.employee ? 
    <Link to={`/employees/${task.employee.id}`}>
      {task.employee.firstname + " " + task.employee.lastname}
    </Link>
    : "None";

  return (
    <div>
      <Link to="/tasks">Back to all tasks</Link>
      <section>
        <article>
          <h2>{task.description}</h2>
          <p>Priority: {task.priority ? priorities[task.priority - 1] : "Unknown"}</p>
          <p>Assigned to: {employeeAssigned}</p>
        </article>
      </section>
      <hr/>
      <Link to={`/tasks/edit/${task.id}`}><h3>Edit task information</h3></Link>
    </div>
  );
}

export default TaskView;
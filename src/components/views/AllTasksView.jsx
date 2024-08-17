import { Link } from "react-router-dom";

function AllTasksView({tasks}) {
  if (!tasks.length) {
    return (
      <div>There are no tasks.</div>
    );
  }
  return (
    <>
      <ul>
        {tasks.map((todo, idx) => (
          <div>
            <Link to={`${todo.id}`}>
          <li key={todo.id}>Task #{idx+1}: {todo.description}</li>
          </Link>
          </div>
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
    </>
  );

}

export default AllTasksView;
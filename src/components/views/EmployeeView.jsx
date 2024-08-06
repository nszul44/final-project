import { Link } from "react-router-dom";

function EmployeeView({props}){
    const {employee, allTasks} = props;
    let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
    return(
        <div>
            <h1>Employee # {employee.id}{employee.name}</h1>
            <div>Assigned Tasks:
            {assignedTasks.map( (user) => (
                <div key = {task.id}>
                <Link to={`tasks/${task.id}`}>
                <li key={user.id}>Task  {todo.name}</li>
                </Link>
                </div>
            )
            )
        }
            </div>
        </div>
    );
};
export default EmployeeView;
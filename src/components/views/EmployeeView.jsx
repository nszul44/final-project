import { Link } from "react-router-dom";

function EmployeeView({employee, employeeTask}){
    
    if(!employee){
        return(
            <section>
                <h2>Employee Not Found</h2>
            </section>
        );
    }

    return(
        <section>
            <article className="employee">
                <h1>{employee.firstname} {employee.lastname}</h1>
                <h2>Department: {employee.department}</h2>
                <h3>Employee Tasks:</h3>
                
                <ul>
                    {employeeTask.map(taskList =>(
                        <Link to={`/tasks/${taskList.id}`}>
                        <li key = {taskList.id}>{taskList.description}</li>
                        </Link>
                    ))
                    }
                </ul>
                <Link to={`/employees`}><button>Back to All Employees</button></Link>
                <Link to={`edit`}><button>Edit Employee</button></Link>
            </article>
        </section>

    );
};
export default EmployeeView;
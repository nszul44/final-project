import {Link} from "react-router-dom"

function NewEmployeeView({handleSubmit, tasks}){
    let selectTask = (
        <label> Assign Tasks:
        <select name="taskId" defaultValue="null">
            <option value = "null">None</option>
            {tasks.map(task => {
            let name = task.description;
            return <option key = {task.id} value ={task.id}>{name}</option>;
        })}
        </select>
        </label>
        
    );

    return(
        <section>
            <h2>Add a New Employee</h2>
        <form onSubmit={handleSubmit} id = "newemployeeform">
        <label>
            First Name: <input name = "employeeFirst" />
            Last Name: <input name = "employeeLast" />
            Department: <input name = "dept" />
        
        </label>
        {selectTask}
        <button>Save Employee</button>
        </form>
        <br/>
        <Link to={`/employees`}><button style={{margin: "8px"}}>Back to All Employees</button></Link>
        </section>
        
    )

}
export default NewEmployeeView;
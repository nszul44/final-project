import { Link } from "react-router-dom";

function EditEmployeeView({handleSubmit, employee, tasks}){
    if (!employee) {
        return (
          <section>
            <h2>Employee not found!</h2>
          </section>
        );
      }

      return(
        <div>
        <h3 style={{textDecoration: "underline",}}>Edit Employee information: </h3>
        <form onSubmit={handleSubmit} id="editemployeeform">
        <label>
            First Name: 
            <input name ="firstName" defaultValue={employee.firstname} required/>
        </label>
        <label>
            Last Name: 
            <input name ="lastName" defaultValue={employee.lastname} required/>
        </label>
        <label>
            Department: 
            <input name ="dept" defaultValue={employee.department} required/>
        </label>
        <br/>
            <label> Assign Task:
              <select name="taskId" defaultValue="null" required>
                <option value="null">None</option>
                {tasks.map(tsk => {
                  let name = tsk.description;
                  return <option key={tsk.id} value={tsk.id}>{name}</option>;
                })}
              </select>
            </label>
            <button>Save Employee</button>
        </form>
        <Link to={`../employees`}>Back to all employees</Link>
        </div>
      );
}

export default EditEmployeeView;
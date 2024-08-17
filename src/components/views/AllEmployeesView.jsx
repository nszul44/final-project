import { Link } from "react-router-dom";

function AllEmployeesView({employees, deleteEmployee}) {
  if (!employees.length) {
    return (
      <div>There are no employees.</div>
    );
  }
  const sortedEmployees = [...employees].sort((a, b) => a.id - b.id);
  return (
    <>
      <ul>
        {sortedEmployees.map((user) => (
          <div>
          
          <Link to={`/employees/${user.id}`}>
          <li key={user.id}>Employee ID #{user.id}: {user.firstname}</li>
          </Link>
        <Link to={`/employees`}><button onClick={() => (deleteEmployee(user.id), window.location.reload())}>Delete</button></Link>
          </div>
        ))}
      </ul>
      <Link to={`/employees/new`}><button style={{margin: "8px"}}>Add Employee</button></Link>
      <Link to={`/`}><button>Back to Home</button></Link>
    </>
  );

}

export default AllEmployeesView;
import { Link } from "react-router-dom";

function AllEmployeesView({employees}) {
  if (!employees.length) {
    return (
      <div>There are no employees.</div>
    );
  }
  return (
    <>
      <ul>
        {employees.map((user, idx) => (
          <div>
          
          <Link to={`/employees/${user.id}`}>
          <li key={user.id}>Employee #{idx+1}: {user.name}</li>
          </Link>
          </div>
        ))}
      </ul>
      <Link to={`/`}><button>Back to Home</button></Link>
    </>
  );

}

export default AllEmployeesView;
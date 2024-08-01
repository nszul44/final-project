import  AllEmployeeView  from '../views/AllEmployeesView';

function AllEmployeesContainer(){
let employees = [{id : 24567, name: "Nick"}, {id: 4848, name: "Joe"}];
    return(
        <AllEmployeeView employees={employees} />
    );
}

export default AllEmployeesContainer;
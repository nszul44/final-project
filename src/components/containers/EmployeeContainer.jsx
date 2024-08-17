import EmployeeView from "../views/EmployeeView";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../store/tasksSlice";
import { useEffect } from "react";


function EmployeeContainer(){
    let { employeeId } = useParams();
    employeeId = parseInt(employeeId);

    const employee = useSelector(state => state.employees.find(employee => employee.id === employeeId));
    console.log(employee);
    const employeeTask = useSelector(state => state.tasks.filter(employeeTask => employeeTask.employeeId === employeeId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTasks());
      }, [dispatch]);
    
    return(
        <EmployeeView 
            employee={employee}
            employeeTask={employeeTask}
        />
    );

}
export default EmployeeContainer;
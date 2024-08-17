import EditEmployeeView from "../views/EditEmployeeView";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployees, editEmployee } from "../../store/employeesSlice";
import { fetchTasks } from "../../store/tasksSlice";
import { useEffect } from "react";

function EditEmployeeContainer(){
    let { employeeId } = useParams(); //get id from url
    employeeId = parseInt(employeeId); //convert to integer

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    //get employee from task
    const employee = useSelector(state => state.employees.find(employee => employee.id === employeeId));

    //get tasks
    const tasks = useSelector((state) => state.tasks);

    const handleSubmit = (e) => {
        // Prevent server submission
        e.preventDefault();
    
        // Get data from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    
        // Create the updated employee object
        const updates = {
            ...employee,
            firstname: formJson.firstName,
            lastname: formJson.lastName, // Corrected typo
            department: formJson.dept,
            taskId: JSON.parse(formJson.taskId) // Corrected key
        };
    
        // Dispatch the update
        dispatch(editEmployee(updates));
    
        alert("Employee updated!");
    }
return <EditEmployeeView employee={employee} tasks={tasks} handleSubmit={handleSubmit}/>
}
export default EditEmployeeContainer;
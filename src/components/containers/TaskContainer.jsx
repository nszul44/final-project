import EmployeeView from "../views/TaskView";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../../store/employeesSlice";
import { useEffect } from "react";


function TaskContainer(){
    let { taskId } = useParams();
    taskId = parseInt(taskId);

    const task = useSelector(state => state.tasks.find(task => task.employeeId === taskId));
    
    const taskEmployee = useSelector(state => state.employees.filter(taskEmployee => taskEmployee.id === taskId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEmployees());
      }, [dispatch]);
    
    return(
        <EmployeeView 
            task={task}
            taskEmployee={taskEmployee}
        />
    );

}
export default TaskContainer;
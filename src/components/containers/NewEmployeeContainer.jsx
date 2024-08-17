import NewEmployeeView from "../views/NewEmployeeView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addEmployee } from "../../store/employeesSlice";
import { fetchTasks } from "../../store/tasksSlice";

function NewEmployeeContainer() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleSubmit = (e) => {
        // Prevent default form submission
        e.preventDefault();

        // Get data from form
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        // Create the new employee object
        const newEmployee = {
            firstname: formJson.employeeFirst,
            lastname: formJson.employeeLast,
            department: formJson.dept,
            taskId: JSON.parse(formJson.taskId)
        };

        // Dispatch the `addEmployee` action with the new employee data
        dispatch(addEmployee(newEmployee));

        // Reset the form
        form.reset();
    };

    return (
        <NewEmployeeView handleSubmit={handleSubmit} tasks={tasks} />
    );
}

export default NewEmployeeContainer;
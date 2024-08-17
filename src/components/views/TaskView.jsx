
function TaskView({task, taskEmployee}){

    if(!task){
        return(
            <section>
                <h2>Task Not Found</h2>
            </section>
        );
    }
        return(
            <section>
                <article className="task">
                    <h1>{task.firstname}</h1>
                    <h2>Assigned Employee:</h2>
                    <ul>
                        {taskEmployee.map(employeeList =>(
                            <li key = {employeeList.id}>{employeeList.firstname}</li>
                        ))
                        }
                    </ul>
                </article>
            </section>
    
        );

    
};
export default TaskView;
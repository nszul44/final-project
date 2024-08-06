import EmployeeView from "../views/EmployeeView";
import React, {Component} from "react"
import { connect } from "react-redux";
import { fetchTasks } from "../../store/tasksSlice";
import { fetchEmployee } from "../../store/employeeSlice";

class EmployeeContainer extends Component {
    componentDidMount(){
        this.props.fetchEmployee(this.props.match.params.id);
        this.props.fetchTasks();
    }

    render(){
        return(
            <EmployeeView
            employee={this.props.employee}
            allTasks={this.props.allTasks}
            />
        );
    }
}
    const mapState = (state) => {
        return{
            employee : state.employee,
            allTasks : state.allTasks,
        };
    };

    const mapDispatch = (dispatch) => {
        return{
        fetchEmployee: (id) =>dispatch(fetchEmployee(id)),
        fetchTasks: () =>dispatch(fetchTasks())
    };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);
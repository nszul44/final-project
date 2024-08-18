//REDUCER
const initialState = [];

export function employeesReducer(state = initialState, action) {
    switch (action.type) {
      case 'employees/employeesLoaded':
        return action.payload;
      case 'employees/employeeDeleted':
        return state.filter(employee => employee.id!==action.payload);
      case 'employees/employeeCreated':
        return [...state, action.payload];
      case 'employees/employeeUpdated':
        return state.map(employee => 
          employee.id===action.payload.id ? action.payload : employee
        );
      default:
        return state;
    }
};

//API calls go here
import axios from "axios";
//PATH (should be where your server is running)
const PATH = "http://localhost:5001/api";

//Thunk 
export const fetchEmployees = () => async (dispatch) => {
  try {
    let res = await axios.get(`${PATH}/employees`);
    dispatch({type: 'employees/employeesLoaded', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

/* add employee */
export const addEmployee = employee => async (dispatch) => {
  try {
    let res = await axios.post(`${PATH}/employees`, employee);
    dispatch({type: 'employees/employeeCreated', payload: res.data});
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

/* edit employee*/

export const editEmployee = employee => async dispatch =>{
  try{
    let res = await axios.put(`${PATH}/employees/${employee.id}`, employee);
    dispatch({type: 'employees/employeeUpdated', payload: res.data});
  } catch(err) {
    console.error(err);
  }
};

/* delete employee */

export const deleteEmployee = employeeId => async dispatch => {
  try {
    await axios.delete(`${PATH}/employees/${employeeId}`);
    dispatch({type: 'employee/employeeDeleted', payload: employeeId});
  } catch(err) {
    console.error(err);
  }
};

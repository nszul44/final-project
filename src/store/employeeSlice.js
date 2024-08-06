//reducer


    const initialState = {
        tasks: [],
    };

export function employeeReducer(state = initialState, action){
    switch(action.type){
        case 'employee/employeeLoaded':
            return action.payload;
        default:
            return state;
    }
};

import axios from "axios";

const PATH = "https://jsonplaceholder.typicode.com";

//thunk

export const fetchEmployee = (id) => async(dispatch) =>{
    try{
        let res = await axios.get(`${PATH}/users/${id}`);
        dispatch({type: 'employee/employeeLoaded', payload: res.data});
    }
    catch(err) {
        console.error(err);
      }
};
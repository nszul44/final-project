import { configureStore } from '@reduxjs/toolkit'

import { employeesReducer } from './employeesSlice'
import { tasksReducer } from './tasksSlice';
import { employeeReducer } from './employeeSlice';

const store = configureStore({
  reducer: {
    // Define a top-level state field
    employees: employeesReducer,
    tasks: tasksReducer,
    employee: employeeReducer,
  }
})

export default store;
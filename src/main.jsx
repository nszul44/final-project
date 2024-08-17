import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import AllEmployeesContainer from './components/containers/AllEmployeesContainer.jsx';
import AllTasksContainer from './components/containers/AllTasksContainer.jsx';
import EmployeeContainer from './components/containers/EmployeeContainer.jsx';
import TaskContainer from './components/containers/TaskContainer.jsx';
import NewEmployeeContainer from './components/containers/NewEmployeeContainer.jsx';
import EditEmployeeContainer from './components/containers/EditEmployeeContainer.jsx';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees",
    element: <AllEmployeesContainer />,
  },
  {
    path: "/tasks",
    element: <AllTasksContainer />,
  },
  {
    path: "/employees/new",
    element: <NewEmployeeContainer/>
  },
  {
    path: "/employees/:employeeId/edit",
    element: <EditEmployeeContainer/>
  },
  {
    path: "/employees/:employeeId",
    element: <EmployeeContainer/>
  },
  {
    path: "/tasks/:taskId",
    element: <TaskContainer/>
  },
  
]);

//Redux
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
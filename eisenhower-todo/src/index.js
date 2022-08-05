import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import PriorityTodoList from './components/PriorityTodoList';
import ScheduleTodoList from './components/ScheduleTodoList';
import DelegateTodoList from './components/DelegateTodoList';
import NotApriorityTodoList from './components/NotApriorityTodoList';
import Sidebar from './components/common/sidebar'
import LogIn from './components/common/LogIn';
import SignUp from './components/common/SignUp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Sidebar isNotSignedIn={true} />

  <Routes> 
   <Route exact path="/"  element= {<PriorityTodoList/> } />
   <Route exact path="/Priority"  element= {<PriorityTodoList/> } />
   <Route exact path= "/Schedule" element= {  <ScheduleTodoList/>} />
   <Route exact path= "/Delegate" element= {<DelegateTodoList/>} />
   <Route exact path= "/NotAPriority" element= { <NotApriorityTodoList/>} />
   <Route exact path= "/Login" element= {<LogIn/>} />
   <Route exact path= "/SignUp" element= {<SignUp/>} />
   </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React, { useState, useEffect } from 'react';
import NotApriorityForm from './NotApriorityForm';
import NotApriorityTodo from './NotApriorityTodo';

function NotApriorityTodoList() {
  const [todos, setTodos] = useState([]);
  const [todosRemaining, setTodosRemaining] = useState(0);
 
  const addTodo = todo => {
   if (!todo.text || /^\s*$/.test(todo.text)) {
       return;
     }

     const newTodos = [todo, ...todos];

     setTodos(newTodos);
   };

   useEffect(() => { setTodosRemaining(todos.filter(todo => !todo.completed).length) });


   const updateTodo = (todoId, newValue) => {
     if (!newValue.text || /^\s*$/.test(newValue.text)) {
       return;
     }

     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
   };

   const removeTodo = id => {
     const removedArr = [...todos].filter(todo => todo.id !== id);

     setTodos(removedArr);
   };

  

   const completeTodo = id => {
     let updatedTodos = todos.map(todo => {
       if (todo.id === id) {
         todo.isComplete = !todo.isComplete;
       }
       return todo;
     });
     setTodos(updatedTodos);
   };  
   
   
   return (
    
    <div className="block p-6 border-4 border-l-[18px]  border-todo-red rounded-lg shadow-lg bg-todo-grey w-[500px] h-[400px] px-10 ml-[50px] mt-[1px] ">
    
        <div className='block ml-10 grid justify-items-start'>
            <span className='text-[20x] font-semibold'>Not a Priority</span>
            <span className='text-[15px] font-bold'>Neither Urgent nor Important</span>
            <div className="text-[15px] font-bold text-todo-red">Pending tasks ({todosRemaining})</div>
            <div>
            <NotApriorityForm onSubmit={addTodo} />
            <NotApriorityTodo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            /> 

            </div>
        </div>
        
    </div>
  )
}

export default NotApriorityTodoList
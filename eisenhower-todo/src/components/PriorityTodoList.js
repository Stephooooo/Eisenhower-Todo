import React, { useState, useEffect } from 'react';
import PriorityForm from './PriorityForm';
import PriorityTodo from './PriorityTodo';

function PriorityTodoList() {
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
   };  return (
    
    <div className="block p-6 border-4 border-l-[18px]  border-todo-green rounded-lg shadow-lg bg-todo-grey w-[500px] h-[400px] px-10 ml-[50px] mt-[10px]">
    
        <div className='block ml-5 grid justify-items-start'>
            <span className='text-[20px] font-semibold'>Priority</span>
            <span className='text-[15px] font-bold'>Urgent & Important</span>
            <div className="text-[15px] font-bold text-todo-green">Pending tasks ({todosRemaining})</div>
            <div>
            <PriorityForm onSubmit={addTodo} />
            <PriorityTodo
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

export default PriorityTodoList
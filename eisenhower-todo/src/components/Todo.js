import React, {useState} from 'react';
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div className='flex place-content-between flex-row relative mt-11 ml-8'>
        <div className={todo.isComplete ? 'todo-row line-through flex justify-between text-[27px]' : 'todo-row flex justify-between text-[27px]'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}
                {todo.description}
            </div>
            <div className='flex justify-end ml-[1016px] fixed'>
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon'
                />
                <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text})}
                className='edit-icon'
                />
            </div>
        </div>
    </div>
  )) ;
}

export default Todo

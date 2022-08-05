import React, {useState} from 'react';
import PriorityForm from './PriorityForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'


function PriorityTodo({todos, completeTodo, removeTodo, updateTodo}) {
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
        return <PriorityForm edit={edit} onSubmit={submitUpdate} />;
    }

  return todos.map((todo, index) => (
    <div className='flex place-content-between flex-row relative mt-6 ml-4'>
        <div className={todo.isComplete ? 'todo-row line-through flex justify-between text-[15px]' : 'todo-row flex justify-between text-[15px]'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}
                {todo.description}
            </div>
            <div className='flex justify-end ml-[826px] fixed'>
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='delete-icon  stroke-todo-green w-10'
                />
                <TiEdit
                onClick={() => setEdit({ id: todo.id, value: todo.text})}
                className='edit-icon  stroke-todo-green w-10'
                />
            </div>
        </div>
    </div>
  )) ;
}

export default PriorityTodo

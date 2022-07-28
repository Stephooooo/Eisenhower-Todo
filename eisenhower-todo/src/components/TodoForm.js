import React, { useState, useEffect, useRef } from 'react';
import Button from './common/Button';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input w-[1080px] form-control px-3  py-1.5  text-base  font-normal  text-todo-black ml-0 mt-20  bg-white bg-clip-padding border-b roundedtransition  bg-todo-grey  ease-in-out  focus:text-todo-black focus:bg-white focus:outline-none'
          />
          <button onClick={handleSubmit} className='todo-button edit ml-4'>
            Update
          </button>
        </>
      ) : (
        <div className='flex'>
          <input
            placeholder='Create a task.....'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input w-[1080px] form-control px-3  py-1.5  text-base  font-normal  text-todo-black ml-0 mt-20  bg-white bg-clip-padding mt-8 border-b roundedtransition  bg-todo-grey  ease-in-out  focus:text-todo-black focus:bg-white focus:outline-none'
            ref={inputRef}
          />
          
          <button onClick={handleSubmit} className='todo-button ml-4'>
            Add todo
          </button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
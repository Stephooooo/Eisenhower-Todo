import React from 'react'

const Button = ({buttonStyle, onClick, text, type}) => {
  const greenButtonClassName = 'bg-transparent hover:bg-todo-green text-todo-green font-bold hover:text-todo-white w-200px text-sm p-1 h-38px border border-todo-green hover:border-transparent rounded-full '
  const blueButtonClassName = 'bg-transparent hover:bg-todo-blue text-todo-blue font-bold hover:text-todo-white w-200px text-sm p-1 h-38px border border-todo-blue hover:border-transparent rounded-full '
  const orangeButtonClassName = 'bg-transparent hover:bg-todo-orange text-todo-orange font-bold hover:text-todo-white w-200px text-sm p-1  h-38px border border-todo-orange hover:border-transparent rounded-full '
  const redButtonClassName = 'bg-transparent hover:bg-todo-red text-todo-red font-bold hover:text-todo-white w-200px text-sm p-1 h-38px border border-todo-red hover:border-transparent rounded-full '
  const otherButtonClassName= 'bg-todo-grey hover:bg-todo-white text-todo-black font-bold border border-todo-black w-200px text-sm p-1 pl-2.5 pr-2.5 h-38px hover:border-transparent rounded-full'
  return ( 
    <div> 
    <button 
    className= { 
    buttonStyle === "Priority" ?greenButtonClassName :
    buttonStyle === "Schedule" ?blueButtonClassName :
    buttonStyle === "Delegate" ? orangeButtonClassName: 
    buttonStyle === "Not a Priority" ? redButtonClassName : 
    buttonStyle === "Sign up Sign in Button" ? otherButtonClassName :
    null}
    onClick ={onClick} 
    type={type}
    > 
    {text}
    </button>
    </div>    
  )
}

  

export default Button

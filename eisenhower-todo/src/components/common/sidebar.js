import React from 'react'
import Button from './button';
import { MdNotificationImportant } from 'react-icons/md';
import { AiFillSchedule } from 'react-icons/ai';
import { RiTeamFill } from 'react-icons/ri';
import { FaThumbsDown } from 'react-icons/fa';


function Sidebar ({isSignedIn, isNotSignedIn})  {
const iconStyles = " w-80 ";

  return (
    <>
     <div className='w-60 shadow-md bg-todo-grey py-2 items-start border-b-2'>
        <h2 className='font-bold '> Eisenhower <br/> Todo </h2>
        



{isNotSignedIn && <Button 
    text= "Sign up"
      buttonStyle="Priority"
      onClick={() => console.log ("clicked")}
/>
}

    </div>

        <div className=" w-60 fixed left-0 h-full shadow-md bg-todo-grey p-20 py-4 px-1 absolute ">
  <ul className="relative">
    <li className="relative">

      <a className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-green transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
        <MdNotificationImportant className={iconStyles} />
        <span>Urgent and <br/>  important</span>
      </a>

      <a className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-green transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <AiFillSchedule className={iconStyles} />
      <span> </span>
      <span> </span>
        <span>Less urgent <br/> but important</span>
      </a>

      <a className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-green transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <RiTeamFill className={iconStyles} />
        <span>Urgent but <br/> less important</span>
      </a>

      <a className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-green transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
      <FaThumbsDown className={iconStyles} />
        <span>Neither urgent <br/> nor imortant</span>
      </a>
      
    </li>


  </ul>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  
  {isSignedIn &&
          <div className="flex shrink-0 ml-3">
          <div className='mb-2'>
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10 flex items-center" alt="Avatar" />
          </div>
          <div className=''>
          <p className=" pl-3 text-sm font-semibold text-todo-black flex items-center">Alex Maingi</p>
          <a className="text-sm "href='#' > Log out </a>
          </div>
          

        </div>
        
  }
        </div>
  
       
   
  </>
  
  )
}


export default Sidebar
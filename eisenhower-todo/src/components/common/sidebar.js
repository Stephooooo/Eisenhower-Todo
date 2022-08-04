import React from "react";
import Button from "./button";
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import { MdNotificationImportant } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { FaThumbsDown } from "react-icons/fa";

function Sidebar({ isSignedIn, isNotSignedIn }) {
  const iconStyles = " w-80 ";

  return (
    <>
      <div className="w-60 shadow-md bg-todo-grey py-2 items-start h-[700px] fixed">
        <h2 className="font-bold ml-14 ">
          {" "}
          Eisenhower <br /> Todo{" "}
        </h2>

        {isNotSignedIn && (
          <Button
            text="Sign up"
            buttonStyle="Priority"
            onClick={() => console.log("clicked")}
          />
        )}
      

       
        <Link className="flex items-center text-sm ml-14 m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-green transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark" to= "/Priority">
         <MdNotificationImportant className={iconStyles} />
         <span>Urgent and <br/>  important</span>
        </Link>

        <Link className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-blue transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark" to= "/Schedule">
        <AiFillSchedule className={iconStyles} />
         <span> Less Urgent <br/>  but important</span>
        </Link>

        <Link className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-orange transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark" to= "/Delegate">
        <RiTeamFill className={iconStyles} />
         <span>Urgent but <br/> less important</span>
        </Link>

        <Link className="flex items-center text-sm m-10 p-10 py-4 px-6 h-12 overflow-hidden text-todo-black text-ellipsis whitespace-nowrap rounded-full hover:text-todo-white hover:bg-todo-red transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark" to= "/NotAPriority">
        <FaThumbsDown className={iconStyles} />
         <span>Neither Urgent <br/> nor important</span>
        </Link>

      <br />
      <br />
      <br />
   

        {isSignedIn && (
        <div className="flex shrink-0 ml-3">
          <div className="mb-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-10 flex items-center ml-14"
              alt="Avatar"
            />
          </div>
          <div className="">
            <p className=" pl-3 text-sm font-semibold text-todo-black flex items-center ml-0">
              Alex Maingi
            </p>
            <a className="text-sm ml-3" href="#">
              {" "}
              Log out{" "}
            </a>
          </div>
        </div>
    
      )}
         
    
          </div> 
      
    </>
  );
}

export default Sidebar;

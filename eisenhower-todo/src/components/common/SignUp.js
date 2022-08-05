import React from 'react'
import { Link} from "react-router-dom";
import Sidebar from './sidebar';
const LogIn = () => {

  return (
    <div className='place-items-center m-50 grid justify-items-start mb-11 ml-20'>
      <span className='text-[30px] font-bold ml-[500px]  mt-3'>Eisenhower Todo</span>
      <div class="block p-6 rounded-lg shadow-lg bg-todo-grey1   w-[600px] h-[420px] ml-[350px] mt-2">
        <form>
          <div className="form-group mb-6 mr-11 ml-11 ">
            <label className="form-label text-[15px] font-bold mt-2 mb-5 flex justify-start text-gray-700">Set Username</label>
            <input type="text" name="username" className="form-control block  w-[400px]  px-3  py-1.5  text-base m-0 mb-8  font-normal  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  focus:text-todo-black focus:bg-white focus:outline-none" placeholder="username" />
          </div>
          <div className="form-group mb-6">
          <label className="form-label text-[15px] font-bold ml-11 mb-5 flex justify-start text-gray-700">Set Password</label>
            <input type="password" name="password" className="form-control block  w-[400px]  px-3  py-1.5  text-base  font-normal mb-8  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  ml-11 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="password" />
          </div>
          <div className="form-group mb-6">
          <label className="form-label text-[15px] font-bold ml-11 mb-5 flex justify-start text-gray-700">Confirm Password</label>
            <input type="password" name="password" className="form-control block  w-[400px]  px-3  py-1.5  text-base  font-normal  text-todo-black mb-8 bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  ml-11 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="confirm password" />
            
          </div>
          <div>
         
         
          <Link className=" bg-transparent hover:bg-todo-blue text-todo-black font-bold hover:text-todo-white w-200px text-sm p-1 h-38px border border-todo-black hover:border-todo-blue rounded-full ml-14 mt-5" href="#!" 
          to="/"> Log in </Link>
        
          </div>

        </form>
      </div> 
  </div>
 )
}

export default LogIn
import React from 'react'
import { Link} from "react-router-dom";

const LogIn = () => {

  return (
    <div className='place-items-center m-50 grid justify-items-start mb-11 ml-20'>
      <span className='text-[30px] font-bold ml-[500px]  mt-3'>Eisenhower Todo</span>
      <div class="block p-6 rounded-lg shadow-lg bg-todo-grey1   w-[600px] h-[300px] ml-[350px] mt-20">
        <form>
          <div className="form-group mb-6 mr-11 ml-11 ">
            <label className="form-label text-[15px] font-bold mt-2 mb-5 flex justify-start text-gray-700"> Username</label>
            <input type="text" name="username" className="form-control block  w-[400px]  px-3  py-1.5  text-base m-0 mb-8  font-normal  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  focus:text-todo-black focus:bg-white focus:outline-none" placeholder="username" />
          </div>
          <div className="form-group mb-6">
          <label className="form-label text-[15px] font-bold ml-11 mb-5 flex justify-start text-gray-700">Password</label>
            <input type="password" name="password" className="form-control block  w-[400px]  px-3  py-1.5  text-base  font-normal mb-8  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  ml-11 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="password" />
            <Link className=" bg-transparent hover:bg-todo-blue text-todo-black font-bold hover:text-todo-white w-200px text-sm p-1 h-38px border border-todo-black hover:border-todo-blue rounded-full ml-14 mt-5" href="#!" 
          to="/"> Log in </Link>
          </div>
        </form>
      </div> 
            <p className="text-todo-black mt-6 text-[15px] font-medium  ml-[500px]">Do you have an account? 
            <Link className=" text-todo-blue text-todo-blue focus:text-todo-blue text-[15px] transition duration-200 font-semibold ease-in-out " href="#!" to="/SignUp" > Sign Up </Link>
            </p>

           

  </div>
 )
}

export default LogIn
import React from 'react'

const LogIn = () => {

  return (
    <div className='place-items-center m-50 grid justify-items-center'>
      <span className='text-[60px] font-bold mb-16'>Eisenhower Todo</span>
      <div className="block p-6 rounded-lg shadow-lg bg-todo-grey1  w-[763px] h-[662.24px]">
        <form>
          <div className="form-group mb-6 mr-11 ml-11 ">
            <label className="form-label text-4xl font-bold mt-12 mb-10 flex justify-start text-gray-700">Username</label>
            <input type="text" name="username" className="form-control block  w-[640px]  px-3  py-1.5  text-base  font-normal  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  m-0 mb-40 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="username" />
          </div>
          <div className="form-group mb-6">
          <label className="form-label text-4xl font-bold ml-11 mb-10 flex justify-start text-gray-700">Password</label>
          <input type="password" name="password" className="form-control block  w-[640px]  px-3  py-1.5  text-base  font-normal  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  ml-11 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="password" />
          </div>
        </form>
      </div> 
            <p className="text-gray-800 mt-6 text-[32px] font-medium text-center">Do you have an account? <br /><a href="#!"
              className="text-blue-60 text-todo-blue focus:text-blue-700 text-[32px] transition duration-200 font-semibold ease-in-out">Sign Up</a>
            </p>

  </div>
 )
}

export default LogIn
import React from 'react'

const LogIn = () => {

  return (
    <div className='place-items-center m-50 grid justify-items-start mb-11 ml-20'>
      <span className='text-[60px] font-bold ml-96 mb-16'>Eisenhower Todo</span>
      <div class="block p-6 rounded-lg shadow-lg bg-todo-grey1 mb-11  w-[763px] h-[662.24px]">
        <form>
          <div className="form-group mb-6 mr-11 ml-11 ">
            <label className="form-label text-4xl font-bold mt-10 mb-10 flex justify-start text-gray-700">Username</label>
            <input type="text" name="username" className="form-control block  w-[640px]  px-3  py-1.5  text-base m-0 mb-8  font-normal  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  focus:text-todo-black focus:bg-white focus:outline-none" placeholder="username" />
          </div>
          <div className="form-group mb-6">
          <label className="form-label text-4xl font-bold ml-11 mb-10 flex justify-start text-gray-700">Password</label>
            <input type="password" name="password" className="form-control block  w-[640px]  px-3  py-1.5  text-base  font-normal mb-8  text-todo-black  bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  ml-11 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="password" />
          </div>
          <div className="form-group mb-6">
          <label className="form-label text-4xl font-bold ml-11 mb-10 flex justify-start text-gray-700">Confirm Password</label>
            <input type="password" name="password" className="form-control block  w-[640px]  px-3  py-1.5  text-base  font-normal  text-todo-black mb-8 bg-white bg-clip-padding  border-b roundedtransition  bg-todo-grey1  ease-in-out  ml-11 focus:text-todo-black focus:bg-white focus:outline-none" placeholder="confirm password" />
          </div>

        </form>
      </div> 
  </div>
 )
}

export default LogIn
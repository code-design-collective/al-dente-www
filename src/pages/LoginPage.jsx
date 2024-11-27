import React from 'react'

import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div id="login" className="flex  flex-col-2 justify-center items-center">
      <div className="flex flex-col gap-y-[2rem] bg-green-400 px-[6rem] py-[4rem] rounded-md">
        <h1 className="text-center text-[3rem]">Login</h1>
        <form className="flex flex-col gap-y-[1rem]">
          <div className="flex flex-col gap-y-[0.5rem]">
            <label htmlFor="username">Email</label>
            <input type="text" id="email" className="border" />
          </div>
          <div className="flex flex-col gap-y-[0.5rem]">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" v-model="formData.password" className="border" />
          </div>
          <button className="mt-[1rem] py-[0.75rem] border rounded-md hover:bg-green-300/40" type="submit">Submit</button>
        </form>
      </div>
      <div className="signup-link text-[0.75rem]">
        <p>Don't have an account? <Link to='/signup'>Click here to sign up!</Link></p>
      </div>
    </div>
  )
}

export default LoginPage
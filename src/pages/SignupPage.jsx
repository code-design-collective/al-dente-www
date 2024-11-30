import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { userSignup } from '@/api/auth';

const SignupPage = () => {
  const navigate = useNavigate();

  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Methods
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        setFormData({
          ...formData,
          password: '',
          confirmPassword: '',
        });
        return;
      }

      const response = await userSignup(formData);

      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });

      alert('Sign up successful. Please log in');
      navigate('/login')
      
    } catch (error) {
      alert(`Error - ${error.response.data?.email[0]}` || 'An error occurred. Unable to sign up');
      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };
  return (
    <div id="signup" className="flex justify-center items-center">
      <div className="flex flex-col gap-y-[2rem] bg-blue-400 px-[6rem] py-[4rem] rounded-md">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex-col-1">
          <div className="flex-col-05">
            <label htmlFor="email">Email</label>
            <input required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange} />
          </div>
          <div className="flex-col-05">
            <label htmlFor="password">Password</label>
            <input required
              type="password" id="password"
              name="password"
              value={formData.password}
              onChange={handleChange} />
          </div>
          <div className="flex-col-05">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input required
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange} />
          </div>
          <button className="mt-[1rem] py-[0.5rem] hover:bg-blue-100/40 border rounded-md" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
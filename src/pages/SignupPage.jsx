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

          alert(response.data.message)
          navigate('/login')
      } catch (error) {
          alert(error.response?.data?.error);
      }
  };
  return (
    <div id="signup" className="flex justify-center items-center">
      <div className="flex flex-col gap-y-[2rem] bg-blue-400 px-[6rem] py-[4rem] rounded-md">
        <h1>Sign Up</h1>
        <form className="flex-col-1">
          <div className="flex-col-05">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" />
          </div>
          <div className="flex-col-05">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" v-model="formData.password" />
          </div>
          <div className="flex-col-05">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" v-model="formData.confirmPassword" />
          </div>
          <button className="mt-[1rem] py-[0.5rem] hover:bg-blue-100/40 border rounded-md" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default SignupPage
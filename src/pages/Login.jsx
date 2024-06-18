import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { login } from '../redux/actions/authActions';

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.post('https://friendsbank.onrender.com/api/auth/login',{email, password});
      let token = response.data;
      const responseCurrent = await axios.get("https://friendsbank.onrender.com/api/auth/current", {
        headers: {
          Authorization: `Bearer ${token}`
        }

      })
      let client = responseCurrent.data;
      client.token = token;
      dispatch(login(client));
      navigate('/accounts', { replace: true });;
    } catch (error) {
      console.error('Error during login:', error);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario.
    }
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-screen h-[500px] flex justify-center gap-96'>
        <section className='w-[400px] bg-black flex justify-center items-center'><img src='/assets/login.jpeg' alt="imagen-login" /></section>
        <section className='flex flex-col gap-6 w-[300px]'>
          <img src='/assets/logo.png' className='w-[100px] h-[100px] mx-auto transition-transform duration-700 ease-in-out hover:rotate-180' alt="" />
          <div className='flex flex-col'>
            <label htmlFor="email">E-mail</label>
            <input
              placeholder='Ingrese su E-mail'
              type='text'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md text-white border border-black bg-[#4a081f] text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105 focus:border-black'
            />
          </div>
          <div className='flex flex-col font-custom'>
            <label htmlFor="password">Password</label>
            <input
              placeholder='Ingrese su Password'
              type='password'
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded-md border border-black bg-[#4a081f] text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105 focus:border-black'
            />
          </div>
          <button
            onClick={handleLogin}
            className='bg-black rounded-lg text-white py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-700'
          >
            Log in
          </button>
          <Link to="/register" className='text-white text-center bg-black rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-700'>Sign up</Link>
        </section>
      </div>
    </div>
  );
};

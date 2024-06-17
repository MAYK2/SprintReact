import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/registerActions';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Asegúrate de estar usando React Router v6

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false); // Estado para mostrar alerta

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        };

        try {
            await dispatch(registerUser(userData));
            setShowAlert(true); // Mostrar alerta de registro exitoso
            setTimeout(() => {
                setShowAlert(false); // Ocultar alerta después de 3 segundos
                navigate('/login'); // Redirigir a la página de login
            }, 3000); // 3000 milisegundos = 3 segundos
        } catch (error) {
            console.error('Error en el registro:', error.message);
            // Puedes manejar errores aquí si es necesario
        }
    };

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-screen h-[500px] flex justify-center gap-96'>
                <section className='w-[400px] bg-black flex justify-center items-center'><img src='/assets/register.jpeg' alt="" /></section>
                <section className='flex flex-col gap-6 w-[300px]'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                placeholder='Enter your First Name'
                                type='text'
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className='rounded-md border border-black bg-[#4a081f] text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105 focus:border-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                placeholder='Enter your Last Name'
                                type='text'
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className='rounded-md border border-black bg-[#4a081f] text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105 focus:border-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">E-mail</label>
                            <input
                                placeholder='Enter your E-mail'
                                type='text'
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-md border border-black bg-[#4a081f] text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105 focus:border-black'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="password">Password</label>
                            <input
                                placeholder='Enter your Password'
                                type='password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='rounded-md border border-black bg-[#4a081f] text-white shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-200 hover:scale-105 focus:border-black'
                            />
                        </div>
                        <button type="submit" className='bg-black rounded-lg text-white py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-700'>Register</button>
                    </form>
                    <Link to="/login" className='text-white text-center bg-black rounded-lg py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-700'>Login</Link>

                    {/* Mostrar alerta si showAlert es true */}
                    {showAlert && (
                        <div className="bg-green-200 border-green-500 border-l-4 text-green-700 p-4 mt-4" role="alert">
                            <p className="font-bold">Registration successful!</p>
                            <p>Your account has been created successfully.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Register;

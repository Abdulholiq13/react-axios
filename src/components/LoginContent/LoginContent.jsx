import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { NavLink } from 'react-router-dom';

const LoginContent = () => {
	return (
		<div className='container py-5'>
			<h2 className='font-jost text-4xl font-bold text-center mb-10'>Личный кабинет</h2>

			<LoginForm />

			<NavLink className='font-jost font-bold block text-center m-4 hover:opacity-60' to={'/social'}>
				Мы в социальных сетях!
			</NavLink>
		</div>
	);
};

export default LoginContent;

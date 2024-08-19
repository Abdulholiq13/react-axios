import React, { useRef, useState } from 'react';
import ButtonOrange from '../Buttons/ButtonOrange';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const text = useRef();
	const password = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = {
			email: text.current.value,
			password: password.current.value,
		};
		console.log(user);
		navigate('/admin');
	};
	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-auto'>
				<input
					className='p-[10px] pr-[100px] pl-4 rounded-full shadow-inset mb-5'
					type='email'
					ref={text}
					required
					placeholder='Email'
				/>
				<input
					className='p-[10px] pr-[100px] pl-4 rounded-full shadow-inset mb-5'
					type='password'
					ref={password}
					required
					placeholder='Пароль'
				/>

				<div className='flex flex-col mb-7'>
					<ButtonOrange title={'Сохранить'} type={'submit'} />

					<Link className='text-sm font-semibold hover:opacity-60 active:opacity-80' to={'/exit'}>
						Выход
					</Link>
				</div>
			</form>
		</>
	);
};

export default LoginForm;

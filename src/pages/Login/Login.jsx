import React, { useEffect } from 'react';
import LoginContent from '../../components/LoginContent/LoginContent';

const Login = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <LoginContent />;
};

export default Login;

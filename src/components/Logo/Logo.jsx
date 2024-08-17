import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { memo } from 'react';

const Logo = () => {
	return (
		<>
			<img src={logo} alt='Logo' />
		</>
	);
};

export default memo(Logo);

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { memo } from 'react';

const Logo = () => {
	return (
		<>
			<Link to={'/'}>
				<img src={logo} alt='Logo' />
			</Link>
		</>
	);
};

export default memo(Logo);

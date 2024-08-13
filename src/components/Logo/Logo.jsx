import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Logo = () => {
	return (
		<>
			<NavLink to={'/'} className='hover:opacity-50'>
				<img src={logo} alt='' />
			</NavLink>
		</>
	);
};

export default Logo;

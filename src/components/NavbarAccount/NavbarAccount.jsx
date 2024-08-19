import React from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NavbarAccount = () => {
	return (
		<>
			<Link to={'/login'}>
				<RiAccountCircleFill className='text-[30px]' />
			</Link>
		</>
	);
};

export default NavbarAccount;

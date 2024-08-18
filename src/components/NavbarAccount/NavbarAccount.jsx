import React from 'react';
import { RiAccountCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const NavbarAccount = () => {
	return (
		<>
			<Link to={'/account'}>
				<RiAccountCircleFill className='text-[30px]' />
			</Link>
		</>
	);
};

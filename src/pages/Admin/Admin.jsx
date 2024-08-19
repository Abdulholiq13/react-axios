import React from 'react';
import { NavLink } from 'react-router-dom';

const Admin = () => {
	return (
		<div className=''>
			<div className='header w-full bg-blue-400 py-8 px-3'>
				<NavLink to={'/admin'}>Admin</NavLink>
			</div>

			<div className='absolute left-0 px-14 bg-slate-900 text-white py-3 h-screen'>SideBar</div>
		</div>
	);
};

export default Admin;

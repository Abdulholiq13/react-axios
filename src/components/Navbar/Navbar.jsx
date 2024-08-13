import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const navbarLink = ['', '', '', ''];
	return (
		<>
			<ul className='flex gap-7 text-[#000000]'>
				<li className='hover:opacity-50'>
					<NavLink to={'/catalog'}>Каталог</NavLink>
				</li>
				<li className='hover:opacity-50'>
					<NavLink to={'/delivery'}>Доставка</NavLink>
				</li>
				<li className='hover:opacity-50'>
					<NavLink to={'/services'}>Условия</NavLink>
				</li>
				<li className='hover:opacity-50'>
					<NavLink to={'/contact'}>Контакты</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Navbar;

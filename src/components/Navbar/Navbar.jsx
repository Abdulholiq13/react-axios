const Navbar = () => {
	return (
		<>
			<ul className='flex gap-7 text-[#000000]'>
				<li>
					<a href='/catalog'>Каталог</a>
				</li>
				<li>
					<a href='#'>Доставка</a>
				</li>
				<li>
					<a href='#'>Условия</a>
				</li>
				<li>
					<a href='#'>Контакты</a>
				</li>
			</ul>
		</>
	);
};

export default Navbar;

const HeaderContact = () => {
	return (
		<>
			<span className='flex flex-col items-end gap-1'>
				<span className='flex items-center gap-4'>
					<a href='tel:+ 375 736 463 64 72'>+ 375 736 463 64 72</a>
					<span className='text-[#DCDCDC]'>/</span>
					<a href='tel:+ 375 736 463 64 72'> + 375 736 463 64 72</a>
				</span>
				<small className='font-extralight'>Заказать звонок</small>
			</span>
		</>
	);
};

export default HeaderContact;

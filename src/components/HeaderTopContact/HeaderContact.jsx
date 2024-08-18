import { memo } from 'react';
import { NavbarAccount } from '../NavbarAccount/NavbarAccount';

const HeaderContact = () => {
	return (
		<>
			<div className='flex items-center gap-10'>
				<span className='flex flex-col items-end gap-1'>
					<span className='flex items-center gap-4'>
						<a href='tel:+ 375 736 463 64 72'>+ 375 736 463 64 72</a>
						<span className='text-[#DCDCDC]'>/</span>
						<a href='tel:+ 375 736 463 64 72'> + 375 736 463 64 72</a>
					</span>
					<small className='font-extralight'>Заказать звонок</small>
				</span>

				<NavbarAccount />
			</div>
		</>
	);
};

export default memo(HeaderContact);

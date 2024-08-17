import Navbar from '../Navbar/Navbar';
import HeaderLogo from '../Logo/Logo';
import HeaderContact from '../HeaderTopContact/HeaderContact';
import { memo } from 'react';

const HeaderTop = () => {
	return (
		<header className='bg-[#F8F8F8]'>
			<div className='container flex items-center justify-between pt-[28px] pb-[27px]'>
				<HeaderLogo />
				<Navbar />
				<HeaderContact />
			</div>
		</header>
	);
};

export default memo(HeaderTop);

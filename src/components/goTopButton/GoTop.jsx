import React, { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa6';

const GoTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
		};

		window.addEventListener('scroll', handleScrollButtonVisibility);

		return () => {
			window.removeEventListener('scroll', handleScrollButtonVisibility);
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<>
			{showButton && (
				<button
					onClick={handleScrollToTop}
					className='p-3 bg-[#FF9900] fixed rounded-[50px] bottom-[30px] right-[30px]'
				>
					<FaAngleUp className='text-sm text-white' />
				</button>
			)}
		</>
	);
};

export default GoTop;

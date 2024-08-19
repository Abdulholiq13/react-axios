import { memo } from 'react';

const ButtonOrange = ({ title, type }) => {
	return (
		<>
			<button
				type={type}
				className='text-[18px] mb-[22px] text-white leading-8 px-[97px] bg-[#FF9900] py-[11px] rounded-full'
			>
				{title}
			</button>
		</>
	);
};

export default memo(ButtonOrange);

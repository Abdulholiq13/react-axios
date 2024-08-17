import { memo } from 'react';

const ButtonGray = (props) => {
	return (
		<>
			<button className='text-[18px] text-[#FF9900] shadow-inset px-[97px] py-[11px] rounded-full'>
				{props.title}
			</button>
		</>
	);
};

export default memo(ButtonGray);

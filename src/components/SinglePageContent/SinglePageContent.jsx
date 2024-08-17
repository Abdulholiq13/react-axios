import React, { memo } from 'react';
import ButtonAddCart from '../../components/Buttons/ButtonAddCart';
import { FaMinus, FaPlus } from 'react-icons/fa';

const SinglePageContent = ({ product }) => {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h2 className='text-lg font-semibold leading-8'>{product?.title}</h2>
			<p className='line-clamp-2 text-[#7D7D7D] text-lg'>{product?.description}</p>
			<div className='flex gap-4 mb-4'>
				<p className='inline-block text-[30px] mr-10'>{product?.price} Br</p>

				<div className='transition-all ease-in-out duration-150 flex gap-4 items-center'>
					<button
						className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'
						onClick={(prev) => setCount(count <= 0 ? count : count - 1)}
					>
						<FaMinus className='text-xs text-[#7D7D7D]' />
					</button>
					<p className='inline-block w-5 text-center'>{count}</p>
					<button
						className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'
						onClick={(prev) => setCount(count + 1)}
					>
						<FaPlus className='text-xs text-[#7D7D7D]' />
					</button>
				</div>
			</div>
			<ButtonAddCart />

			<p className='text-lg text-[#7D7D7D] mt-5'>{product?.description}</p>
		</div>
	);
};

export default memo(SinglePageContent);

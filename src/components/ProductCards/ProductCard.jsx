import { TbShoppingCartPlus } from 'react-icons/tb';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { memo } from 'react';

const ProductCard = ({ products }) => {
	const productStock = products?.map((stockProduct) => {
		return (
			<div
				key={stockProduct.id}
				className='relative group cursor-pointer hover:shadow-inset overflow-hidden rounded-[30px] pt-5 px-[27px] pb-[27px] flex flex-col justify-center'
			>
				<div>
					<Link to={`/product/${stockProduct.id}`}>
						<img
							className='mx-auto object-contain w-[289px] h-[291px]'
							src={stockProduct.images[0]}
							alt={stockProduct.title}
						/>
					</Link>
				</div>
				<p className='text-red-500 font-semibold'>12%</p>
				<h3 className='text-left inline-block uppercase text-base mb-3 line-clamp-1'>
					{stockProduct.title}
				</h3>
				<p className='text-base line-clamp-2'>{stockProduct.description}</p>
				<small className='text-black text-base font-bold mt-3 mb-9'>
					<span className='text-2xl'>
						{Math.floor(stockProduct.price) <= 0
							? 'Free'
							: Math.floor(stockProduct.price)
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' Br'}
					</span>
				</small>
				<div className='absolute -bottom-[27px] left-[27px] group-hover:bottom-[27px] transition-all ease-in-out duration-150 flex gap-4 items-center'>
					<button className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'>
						<FaMinus className='text-xs text-[#7D7D7D]' />
					</button>
					<p className='inline-block w-5 text-center'>{0}</p>
					<button className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'>
						<FaPlus className='text-xs text-[#7D7D7D]' />
					</button>
				</div>
				<button className='absolute group-hover:right-[27px] transition-all ease-in-out duration-150 -right-[127px] bottom-[27px] bg-[#FF9900] py-[6px] px-[6px] rounded-full'>
					<TbShoppingCartPlus className='text-3xl text-white' />
				</button>
			</div>
		);
	});

	return <div className='grid grid-cols-4 gap-6 mb-8'>{productStock}</div>;
};

export default memo(ProductCard);

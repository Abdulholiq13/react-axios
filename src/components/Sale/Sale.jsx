import { useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import SaleSkeleton from '../Skeleton/SaleSkeleton';

const endpoint = 'https://dummyjson.com';

const Sale = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const discountRate = 0.12;

	useEffect(() => {
		setLoading(true);
		axios
			.get(`${endpoint}/products`)
			.then((res) => {
				setProducts(res.data.products);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	const productCard = products?.slice(10, 14).map((product) => {
		const discountedPrice = Math.floor(product.price * (1 - discountRate));

		return (
			<div
				key={product.id}
				className='relative group cursor-pointer hover:shadow-inset overflow-hidden rounded-[30px] pt-5 px-[27px] pb-3 flex flex-col justify-center'
			>
				<div>
					<img className='mx-auto object-contain w-[289px] h-[291px]' src={product.images[0]} alt='' />
				</div>
				<p className='text-[#FF3232] font-semibold text-lg '>12%</p>
				<h3 className='text-left inline-block '>{product.title}</h3>
				<small className='line-through text-[#7D7D7D] text-xs'>{Math.floor(product.price)} Br</small>
				<p className='text-2xl font-semibold mb-[36px]'>{discountedPrice} Br</p>

				<div>
					<button className='absolute group-hover:bottom-[20px] transition-all ease-in-out duration-150 left-[27px] -bottom-[120px] flex items-center justify-start gap-6 px-3 py-[5px] w-[92px] shadow-inset rounded-full'>
						<span className='text-sm'>1 шт.</span>
						<FaChevronDown className='text-xs' />
					</button>

					<button className='absolute group-hover:right-[27px] transition-all ease-in-out duration-150 -right-[127px] bottom-[27px] bg-[#FF9900] py-[6px] px-[6px] rounded-full'>
						<TbShoppingCartPlus className='text-3xl text-white' />
					</button>
				</div>
			</div>
		);
	});

	return (
		<div className='container'>
			<div className='flex items-end justify-start gap-5 mb-[35px]'>
				<h2 className='font-jost text-4xl leading-8 font-bold'>
					Скидки <span className='text-[#FF3232] font-normal'>%</span>
				</h2>
				<span className='flex items-center gap-3 text-lg'>
					Все товары в категории <FaArrowRightLong className='text-base' />
				</span>
			</div>

			<div className='grid grid-cols-4 gap-6'>{loading ? <SaleSkeleton cards={4} /> : productCard}</div>
		</div>
	);
};

export default Sale;

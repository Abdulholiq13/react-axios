import { useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import axios from 'axios';

const endpoint = 'https://dummyjson.com';

const Sale = () => {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${endpoint}/products`)
			.then((res) => {
				setProducts(res.data.products);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	const productCard = products?.slice(10, 14).map((product) => (
		<div
			key={product.id}
			className='shadow-inset rounded-[30px] pt-5 px-3 pb-3 flex flex-col items-center justify-center'
		>
			<div>
				<img className='mx-auto object-contain w-[289px] h-[291px]' src={product.images[0]} alt='' />
			</div>
			<p>12%</p>
			<h3 className='text-center inline-block '>{product.title}</h3>
		</div>
	));

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

			<div className='grid grid-cols-4 gap-6'>{productCard}</div>
		</div>
	);
};

export default Sale;

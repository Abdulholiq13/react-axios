import { useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import axios from 'axios';
import CardSkeleton from '../Skeleton/CardSkeleton';

const endpoint = 'https://dummyjson.com';

const PopularCategory = () => {
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

	const productItem = products?.slice(0, 10).map((product) => (
		<div
			key={product.id}
			className='shadow-inset rounded-[30px] pt-5 px-3 pb-3 flex flex-col items-center justify-center'
		>
			<div>
				<img className='mx-auto object-contain w-[105px] h-[129px]' src={product.images[0]} alt='' />
			</div>
			<h3 className='text-center inline-block '>{product.title}</h3>
		</div>
	));

	return (
		<div className='container'>
			<div className='flex items-end justify-start gap-5 mb-[42px]'>
				<h2 className='font-jost text-4xl leading-8 font-bold'>Популярные категории</h2>
				<span className='flex items-center gap-3 text-lg'>
					Все категории <FaArrowRightLong className='text-base' />
				</span>
			</div>

			<div className='grid grid-cols-5 gap-6'>
				{loading && <CardSkeleton cards={10} />}
				{productItem}
			</div>
		</div>
	);
};

export default PopularCategory;

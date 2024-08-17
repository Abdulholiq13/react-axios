import { useState, useEffect, memo } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import axios from '../../api';
import CardSkeleton from '../Skeleton/CardSkeleton';
import ProductCard from '../ProductCards/ProductCard';

const PopularCategory = () => {
	const [products, setProducts] = useState(null);
	const [loading, setLoading] = useState(true);

	const limit = 4;

	useEffect(() => {
		axios
			.get(`/products`, {
				params: {
					limit: limit * 1,
				},
			})
			.then((res) => {
				setProducts(res.data.products);
				setLoading(false);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='container pb-[60px]'>
			<div className='flex items-end justify-start gap-5 mb-[42px]'>
				<h2 className='font-jost text-4xl leading-8 font-bold'>Популярные категории</h2>
				<span className='flex items-center gap-3 text-lg'>
					Все категории <FaArrowRightLong className='text-base' />
				</span>
			</div>

			<div className='grid grid-cols-5 gap-6'>{loading && <CardSkeleton cards={10} />}</div>
			<ProductCard products={products} />
		</div>
	);
};

export default memo(PopularCategory);

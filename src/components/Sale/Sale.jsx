import { useState, useEffect, memo } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import axios from '../../api';
import SaleSkeleton from '../Skeleton/SaleSkeleton';
import ProductCard from '../ProductCards/ProductCard';

const Sale = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);

	const limit = 4;

	useEffect(() => {
		setLoading(true);
		axios
			.get(`/products/category/smartphones`, {
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
		<div className='container mb-[60px]'>
			<div className='flex items-end justify-start gap-5 mb-[35px]'>
				<h2 className='font-jost text-4xl leading-8 font-bold'>
					Скидки <span className='text-[#FF3232] font-normal'>%</span>
				</h2>
				<span className='group flex items-center gap-3 text-lg cursor-pointer hover:opacity-70'>
					Все товары в категории
					<FaArrowRightLong className='group-hover:ml-[40px] transition-all ease-in-out duration-150 text-base' />
				</span>
			</div>

			<div>
				<div className='grid grid-cols-4 gap-6'>{loading && <SaleSkeleton cards={4} />}</div>
				<ProductCard products={products} salePrice={0.12} />
			</div>
		</div>
	);
};

export default memo(Sale);

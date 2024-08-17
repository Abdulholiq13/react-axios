import { useState, useEffect, memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import axios from '../../api';
import StockSkeleton from '../Skeleton/StockSkeleton';
import ProductCard from '../ProductCards/ProductCard';

const ProductStock = () => {
	const [loading, setLoading] = useState(false);
	const [categories, setCategories] = useState([]);
	const [selectCategory, setSelectCategory] = useState('all');
	const [hideTotal, setHideTotal] = useState(0);
	const [products, setProducts] = useState([]);
	const [total, setTotal] = useState(1);

	const limit = 4;

	useEffect(() => {
		axios
			.get(`/products/category-list`)
			.then((res) => setCategories(res.data))
			.catch((err) => console.error('Error fetching categories:', err));
	}, []);

	useEffect(() => {
		setLoading(true);
		const categoryPath = selectCategory === 'all' ? '' : `/category/${selectCategory}`;
		const url = `/products${categoryPath}`;
		console.log('Fetching URL:', url);

		axios
			.get(url, {
				params: {
					limit: limit * total,
				},
			})
			.then((res) => {
				if (res.data.products) {
					setHideTotal(res.data.total);
					setProducts(res.data.products);
				} else {
					console.error('Unexpected API response format:', res.data);
				}
			})
			.catch((err) => console.error('Error fetching products:', err))
			.finally(() => setLoading(false));
	}, [total, selectCategory]);

	const handleCategorySelect = (category) => {
		setSelectCategory(category);
		setTotal(1);
	};

	return (
		<div className='container py-4'>
			<div className='flex items-end justify-start gap-[20px] mb-8'>
				<h2 className='font-jost text-[36px] font-bold leading-8'>Товары в наличии</h2>
				<span className='flex items-center gap-3 text-lg cursor-pointer hover:opacity-70'>
					Все товары в категории <FaArrowRight className='text-base' />
				</span>
			</div>

			<div className='flex overflow-x-scroll gap-4 ml-auto mb-6'>
				{['all', ...categories].map((category) => (
					<button
						key={category}
						className={`py-2 px-4 rounded-md capitalize text-nowrap ${
							selectCategory === category
								? 'bg-[#FF9900] text-white'
								: 'bg-white text-black border border-black'
						}`}
						onClick={() => handleCategorySelect(category)}
					>
						{category === 'all' ? 'All' : category.replace('/category/', '').replace('-', ' ')}
					</button>
				))}
			</div>

			<div>
				<ProductCard products={products} />
				<div className='grid grid-cols-4 gap-6 mb-8'>{loading && <StockSkeleton cards={4} />}</div>
			</div>
			{limit * total <= hideTotal && (
				<button
					onClick={() => setTotal((p) => p + 1)}
					className='bg-[#FF9900] text-white px-8 py-4 rounded-md font-jost capitalize block mx-auto mb-6'
				>
					See more
				</button>
			)}
		</div>
	);
};

export default memo(ProductStock);

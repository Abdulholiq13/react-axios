import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { FaPlus, FaMinus } from 'react-icons/fa';
import axios from 'axios';
import StockSkeleton from '../Skeleton/StockSkeleton';

const ProductStock = () => {
	const endpoint = 'https://dummyjson.com';

	const [loading, setLoading] = useState(false);
	const [categories, setCategories] = useState([]);
	const [selectCategory, setSelectCategory] = useState('all');
	const [hideTotal, setHideTotal] = useState(0);
	const [products, setProducts] = useState([]);
	const [total, setTotal] = useState(1);

	const limit = 4;

	useEffect(() => {
		axios
			.get(`${endpoint}/products/category-list`)
			.then((res) => setCategories(res.data))
			.catch((err) => console.error('Error fetching categories:', err));
	}, []);

	useEffect(() => {
		setLoading(true);
		const categoryPath = selectCategory === 'all' ? '' : `/category/${selectCategory}`;
		const url = `${endpoint}/products${categoryPath}`;
		console.log('Fetching URL:', url);

		axios
			.get(url, {
				params: {
					limit: limit * total,
				},
			})
			.then((res) => {
				if (res.data.products) {
					const updatedProducts = res.data.products.map((product) => ({
						...product,
						count: 0,
					}));
					setHideTotal(res.data.total);
					setProducts(updatedProducts);
				} else {
					console.error('Unexpected API response format:', res.data);
				}
			})
			.catch((err) => console.error('Error fetching products:', err))
			.finally(() => setLoading(false));
	}, [total, selectCategory]);

	const handlePlus = (id) => {
		setProducts(
			products.map((product) => (product.id === id ? { ...product, count: product.count + 1 } : product))
		);
	};

	const handleMinus = (id) => {
		setProducts(
			products.map((product) =>
				product.id === id && product.count > 0 ? { ...product, count: product.count - 1 } : product
			)
		);
	};

	const handleCategorySelect = (category) => {
		setSelectCategory(category);
		setTotal(1); // Reset to the first page of products
	};

	const productStock = products.map((stockProduct) => {
		return (
			<div
				key={stockProduct.id}
				className='relative group cursor-pointer hover:shadow-inset overflow-hidden rounded-[30px] pt-5 px-[27px] pb-[27px] flex flex-col justify-center'
			>
				<div>
					<img
						className='mx-auto object-contain w-[289px] h-[291px]'
						src={stockProduct.images[0]}
						alt={stockProduct.title}
					/>
				</div>
				<h3 className='text-left inline-block uppercase text-sm mb-3 line-clamp-1'>
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
					<button
						className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'
						onClick={() => handleMinus(stockProduct.id)}
					>
						<FaMinus className='text-xs text-[#7D7D7D]' />
					</button>
					<p className='inline-block w-5 text-center'>{stockProduct.count}</p>
					<button
						className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'
						onClick={() => handlePlus(stockProduct.id)}
					>
						<FaPlus className='text-xs text-[#7D7D7D]' />
					</button>
				</div>
				<button className='absolute group-hover:right-[27px] transition-all ease-in-out duration-150 -right-[127px] bottom-[27px] bg-[#FF9900] py-[6px] px-[6px] rounded-full'>
					<TbShoppingCartPlus className='text-3xl text-white' />
				</button>
			</div>
		);
	});

	return (
		<div className='container py-4'>
			<div className='flex items-end justify-start gap-[20px] mb-8'>
				<h2 className='font-jost text-[36px] font-bold leading-8'>Товары в наличии</h2>
				<span className='flex items-center gap-3 text-lg cursor-pointer hover:opacity-70'>
					Все товары в категории <FaArrowRight className='text-base' />
				</span>
			</div>

			<div className='flex flex-wrap gap-4 ml-auto mb-6'>
				{['all', ...categories].map((category) => (
					<button
						key={category}
						className={`py-2 px-4 rounded-md ${
							selectCategory === category
								? 'bg-[#FF9900] text-white'
								: 'bg-white text-black border border-black'
						}`}
						onClick={() => handleCategorySelect(category)}
					>
						{category === 'all' ? 'All' : category.replace('/category/', '')}
					</button>
				))}
			</div>

			<div className='grid grid-cols-4 gap-6 mb-8'>
				{productStock}
				{loading && <StockSkeleton cards={4} />}
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

export default ProductStock;

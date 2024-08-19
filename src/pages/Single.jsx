import axios from '../api';
import { memo, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ProductCardThumb from '../components/ProductCardThumb/ProductCardThumb';
import SinglePageContent from '../components/SinglePageContent/SinglePageContent';
import TextSkeleton from '../components/Skeleton/TextSkeleton';
import SingleImgSkeleton from '../components/Skeleton/SingleImgSkeleton';
import SingleBigSkeleton from '../components/Skeleton/SingleBigSkeleton';
import ProductCard from '../components/ProductCards/ProductCard';
import StockSkeleton from '../components/Skeleton/StockSkeleton';
import GoTop from '../components/GoTopButton/goTop';

const Single = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	useEffect(() => {
		axios
			.get(`/products/category/${product?.category}`, { params: { limit: 4 } })
			.then((res) => setProducts(res.data.products))
			.catch((err) => console.log(err));
	}, [products]);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`/products/${id}`)
			.then((res) => (setProduct(res.data), setLoading(false)))
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<>
			<div className='container'>
				<div className='container grid grid-cols-2 py-8 gap-10'>
					<div className='flex flex-col'>
						{loading ? (
							<SingleBigSkeleton />
						) : (
							<img
								className='mx-auto mb-4 w-[500px] h-[500px]'
								src={product?.images[0]}
								alt={product?.title}
							/>
						)}

						<div className=''>
							{loading ? <SingleImgSkeleton count={4} /> : <ProductCardThumb product={product} />}
						</div>
					</div>

					<div className='flex flex-col'>
						{loading && <TextSkeleton count={2} />}
						<SinglePageContent product={product} />
					</div>
				</div>

				<div className='mt-5 mb-5'>
					<h2 className='font-jost text-4xl font-bold mb-8'>С этим товаром также заказывают</h2>
					<div className='flex items-center justify-between gap-16'>
						{loading ? <StockSkeleton cards={4} /> : <ProductCard products={products} />}
					</div>
				</div>
			</div>

			<GoTop />
		</>
	);
};

export default memo(Single);

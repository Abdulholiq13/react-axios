import axios from '../api';
import { memo, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ProductCardThumb from '../components/ProductCardThumb/ProductCardThumb';
import SinglePageContent from '../components/SinglePageContent/SinglePageContent';
import TextSkeleton from '../components/Skeleton/TextSkeleton';
import SingleImgSkeleton from '../components/Skeleton/SingleImgSkeleton';
import SingleBigSkeleton from '../components/Skeleton/SingleBigSkeleton';

const Single = () => {
	const [product, setProduct] = useState(null);
	const { id } = useParams();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`/products/${id}`)
			.then((res) => (setProduct(res.data), setLoading(false)))
			.catch((err) => console.error(err));
	}, [id]);
	return (
		<div className='container grid grid-cols-2 py-8'>
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
	);
};

export default memo(Single);

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import ButtonAddCart from '../components/Buttons/ButtonAddCart';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Single = () => {
	const endpoint = 'https://dummyjson.com';

	const [product, setProduct] = useState(null);
	const [count, setCount] = useState(0);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`${endpoint}/products/${id}`)
			.then((res) => setProduct(res.data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className='container grid grid-cols-2 py-8'>
			<div>
				<img src={product?.images[0]} alt='' />
			</div>
			<div>
				<h2 className=''>{product?.title}</h2>
				<p className='line-clamp-2'>{product?.description}</p>
				<div className='flex gap-4'>
					<p className='inline-block'>{product?.price} Br</p>

					<div className='transition-all ease-in-out duration-150 flex gap-4 items-center'>
						<button
							className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'
							onClick={(prev) => setCount(count <= 0 ? count : count - 1)}
						>
							<FaMinus className='text-xs text-[#7D7D7D]' />
						</button>
						<p className='inline-block w-5 text-center'>{count}</p>
						<button
							className='border-[2px] border-[#7D7D7D] p-[4px] rounded-md'
							onClick={(prev) => setCount(count + 1)}
						>
							<FaPlus className='text-xs text-[#7D7D7D]' />
						</button>
					</div>
				</div>
				<ButtonAddCart />
			</div>
		</div>
	);
};

export default Single;

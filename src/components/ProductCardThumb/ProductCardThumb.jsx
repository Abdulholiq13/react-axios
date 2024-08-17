import React, { memo } from 'react';

const ProductCardThumb = ({ product }) => {
	return (
		<div className=''>
			{product?.images.map((img, idx) => (
				<img key={idx} src={img} alt={product.title} width={150} height={150} />
			))}
		</div>
	);
};

export default memo(ProductCardThumb);

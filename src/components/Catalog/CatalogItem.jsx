import React, { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CatalogItem = ({ image, title, texts, more }) => {
	return (
		<div className='flex flex-col justify-start items-center'>
			<img className='mb-[19px]' src={image} alt={title} width={302} height={179} />
			<div className='w-[248px]'>
				<h3 className='text-lg font-bold mb-4'>{title}</h3>
				<div className='flex flex-col items-start justify-center gap-4 text-lg cursor-pointer'>
					{texts.map((text) => text)}
					<span className='group flex items-center gap-3'>
						{more}{' '}
						<FaArrowRight className='text-sm transition-all ease-in-out duration-150 -rotate-45 group-hover:rotate-0 text' />
					</span>
				</div>
			</div>
		</div>
	);
};

export default memo(CatalogItem);

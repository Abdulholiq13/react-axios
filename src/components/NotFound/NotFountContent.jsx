import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFountContent = () => {
	const navigate = useNavigate();
	return (
		<div className='container flex flex-col items-center justify-center py-8'>
			<img src='./src/assets/404-page-not-found.svg' alt='' width={400} height={400} />

			<div className='mt-9 flex gap-8'>
				<button
					className='bg-[#FF9900] text-white px-8 py-4 rounded-md font-jost capitalize block mx-auto mb-6'
					onClick={() => navigate('/')}
				>
					Go Home
				</button>
				<button
					className='bg-[#FF9900] text-white px-8 py-4 rounded-md font-jost capitalize block mx-auto mb-6'
					onClick={() => navigate(-1)}
				>
					Go Back
				</button>
			</div>
		</div>
	);
};

export default NotFountContent;

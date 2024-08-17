import { memo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TextSkeleton = () => {
	return (
		<div className='mx-auto mb-4'>
			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={500} height={500}>
				<p className='flex '>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>
		</div>
	);
};

export default memo(TextSkeleton);

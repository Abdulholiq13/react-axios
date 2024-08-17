import { memo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TextSkeleton = () => {
	return (
		<div className='flex flex-col gap-2'>
			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={600} height={20}>
				<p>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>
			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={600} height={20}>
				<p>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>
			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={600} height={20}>
				<p>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>

			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={300} height={20}>
				<p>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>
		</div>
	);
};

export default memo(TextSkeleton);

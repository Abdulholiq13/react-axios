import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TextSkeleton = () => {
	return (
		<div className='flex gap-3'>
			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={150} height={150}>
				<p className='flex '>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>

			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={150} height={150}>
				<p className='flex '>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>

			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={150} height={150}>
				<p className='flex '>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>

			<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={150} height={150}>
				<p className='flex '>
					<Skeleton count={1} />
				</p>
			</SkeletonTheme>
		</div>
	);
};

export default TextSkeleton;

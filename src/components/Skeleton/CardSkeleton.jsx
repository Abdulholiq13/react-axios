import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = ({ cards }) => {
	return Array(cards)
		.fill(0)
		.map((_, i) => (
			<div key={i} className='flex flex-col'>
				<div>
					<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={210} height={120}>
						<p>
							<Skeleton count={1} />
						</p>
					</SkeletonTheme>
				</div>

				<div>
					<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={210}>
						<p>
							<Skeleton count={1} />
						</p>
					</SkeletonTheme>
				</div>
			</div>
		));
};

export default CardSkeleton;

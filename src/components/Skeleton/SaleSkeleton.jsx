import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SaleSkeleton = ({ cards }) => {
	return Array(cards)
		.fill(0)
		.map((_, i) => (
			<div key={i} className='flex flex-col'>
				<div>
					<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={236} height={291}>
						<p>
							<Skeleton count={1} />
						</p>
					</SkeletonTheme>
				</div>

				<div>
					<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={80}>
						<p>
							<Skeleton count={1} />
						</p>
					</SkeletonTheme>
				</div>

				<div>
					<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={100}>
						<p>
							<Skeleton count={1} />
						</p>
					</SkeletonTheme>
				</div>

				<div>
					<SkeletonTheme baseColor='#f4f4f4' highlightColor='#ddd' width={200}>
						<p>
							<Skeleton count={1} />
						</p>
					</SkeletonTheme>
				</div>
			</div>
		));
};

export default SaleSkeleton;

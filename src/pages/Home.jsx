import { memo } from 'react';
import Intro from '../components/Intro/Intro';
import PopularCategory from '../components/PopularCategory/PopularCategory';
import ProductStock from '../components/ProductStock/ProductStock';
import Sale from '../components/Sale/Sale';
import GoTop from '../components/GoTopButton/GoTop';

const Home = () => {
	return (
		<>
			<Intro />
			<PopularCategory />
			<ProductStock />
			<Sale />
			<GoTop />
		</>
	);
};

export default memo(Home);

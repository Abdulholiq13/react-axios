import Intro from '../components/Intro/Intro';
import PopularCategory from '../components/PopularCategory/PopularCategory';
import ProductStock from '../components/ProductStock/ProductStock';
import Sale from '../components/Sale/Sale';

const Home = () => {
	return (
		<>
			<Intro />
			<PopularCategory />
			<ProductStock />
			<Sale />
		</>
	);
};

export default Home;

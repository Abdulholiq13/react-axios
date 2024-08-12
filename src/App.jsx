import Footer from './components/Footer/Footer';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Intro from './components/Intro/Intro';
import PopularCategory from './components/PopularCategory/PopularCategory';
import ProductStock from './components/ProductStock/ProductStock';
import Sale from './components/Sale/Sale';

const App = () => {
	return (
		<>
			<HeaderTop />
			<Intro />
			<PopularCategory />
			<Sale />
			<ProductStock />
			<Footer />
		</>
	);
};

export default App;

import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Delivery from './pages/Delivery';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

const App = () => {
	return (
		<>
			<HeaderTop />
			<main className=''>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default App;

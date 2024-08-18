import Footer from './components/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Delivery from './pages/Delivery';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Single from './pages/Single';
import Admin from './pages/Admin/Admin';
import { memo } from 'react';
import Auth from './auth/Auth';

const App = () => {
	const pathname = useLocation();

	if (pathname === '/admin') {
		return <></>;
	} else {
		return (
			<>
				<HeaderTop />
				<main className=''>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/catalog' element={<Catalog />} />
						<Route path='/delivery' element={<Delivery />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='/product/:id' element={<Single />} />
						<Route path='/' element={<Auth />}>
							<Route path='admin' element={<Admin />} />
						</Route>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</>
		);
	}
};

export default memo(App);

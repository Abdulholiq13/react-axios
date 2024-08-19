import { memo } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Delivery from './pages/Delivery';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Single from './pages/Single';
import Admin from './pages/Admin/Admin';
import Auth from './pages/Auth/Auth';
import Login from './pages/Login/Login';

const App = () => {
	const { pathname } = useLocation();
	return (
		<>
			{pathname !== '/admin' && <HeaderTop />}
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/delivery' element={<Delivery />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/product/:id' element={<Single />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Auth />}>
						<Route path='admin' element={<Admin />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			{pathname !== '/admin' && <Footer />}
		</>
	);
};

export default memo(App);

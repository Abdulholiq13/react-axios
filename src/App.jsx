import Footer from './components/Footer/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import { memo } from 'react';
import Catalog from './pages/Catalog';
import Delivery from './pages/Delivery';
import HeaderTop from './components/HeaderTop/HeaderTop';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Single from './pages/Single';
import Admin from './pages/Admin/Admin';
import Auth from './auth/Auth';
import Login from './pages/login/Login';

const App = () => {
	const { pathname } = useLocation();

	if (pathname == '/admin' || pathname == '/login') {
		return <></>;
	}
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
						<Route path='admin' element={<Admin />}>
							{/* <Route path='students' element={}/> */}
						</Route>
					</Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default memo(App);

import React, { memo, useEffect, useState } from 'react';
import CatalogList from '../components/Catalog/CatalogList';
import GoTop from '../components/GoTopButton/goTop';

const Catalog = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		setScroll(true);
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<CatalogList />
			<GoTop />
		</>
	);
};

export default memo(Catalog);

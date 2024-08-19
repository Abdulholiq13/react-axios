import React, { memo, useEffect, useState } from 'react';
import CatalogList from '../components/Catalog/CatalogList';

const Catalog = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		setScroll(true);
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<CatalogList />
		</>
	);
};

export default memo(Catalog);

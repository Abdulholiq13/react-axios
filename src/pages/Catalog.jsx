import React, { memo } from 'react';
import CatalogList from '../components/Catalog/CatalogList';

const Catalog = () => {
	return (
		<>
			<CatalogList />
		</>
	);
};

export default memo(Catalog);

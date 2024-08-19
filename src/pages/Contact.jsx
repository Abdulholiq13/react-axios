import React, { memo } from 'react';
import ContactContent from '../components/Contact/ContactContent';
import GoTop from '../components/GoTopButton/goTop';

const Contact = () => {
	return (
		<>
			<ContactContent />
			<GoTop />
		</>
	);
};

export default memo(Contact);

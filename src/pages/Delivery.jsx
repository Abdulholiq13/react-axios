import React, { memo, useEffect, useState } from 'react';
import DeliveryInfo from '../components/Delivery/DeliveryInfo';
import GoTop from '../components/GoTopButton/goTop';

const Delivery = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		setScroll(true);
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<DeliveryInfo />
			<GoTop />
		</>
	);
};

export default memo(Delivery);

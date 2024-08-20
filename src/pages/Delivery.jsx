import React, { memo, useEffect, useState } from "react";
import DeliveryInfo from "../components/Delivery/DeliveryInfo";

const Delivery = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    setScroll(true);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DeliveryInfo />
    </>
  );
};

export default memo(Delivery);

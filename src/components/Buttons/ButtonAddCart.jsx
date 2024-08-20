import React, { memo } from "react";
import { FaPlus } from "react-icons/fa";

const ButtonAddCart = () => {
  return (
    <>
      <button className="text-base text-white px-[93px] rounded-full py-4 flex items-center gap-2 bg-[#FF8A1E]">
        Добаить в корзину <FaPlus className="text-[10px]" />
      </button>
    </>
  );
};

export default memo(ButtonAddCart);

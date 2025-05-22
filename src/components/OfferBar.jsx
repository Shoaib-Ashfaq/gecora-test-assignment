import React from 'react';

const OfferBar = () => {
  return (
    <div className="bg-[#5D1EFF] text-white py-[7px] text-center">
      <div className="inline-flex text-[12px] items-center gap-2 px-4  transition-all duration-200 cursor-pointer">
        <span>14 dní bezplatne 🎁 | </span>
        <span className="font-semibold underline underline-offset-4">Vyskúšať geCommerce</span>
      </div>
    </div>
  );
};

export default OfferBar;

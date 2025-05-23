import React, { useState } from 'react';
import cartLogo from '../assets/cart.png';

const MobileNavbar = () => {
  const [showSlideBar, setShowSlideBar] = useState(true);

  return (
    <>
      <nav className="bg-black  text-white border-t-4 border-[#5D1EFF] relative z-50">
        <div className="max-w-[327px] py-3 m-auto flex justify-between items-center">
          <span className="font-semibold">geCommerce</span>
          <div className="flex items-center gap-[20px]">
            <img src={cartLogo} alt="Cart" />
            <div
              className="bg-[#E4F328] p-2 flex flex-col gap-[4px] cursor-pointer"
              onClick={() => setShowSlideBar(true)}
            >
              <div className="w-4 ml-auto border border-black"></div>
              <div className="w-5 ml-auto border border-black"></div>
              <div className="w-4 ml-auto border border-black"></div>
            </div>
          </div>
        </div>
        <hr className="h-[0.5px] max-w-[327px] m-auto bg-white border-none" />
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity duration-300 z-40 ${
          showSlideBar ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setShowSlideBar(false)}
      />

      <div
        className={`fixed top-0 right-0 w-[90%] h-full bg-[#DEF241] shadow-lg text-black transform transition-transform duration-300 z-50 ${
          showSlideBar ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between mt-[90px] items-center px-[24px]">
          <span className="font-semibold text-lg">geCommerce</span>
          <div
            onClick={() => setShowSlideBar(false)}
            className="w-6 h-6 p-5 rounded-full bg-black border-2 -[#E4F328] flex items-center justify-center cursor-pointer"
          >
            <div className="w-6 h-0.5 bg-[#E4F328] rotate-45 absolute"></div>
            <div className="w-6 h-0.5 bg-[#E4F328] -rotate-45 absolute"></div>
          </div>
        </div>

        <ul className="px-[24px] pt-[50px] uppercase space-y-4 font-semibold">
          <li className="mt-[30px] text-[#5D31FF] hover:text-[#5D31FF] cursor-pointer">DOMOV</li>
          <li className="mt-[30px] hover:text-[#5D31FF] cursor-pointer">ecommerce</li>
          <li className="mt-[30px] hover:text-[#5D31FF] cursor-pointer">commerce</li>
          <li className="mt-[30px] hover:text-[#5D31FF] cursor-pointer">fakturácia</li>
          <li className="mt-[30px] hover:text-[#5D31FF] cursor-pointer">riadenie firmy</li>
          <li className="mt-[30px] hover:text-[#5D31FF] cursor-pointer">cenník</li>
          <li className="mt-[30px] hover:text-[#5D31FF] cursor-pointer">kontakt</li>
        </ul>

        <div className="px-[24px] mt-[50px] flex gap-4 text-[14px]">
          <button className="w-full border-2 border-black text-black py-2 rounded font-semibold uppercase hover:bg-black hover:text-[#DEF241] transition">
            prihlásenie
          </button>
          <button className="w-full bg-black text-[#DEF241] py-2 rounded font-semibold uppercase hover:bg-[#5D31FF] transition">
            registrácia
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;

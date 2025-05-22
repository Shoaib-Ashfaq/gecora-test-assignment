import React from 'react';
import arrow from '../assets/arrow.png';

const Card = ({ heading, desc, price, link }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#1a1a1a] to-black border border-gray-700 rounded-xl p-4"
      style={{
        border: '2px solid',
        borderImageSource:
          'linear-gradient(148.72deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.24) 100%)',
      }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-white font-semibold">{heading}</h3>
        <span className="text-[#E4F328] font-semibold">
          {price}€ <span className="text-gray-400 font-normal text-sm">/ mesiac</span>
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-2">{desc}</p>
      <div className="flex justify-end mt-4">
        <a
          href="https://www.google.com/"
          className="flex gap-3 items-center text-sm font-medium border border-[#E4F328] text-white px-4 py-2 rounded transition hover:bg-[#E4F328] hover:text-black"
        >
          <span>zistiť viac</span>
          <img className="w-3" src={arrow} alt="Arrow" />
        </a>
      </div>
    </div>
  );
};

export default Card;

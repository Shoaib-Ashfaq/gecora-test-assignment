import React from 'react';
import like from '../assets/like.png';
import trash from '../assets/trash.png';

const CartProduct = ({
  id,
  imgSrc,
  title,
  specs,
  price,
  realPrice,
  discountDesc,
  quantity,
  updateQuantity,
  removeItem,
  totalStock,
}) => {
  return (
    <div className="w-full flex justify-between pb-[24px] mt-[24px] border-b-2 border-[#F5F5F5]">
      <div className="flex gap-[24px]">
        <img src={imgSrc} alt="" />
        <div className="text-left">
          <p className="font-semibold">{title}</p>
          <p className="text-[#808080]">{specs}</p>

          <button className="flex  mt-[29px] gap-[8px] px-[10px] py-[5px] border-2 border-black">
            <img className="invert" src={like} alt="heart icon" />
            <p>Odložiť na neskôr</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-[10px] justify-end text-[#808080]">
          <span>{price} €</span>
          {realPrice ? <span className="line-through">{realPrice} €</span> : <></>}
          <img
            onClick={() => removeItem(id)}
            className="w-6 h-6 cursor-pointer"
            src={trash}
            alt=""
          />
        </div>
        {discountDesc ? (
          <p className="text-[12px] text-[#808080] mt-[8px]"> {discountDesc}</p>
        ) : (
          <></>
        )}

        <div className="mt-[24px] text-[12px] text-left">
          <p>Zadajte množstvo tu</p>
          <select
            value={quantity}
            onChange={e => updateQuantity(id, parseInt(e.target.value))}
            className="border rounded px-1 py-1 text-sm w-[190px] h-[48px]"
          >
            {[...Array(totalStock).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;

import React from 'react';
import tag from '../assets/tag.png';
import logo from '../assets/logo.png';
import apple from '../assets/apple.png';
import user from '../assets/user.png';
import like from '../assets/like.png';
import bag from '../assets/bag.png';
import band from '../assets/band.png';
import setting from '../assets/setting.png';
import search from '../assets/search.png';

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-[#808080] ">
        <div className="max-w-[1920px] mx-auto cursor-pointer flex justify-between px-5 py-1">
          <p>Pomoc & kontakt</p>
          <div className="flex gap-5">
            <p>Rastislavova 68, Košice</p>
            <p>+421 919 215 491</p>
          </div>
        </div>
      </div>
      <div className=" max-w-[1920px] mx-auto flex justify-end cursor-pointer text-[#808080] px-5 py-1">
        <div className="flex gap-3">
          <p>Sledovanie zásielky</p>
          <p>Vrátenie tovaru</p>
          <p>O nás</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>
      </div>
      <div className="bg-[#F54E80] py-1">
        <p className="max-w-[1920px] mx-auto  text-center font-semibold text-white">
          Nové iPhone 14 PRO s 20% zľavou ✨
        </p>
      </div>
      <div className=" bg-black text-white">
        <div className="max-w-[1920px] mx-auto p-4 flex justify-between items-center py-[24px]">
          <div className="flex gap-5">
            <div className="cursor-pointer flex gap-[3px] text-[16px]">
              <img src={tag} alt="" />
              <p>Výpredaj</p>
            </div>
            <div className="cursor-pointer flex gap-[3px] text-[16px]">
              <img src={band} alt="" />
              <p>Novinky</p>
            </div>
            <div className="cursor-pointer flex gap-[3px] text-[16px]">
              <img src={setting} alt="" />
              <p>MC Servis</p>
            </div>
          </div>

          <div className="flex ml-[-220px] cursor-pointer">
            <img className="w-[251px]" src={logo} alt="" />
            <div className=" px-[10px] border-[2px] w-[100px] border-white rounded-[8px] flex justify-between gap-[10px] items-center">
              <img className="w-[25px] h-[25px]" src={apple} alt="" />
              <p className="text-[12px]">
                Premium <br /> partner
              </p>
            </div>
          </div>

          <div className="flex gap-[16px]">
            <img className="cursor-pointer" src={user} alt="" />
            <img className="cursor-pointer" src={like} alt="" />
            <img className="cursor-pointer" src={bag} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-black px-5 py-[16px]">
        <div className="max-w-[1920px] mx-auto  flex justify-between">
          <div className="flex gap-[50px]">
            <div className="flex bg-white w-fit px-[24px] py-[7px] font-semibold items-center justify-center gap-[8px]">
              <p className="text-black">Všetky kategórie</p>
              <div
                className="p-2 flex flex-col gap-[4px] cursor-pointer"
                onClick={() => setShowSlideBar(true)}
              >
                <div className="w-4 ml-auto border border-black"></div>
                <div className="w-5 ml-auto border border-black"></div>
                <div className="w-4 ml-auto border border-black"></div>
              </div>
            </div>
            <div className="flex text-white">
              <p className=" cursor-pointer py-[10px] px-[24px]">iPhone</p>
              <p className=" cursor-pointer py-[10px] px-[24px]">iPad</p>
              <p className=" cursor-pointer py-[10px] px-[24px]">MacBook</p>
              <p className=" cursor-pointer py-[10px] px-[24px]">Apple Airpods</p>
              <p className=" cursor-pointer py-[10px] px-[24px]">Smarthome</p>
              <p className=" cursor-pointer py-[10px] px-[24px]">Príslušenstvo</p>
            </div>
          </div>
          <div className="flex items-center bg-white px-[16px] py-[12px] gap-[12px]">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Zadajte názov produktu"
              className="px-3 py-1 rounded-md text-black outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

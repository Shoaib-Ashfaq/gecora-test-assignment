import React from 'react';
import logo from '../assets/logo.png';
import discount from '../assets/discount.png';
import search from '../assets/search.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import tikTok from '../assets/tik_tok.png';
import whatsapp from '../assets/whatsapp.png';
import visaLogo from '../assets/visa-logo.png';
import mastercard from '../assets/Mastercard.png';
import maestro from '../assets/Maestro.png';
import googlePay from '../assets/GooglePay.png';
import applePay from '../assets/ApplePay.png';
import payPal from '../assets/PayPal.png';

const Footer = () => {
  return (
    <div className="bg-black py-[72px] mt-[48px]">
      <div className="max-w-[1920px] text-white mx-auto cursor-pointer flex justify-between px-5">
        <div>
          <img className="w-[400px]" src={logo} alt="" />
          <h2 className="text-[40px] px-[30px]">Postaráme sa o vás</h2>
          <p className="text-[#999999] px-[30px] w-[400px]">
            Odomknite nekonečné možnosti s naším prémiovým výberom Apple produktov.
          </p>
        </div>

        <div className="bg-[#6A4EF5] p-[32px]">
          <div className="flex justify-between items-center w-[672px]">
            <h2 className="text-[40px] font-semibold">Získaj 10% zľavu</h2>
            <img src={discount} alt="" />
          </div>
          <p className="max-w-[672px] text-[#C9BFFB] mt-[16px]">
            Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes pripojíte k našej
            komunite odberateľov noviniek!
          </p>

          <div className="flex justify-between gap-[24px] mt-[40px]">
            <div className="w-full flex items-center bg-white px-[16px] py-[12px] justify-between">
              <input
                type="text"
                placeholder="Zadajte názov produktu"
                className="px-3 py-1 rounded-md text-black outline-none"
              />
              <img src={search} alt="" />
            </div>
            <button className="bg-black py-[13px] w-[129px]">Odoslať</button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white mt-[58px] text-[14px]">
        <div className="max-w-[1920px] px-[50px] mx-auto grid grid-cols-1 md:grid-cols-[8.5fr_1fr_1fr_1fr_2fr] gap-10">
          <div className="text-[14px]">
            <h4 className="font-semibold mb-4 ">Kontaktné údaje</h4>
            <div className="text-[#999999] ">
              <p className="mb-2">+421 919 215 491</p>
              <p className="mb-4">Rastislavova 68, Košice</p>
            </div>

            <h4 className="font-semibold mt-[100px]">Sledujte nás</h4>
            <div className="flex space-x-4 mt-2 text-xl">
              <a href="#">
                <img className="w-4 h-4" src={facebook} alt="" />
              </a>
              <a href="#">
                <img className="w-4 h-4" src={instagram} alt="" />
              </a>
              <a href="#">
                <img className="w-4 h-4" src={youtube} alt="" />
              </a>
              <a href="#">
                <img className="w-4 h-4" src={whatsapp} alt="" />
              </a>
              <a href="#">
                <img className="w-4 h-4" src={tikTok} alt="" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-[32px]">Customer service</h4>
            <ul className="space-y-[16px] text-[#999999]">
              <li>Kontaktujte nás</li>
              <li>FAQs</li>
              <li>Vrátenie zásielky</li>
              <li>Doručenie</li>
              <li>Sledovanie zásielky</li>
              <li>Platby a cenotvorba</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-[32px]">Iné</h4>
            <ul className="space-y-[16px] text-[#999999]">
              <li>Iné iné a niečo iné</li>
              <li>Iné iné a niečo iné</li>
              <li>Iné iné iné</li>
              <li>Iné iné a iné</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-[32px]">Mobilecare</h4>
            <ul className="space-y-[16px] text-[#999999]">
              <li>O nás</li>
              <li>Blog</li>
              <li>Kariéra</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-[32px]">Členstvo, zľavy a akcie</h4>
            <ul className="space-y-[16px] text-[#999999]">
              <li>Odporuč nás a dostaň zľavu 10%</li>
              <li>Vernostný program</li>
            </ul>
          </div>
        </div>

        <div className="mt-[64px] max-w-[1920px] mx-auto text-center text-[#191919] text-[32px] font-semibold flex justify-between px-10">
          <span>Slovensko</span>
          <span>Česká republika</span>
          <span>România</span>
          <span>Polska</span>
        </div>

        <div className="max-w-[1920px] mx-auto flex justify-end px-10 mt-[64px]">
          <div className="flex items-center gap-[10px]">
            <div className={`bg-white w-[46px] rounded flex items-center justify-center h-[32px]`}>
              <img src={visaLogo} alt="" />
            </div>
            <div className={`bg-white w-[46px] rounded flex items-center justify-center h-[32px]`}>
              <img src={mastercard} alt="" />
            </div>
            <div className={`bg-white w-[46px] rounded flex items-center justify-center h-[32px]`}>
              <img src={maestro} alt="" />
            </div>
            <div className={`bg-white w-[46px] rounded flex items-center justify-center h-[32px]`}>
              <img src={googlePay} alt="" />
            </div>
            <div className={`bg-white w-[46px] rounded flex items-center justify-center h-[32px]`}>
              <img src={applePay} alt="" />
            </div>
            <div className={`bg-white w-[46px] rounded flex items-center justify-center h-[32px]`}>
              <img src={payPal} alt="" />
            </div>
          </div>
        </div>

        <div className="max-w-[1920px] mx-auto flex gap-[16px] text-[12px] text-[#404040] px-10 ">
          <p>Podmienky používania</p>
          <p>GDPR</p>
          <p>Ochrana osobných údajov</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import OfferBar from '../components/OfferBar';
import Card from '../components/Card';
import MobileNavbar from '../components/MobileNavbar';

const Test4 = () => {
  return (
    <div className="text-2xl bg-black min-h-screen ">
      <div className="combined-bg max-w-[400px] mx-auto">
        <OfferBar />
        <MobileNavbar />

        <section className="text-white px-[24px] py-[40px] max-w-md mx-auto mt-[32px]">
          <h2 className="text-[32px] font-bold">
            U NÁS SI <br />
            <span className="text-[#E4F328]">VYBERIE KAŽDÝ</span>
          </h2>
          <p className="text-[16px] text-[#A3A3A3] mt-[24px]">
            Funkcie nášho systému ocení každý, kto sa v Commerce už nejaký čas pohybuje, no aj tí z
            vás, ktorí s e-shopom ešte len začínate.
          </p>

          <div className="mt-[40px] space-y-4">
            <Card
              heading={'Živnostník'}
              price={'6.99'}
              desc={'Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.'}
              link={'abc'}
            />
            <Card
              heading={'Firma'}
              price={'9.99'}
              desc={'Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.'}
              link={'abc'}
            />
            <Card
              heading={'E-shop'}
              price={'Na mieru'}
              desc={'Vďaka mobilnej aplikácii máte prehľad o svojom e-shope.'}
              link={'abc'}
            />
          </div>

          <div className="mt-[40px] flex flex-wrap gap-[8px]">
            <div className="text-[14px] w-fit px-3 py-1 rounded-full border-3 border-[#E09FFF]">
              na 14 dní bezplatne
            </div>
            <div className="text-[14px] w-fit px-3 py-1 rounded-full border-3 border-[#E09FFF]">
              bez ekonómky
            </div>
            <div className="text-[14px] w-fit px-3 py-1 rounded-full border-3 border-[#E09FFF]">
              stručný prehľad v telefóne
            </div>
          </div>
          <div
            className="mt-[80px] w-fit mx-auto text-[14px]"
            style={{ transform: 'rotate(4deg)' }}
          >
            Chcete si nechať poradiť?{' '}
            <span className="text-[#DEF241] font-semibold">Napíšte nám</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Test4;

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CartProduct from '../components/CartProduct';
import iPhone14 from '../assets/iPhone-14.png';
import iPhone14Pro from '../assets/iPhone-14-pro.png';
import iPods from '../assets/iPods.png';
import deliveryTruck from '../assets/delivery-truck.png';
import visaLogo from '../assets/visa-logo.png';
import mastercard from '../assets/Mastercard.png';
import maestro from '../assets/Maestro.png';
import googlePay from '../assets/GooglePay.png';
import applePay from '../assets/ApplePay.png';
import payPal from '../assets/PayPal.png';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';

const Test1 = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'iPhone 14',
      spec: 'Kapacita: 256 GB, Farba: Silver',
      price: 1299,
      realPrice: 1799,
      discountDesc: 'Uštríte 17% oproti pôvodnej sume',
      image: iPhone14,
      quantity: 1,
      totalStock: 10,
    },
    {
      id: 2,
      name: 'iPhone 14 PRO',
      price: 1299,
      spec: 'Kapacita: 256 GB, Farba: Silver',
      image: iPhone14Pro,
      quantity: 6,
      totalStock: 50,
    },
    {
      id: 3,
      name: 'Apple AirPods 2 GEN',
      price: 299,
      spec: 'Kapacita: 256 GB, Farba: Silver',
      image: iPods,
      quantity: 1,
      totalStock: 15,
    },
  ]);
  const [paymentMethod, setPaymentMethod] = useState('visa');
  const [deliveryCharges, setDeliveryCharges] = useState(10);
  const [withVTA, setWithVTA] = useState(false);

  const updateQuantity = (id, qty) => {
    console.log('id', id);

    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: parseInt(qty) } : item))
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />

      {/* Cart section */}
      <section className="mt-[48px] text-center max-w-[1440px] mx-auto">
        <h2 className="text-[24px] font-semibold">Váš košík</h2>
        <p className="text-[#808080] text-[18px] mt-[8px]">V košíku máte aktuálne 2 produkty</p>

        <div className="flex mt-[48px]">
          {/* items section */}
          <div className="w-1/2 px-[50px]">
            {cartItems.map((item, index) => (
              <CartProduct
                key={index}
                id={item.id}
                imgSrc={item.image}
                title={item.name}
                specs={item.spec}
                price={item.price}
                realPrice={item.realPrice ? item.realPrice : null}
                discountDesc={item.discountDesc ? item.discountDesc : null}
                updateQuantity={updateQuantity}
                removeItem={removeItem}
                quantity={item.quantity}
                totalStock={item.totalStock}
              />
            ))}
          </div>

          {/* billing section */}
          <div className="w-1/2 pb-[24px] border-2 border-[#F5F5F5]">
            <div className="bg-[#F5F5F5] p-[24px] flex gap-[20px]">
              <img src={deliveryTruck} alt="" />
              <div className="flex justify-between w-full">
                <p>Doručíme</p>
                <p className="text-[#808080]">Pon, 19. 8 - Ut, 20. 8.</p>
              </div>
            </div>
            <div className="p-[24px] flex gap-[200px]">
              <p className="text-[14px] font-semibold">Akceptujeme platby</p>
              <div className="flex items-center gap-[10px]">
                <div
                  onClick={() => setPaymentMethod('visa')}
                  className={`p-[5px] ${
                    paymentMethod === 'visa' ? 'border-1 bg-[#1F72CD]    ' : ''
                  }`}
                >
                  <img src={visaLogo} alt="" />
                </div>
                <div
                  onClick={() => setPaymentMethod('master-card')}
                  className={`p-[5px] ${
                    paymentMethod === 'master-card' ? 'border-1 bg-[#1F72CD]     ' : ''
                  }`}
                >
                  <img src={mastercard} alt="" />
                </div>
                <div
                  onClick={() => setPaymentMethod('maestro')}
                  className={`p-[5px] ${
                    paymentMethod === 'maestro' ? 'border-1 bg-[#1F72CD]     ' : ''
                  }`}
                >
                  <img src={maestro} alt="" />
                </div>
                <div
                  onClick={() => setPaymentMethod('googlePay')}
                  className={`p-[5px] ${
                    paymentMethod === 'googlePay' ? 'border-1 bg-[#1F72CD]   ' : ''
                  }`}
                >
                  <img src={googlePay} alt="" />
                </div>
                <div
                  onClick={() => setPaymentMethod('applePay')}
                  className={`p-[5px] ${
                    paymentMethod === 'applePay' ? 'border-1 bg-[#1F72CD]    ' : ''
                  }`}
                >
                  <img src={applePay} alt="" />
                </div>
                <div
                  onClick={() => setPaymentMethod('payPal')}
                  className={`p-[5px] ${
                    paymentMethod === 'payPal' ? 'border-1 bg-[#1F72CD]  ' : ''
                  }`}
                >
                  <img src={payPal} alt="" />
                </div>
              </div>
            </div>

            <div className="flex px-[24px] justify-between items-center ">
              <p className="text-[18px]">Voucher</p>
              <input
                className="p-[10px] border-1 border-[#F5F5F5] outline-none"
                type="text"
                placeholder="Zľavový kód"
              />
            </div>

            <div className="mt-[24px] p-[24px] border-b-3 border-[#F5F5F5]">
              <div className="flex justify-between font-semibold">
                <p>Spolu položky</p>
                <p>{total} €</p>
              </div>
              <div className="flex justify-between mt-[16px] font-semibold">
                <p>Doprava:</p>
                <p>{deliveryCharges} €</p>
              </div>
            </div>

            <div className=" p-[24px] border-b-3 border-[#F5F5F5]">
              <div className="flex justify-between font-semibold items-center">
                <p>
                  Spolu: <span className="text-[#999999] font-medium">(vrátane DPH)</span>
                </p>
                <p className="text-[40px]">{!withVTA ? total + deliveryCharges : total} € </p>
              </div>
              <div className="flex gap-[20px] mt-[16px] text-[#999999]">
                <input type="checkbox" onChange={() => setWithVTA(!withVTA)} />
                <p>zobraziť cenu bez DPH</p>
              </div>
            </div>

            <div className="mt-[32px] flex gap-[24px] justify-center font-semibold">
              <button className="w-[289px] border-2 p-[13px]">Pokračovať v nákupe</button>
              <button className="w-[289px] border-2 p-[13px] text-white bg-black">
                Do pokladne
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product slider */}
      <ProductSlider />

      <Footer />
    </div>
  );
};

export default Test1;

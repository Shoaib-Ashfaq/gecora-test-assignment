import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import iPhone from '../assets/product-iPhone.png';
import iPod from '../assets/product-iPod.png';
import mac from '../assets/product-mac.png';
import like from '../assets/like.png';
import arrow from '../assets/arrow.png';

const products = [
  {
    id: 1,
    title: 'iPhone 17 PRO (2023)',
    category: 'Smartfóny',
    price: '1299 €',
    isNew: true,
    image: iPhone,
    colors: ['#F5E8DA', '#D1CFCF', '#000000'],
  },
  {
    id: 2,
    title: 'MacBook Pro 2023',
    category: 'Notebooky',
    price: '1999 €',
    isNew: true,
    image: iPod,
    colors: ['#D9D9D9', '#F5F5F5', '#222222'],
  },
  {
    id: 3,
    title: 'Apple AirPods 2',
    category: 'Slúchadlá',
    price: '199 €',
    image: mac,
    colors: ['#FFFFFF', '#CFCFCF'],
  },
  {
    id: 4,
    title: 'iPhone 17 PRO (2023)',
    category: 'Smartfóny',
    price: '1299 €',
    image: iPhone,
    colors: ['#F5E8DA', '#D1CFCF', '#000000'],
  },
  {
    id: 5,
    title: 'MacBook Pro 2023',
    category: 'Notebooky',
    price: '1999 €',
    image: iPod,
    colors: ['#D9D9D9', '#F5F5F5', '#222222'],
  },
  {
    id: 6,
    title: 'Apple AirPods 2',
    category: 'Slúchadlá',
    price: '199 €',
    image: mac,
    colors: ['#FFFFFF', '#CFCFCF'],
  },
];

const ProductSlider = () => {
  const swiperRef = useRef();

  return (
    <section className="px-6 md:px-12 py-12">
      <h2 className=" mx-auto text-[48px] font-semibold mt-[64px] mb-[48px] max-w-[1920px]">
        ✨ Mohlo by vás zaujímať
      </h2>

      <div className="max-w-[1920px] mx-auto px-4">
        <Swiper
          onSwiper={swiper => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          className="mb-[48px]"
        >
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <div className="relative bg-white p-4 rounded-md shadow-sm transition">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-lime-400 text-black text-xs px-2 py-1 rounded-sm font-semibold">
                    Novinka
                  </span>
                )}
                <button className="absolute top-2 right-2">
                  <img className="invert" src={like} alt="" />
                </button>
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto h-36 object-contain mb-[25px]"
                />
                <h3 className="font-semibold text-[16px]">{product.title}</h3>
                <p className="text-[#00000066] text-sm">{product.category}</p>
                <p className="font-bold mt-1">{product.price}</p>
                <div className="flex mt-2 gap-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1920px] mx-auto  flex justify-end gap-4 mt-6">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className=" group border border-black p-3 hover:bg-black hover:text-white transition flex items-center gap-2"
        >
          <img
            className="invert group-hover:invert-0 transform rotate-[-135deg] transition"
            src={arrow}
            alt=""
          />
          Prev
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="group border border-black p-3 hover:bg-black hover:text-white transition flex items-center gap-2"
        >
          Next
          <img
            className="invert group-hover:invert-0 transform rotate-[45deg] transition"
            src={arrow}
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default ProductSlider;

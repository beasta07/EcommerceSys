import React from 'react';
import Slider from 'react-slick';

const Sales = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024 , // breakpoint for tablets and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },{  breakpoint: 768 , // breakpoint for tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,} 
      },{  breakpoint: 768 , // breakpoint for tablets and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,} 
      },{  breakpoint: 1535 , // breakpoint for tablets and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,} }
    ]
  };

  return (
    <div className='container mt-40'>
      <div className='flex gap-2 px-[2rem] lg:px-0'>
        <button className='px-3 py-2 bg-white border border-black font-semibold text-center hover:text-white hover:bg-black'>
          New Arrivals
        </button>
        <button className='px-3 py-2 bg-black border border-black font-semibold text-white text-center hover:text-black hover:bg-white'>
          Top Trending
        </button>
      </div>
      <div className='mt-16  lg:w-full px-[0rem]'>
        <Slider {...settings}>
          {/* Each slide wrapped in a div */}
          <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/Sales1.avif' alt='Product 1' />
              <p className='-mt-10 mx-5 px-2 py-1 absolute bg-white z-10'>Rs 10,000.00</p>
              <p className='px-5'>Gazelle Shoes</p>
              <p className='text-gray-400 px-5'>Shoes</p>
            </div>
          </div>
          <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/Sales2.avif' alt='Product 2' />
              <p className='-mt-10 mx-5 px-2 py-1 absolute bg-white z-10'>Rs 10,000.00</p>
              <p className='px-5'>Gazelle Shoes</p>
              <p className='text-gray-400 px-5'>Shoes</p>
            </div>
          </div>
          <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/Sales3.avif' alt='Product 3' />
              <p className='-mt-10 mx-5 px-2 py-1 absolute bg-white z-10'>Rs 2,000.00</p>
              <p className='px-5'>Adidas Tshirt</p>
              <p className='text-gray-400 px-5'>Clothing</p>
            </div>
          </div>
          <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/Sales4.avif' alt='Product 4' />
              <p className='-mt-10 mx-5 px-2 py-1 absolute bg-white z-10'>Rs 1,500.00</p>
              <p className='px-5'>Training Top</p>
              <p className='text-gray-400 px-5'>Clothing</p>
            </div>
          </div>
          <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/Sales5.avif' alt='Product 5' />
              <p className='-mt-10 mx-5 px-2 py-1 absolute bg-white z-10'>Rs 2,000.00</p>
              <p className='px-5'>Gazelle Shoes</p>
              <p className='text-gray-400 px-5'>Shoes</p>
            </div>
          </div>
          <div className='px-2'>
            <div className='hover:border hover:border-black'>
              <img src='images/Sales6.avif' alt='Product 6' />
              <p className='-mt-10 mx-5 px-2 py-1 absolute bg-white z-10'>Rs 2,000.00</p>
              <p className='px-5'>Track Pants</p>
              <p className='text-gray-400 px-5'>Clothing</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sales;

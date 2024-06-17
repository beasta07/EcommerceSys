import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const FlashSale = () => {
  // Slider settings
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "linear",
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

  // Set the initial countdown time to approximately 4 days (in seconds)
  const initialTime = 345600; // 4 days
  const [countdown, setCountdown] = useState(initialTime);

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Convert remaining seconds to days, hours, minutes, and seconds
  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  // Format the time to display with leading zeros
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className='bg-[white] mt-[5rem]'>
      <div className='lg:container px-[2rem] '>
        <div className='lg:flex justify-between'>
          <div className='lg:flex gap-16'>
            <h1 className='text-4xl font-semibold mt-[2rem]'>Flash Sale</h1>
            <div className='lg:text-center text-2xl lg:flex justify-center gap-0 mt-[2rem]  flex '>
              <span className='bg-black text-white lg:px-3 lg:py-2 py-3 px-4 h-10 mr-5 lg:mr-0 rounded-md'>{formatTime(days)}</span>
              <span className='mr-3 lg:mr-0'>:</span>
              <span className='bg-black text-white lg:px-3 lg:py-2  py-3 px-4 h-10 mr-5 lg:mr-0 rounded-md'>{formatTime(hours)}</span>
              <span className='mr-3 lg:mr-0'> :</span>
              <span className='bg-black text-white lg:px-3 lg:py-2  py-3 px-4 h-10 mr-5 lg:mr-0 rounded-md'>{formatTime(minutes)}</span>
              <span className='mr-3 lg:mr-0'>:</span>
              <span className='bg-black text-white lg:px-3 lg:py-2  py-3 px-4 h-10 mr-5 lg:mr-0 rounded-md'>{formatTime(seconds)}</span>
            </div>
          </div>
          <button className='flex justify-end mt-[2rem] bg-transparent border border-black text-black px-20 py-3 hover:bg-black hover:text-white'>
            Shop Now
          </button>
        </div>

        <div className='my-16 pb-[4rem]'>
          <Slider {...settings}>
            {/* Each slide wrapped in a div */}

            <div className='px-2'>
              <div className='hover:border hover:border-black bg-[#F1F2F7]'>
                <img src='/images/FlashSale1.jpg' alt='Product 1' className='w-full' />
                <div className='flex flex-col md:flex-row -mt-[2rem] md:-ml-4 lg:ml-0 lg:ml-0 md:w-[17rem]'>
                  <p className='mx-5 px-1 py-1 bg-white z-12  '>
                    <span className='line-through'>Rs 14000.00</span>
                  </p>
                  <p className='mx-5 px-2 py-1 text-[red] bg-white z-10'>
                    Rs 700.00
                  </p>
                </div>
                <p className='px-5 py-2'>Gazelle Shoes</p>
                <p className='text-gray-400 px-5 pb-5'>Shoes</p>
              </div>
            </div>

            <div className='px-2'>
              <div className='hover:border hover:border-black bg-[#F1F2F7]'>
                <img src='/images/FlashSale2.jpg' alt='Product 1' className='w-full' />
                <div className='flex flex-col md:flex-row -mt-[2rem] md:-ml-4 lg:ml-0 md:w-[17rem]'>
                  <p className='mx-5 px-1 py-1 bg-white z-12  '>
                    <span className='line-through'>Rs 14000.00</span>
                  </p>
                  <p className='mx-5 px-2 py-1 text-[red] bg-white z-10'>
                    Rs 700.00
                  </p>
                </div>
                <p className='px-5 py-2'>Gazelle Shoes</p>
                <p className='text-gray-400 px-5 pb-5'>Shoes</p>
              </div>
            </div>

   
            <div className='px-2'>
              <div className='hover:border hover:border-black bg-[#F1F2F7]'>
                <img src='/images/FlashSale3.jpg' alt='Product 1' className='w-full' />
                <div className='flex flex-col md:flex-row -mt-[2rem] md:-ml-4 lg:ml-0 md:w-[17rem]'>
                  <p className='mx-5 px-1 py-1 bg-white z-12  '>
                    <span className='line-through'>Rs 14000.00</span>
                  </p>
                  <p className='mx-5 px-2 py-1 text-[red] bg-white z-10'>
                    Rs 700.00
                  </p>
                </div>
                <p className='px-5 py-2'>Gazelle Shoes</p>
                <p className='text-gray-400 px-5 pb-5'>Shoes</p>
              </div>
            </div>


            <div className='px-2'>
              <div className='hover:border hover:border-black bg-[#F1F2F7]'>
                <img src='/images/FlashSale4.jpg' alt='Product 1' className='w-full' />
                <div className='flex flex-col md:flex-row -mt-[2rem] md:-ml-4 lg:ml-0 md:w-[17rem]'>
                  <p className='mx-5 px-1 py-1 bg-white z-12  '>
                    <span className='line-through'>Rs 14000.00</span>
                  </p>
                  <p className='mx-5 px-2 py-1 text-[red] bg-white z-10'>
                    Rs 700.00
                  </p>
                </div>
                <p className='px-5 py-2'>Gazelle Shoes</p>
                <p className='text-gray-400 px-5 pb-5'>Shoes</p>
              </div>
            </div>

            <div className='px-2'>
              <div className='hover:border hover:border-black bg-[#F1F2F7]'>
                <img src='/images/FlashSale5.jpg' alt='Product 1' className='w-full' />
                <div className='flex flex-col md:flex-row -mt-[2rem] md:-ml-4 lg:ml-0 md:w-[17rem]'>
                  <p className='mx-5 px-1 py-1 bg-white z-12  '>
                    <span className='line-through'>Rs 14000.00</span>
                  </p>
                  <p className='mx-5 px-2 py-1 text-[red] bg-white z-10'>
                    Rs 700.00
                  </p>
                </div>
                <p className='px-5 py-2'>Gazelle Shoes</p>
                <p className='text-gray-400 px-5 pb-5'>Shoes</p>
              </div>
            </div>


            <div className='px-2'>
              <div className='hover:border hover:border-black bg-[#F1F2F7]'>
                <img src='/images/FlashSale6.jpg' alt='Product 1' className='w-full' />
                <div className='flex flex-col md:flex-row -mt-[2rem] md:-ml-4 lg:ml-0 md:w-[17rem]'>
                  <p className='mx-5 px-1 py-1 bg-white z-12  '>
                    <span className='line-through'>Rs 14000.00</span>
                  </p>
                  <p className='mx-5 px-2 py-1 text-[red] bg-white z-10'>
                    Rs 700.00
                  </p>
                </div>
                <p className='px-5 py-2'>Gazelle Shoes</p>
                <p className='text-gray-400 px-5 pb-5'>Shoes</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;

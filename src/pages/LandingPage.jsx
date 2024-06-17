import React from 'react';
import Products from '../components/Products';
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import FlashSale from '../components/FlashSale';
import Sales from '../components/Sales';
import JoinUs from '../components/JoinUs';

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='bg-[#D8DBE1]'>
        <div className='container mx-auto px-4 my-auto'>
          <div className='lg:flex pt-8'>
            <div className='flex flex-col items-start lg:mt-36 md:my-8 lg:w-1/2'>
              <h1 className='text-lg mb-4'>Fashion Show with the Designer</h1>
              <p className='lg:text-4xl text-2xl font-semibold leading-tight lg:w-96'>
                Find The Best Clothing 
                 Collection
              </p>
              <p className='text-gray-500 mt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas pariatur, quam dolore suscipit magnam odit quo commodi amet incidunt perspiciatis quis provident iure in hic veniam dignissimos, rerum maxime!
              </p>
              <button className="mt-8 px-9 py-3 bg-transparent border-2 border-black hover:bg-black hover:text-[#D8DBE1]">
                SHOP NOW
              </button>
            </div>
            <div className='lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0'>
              <img src='images/home.png' className='  object-contain' alt='Fashion Show' />
            </div>
          </div>
        </div>
      </div>
      
      <Products />
      
      <hr className="border border-gray-100 py-4 hidden lg:block" />
      
      <div className='hidden lg:block bg-black pb-32 pt-20'>
        <div className='container mx-auto px-4 flex justify-around md:gap-2 text-white'>
          <div className='flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <LiaShippingFastSolid className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Free Shipping</h1>
              <p>Standard shipping for orders</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <IoWalletOutline className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Money Guarantee</h1>
              <p>Within 30 days</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='border border-gray-300 rounded-full p-2'>
              <MdOutlineSupportAgent className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Online Support</h1>
              <p>24 hours a day, 7 days a week</p>
            </div>
          </div>
          <div className='flex items-center gap-4 md:hidden'>
            <div className='border border-gray-300 rounded-full p-2'>
              <RiMoneyRupeeCircleLine className='text-3xl' />
            </div>
            <div>
              <h1 className='text-xl font-semibold'>Flexible Payment</h1>
              <p>Multiple Credit Cards</p>
            </div>
          </div>
        </div>
      </div>
      
      <hr className="border border-gray-100 my-16" />
      
      <FlashSale />
      
      <hr className="border border-gray-100 my-16" />
      
      <JoinUs />
      
      <hr className="border border-gray-100 my-16" />
      
      <Sales />
      
      <hr className="border border-gray-100 my-16" />
    </div>
  );
};

export default LandingPage;

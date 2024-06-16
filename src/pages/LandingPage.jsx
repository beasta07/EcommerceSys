// import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import FlashSale from '../components/FlashSale';
import Sales from '../components/Sales';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';


const LandingPage = () => {
  return (
    <div>
      <div className='bg-[#D8DBE1]'>
        <div className='container'>
        <div className='sm:flex  pt-[2rem]  '>
            <div className='items-center sm:mt-[9rem]  '>
          <h1 className='text-[1.25rem] mb-4 w-96'>Fashion Show with the Designer</h1>
          <p className='sm:text-[4rem] text-[2rem] font-semibold sm:w-[34rem] w-[20rem] leading-[4rem] my-09'>Find The Best Clothing
            <br className='block sm:hidden'/> Collection </p>
          <p className='text-[gray]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas pariatur, quam dolore suscipit magnam odit quo commodi amet incidunt perspiciatis quis provident iure in hic veniam dignissimos, rerum maxime!</p>
      <button className="  px-9 py-3 mt-[2rem] bg-transparent border-2 border-black hover:bg-black hover:text-[#D8DBE1]">
          SHOP NOW
      </button>
            </div>
            
            <img src='images/home.png' className='lg:h-[40rem]  object-contain '/>
        </div>
    </div>
    </div>
    <Products/>
    <hr className="border border-gray-100 py-[2rem]  hidden sm:block" />
    <div className=' hidden sm:block bg-black pb-[8rem] pt-[5rem]
    '>
     <div className='flex container gap-[7rem]  text-white  '>
        <div className='flex gap-4'>
        <div className='border border-gray-300 rounded-full '>
        <LiaShippingFastSolid className='text-[3rem] px-2 py-2'/>
        </div>
        <div>
        <h1 className='text-xl font-semibold'>Free Shipping
        </h1>
        <p>Standard shipping for orders

</p> </div> </div>
        <div className='flex gap-4'>
        <div className='border border-gray-300 rounded-full '>
        <IoWalletOutline className='text-[3rem] px-2 py-2'/>
        </div>
        <div>
        <h1 className='text-xl font-semibold'>Money Guarantee

        </h1>
        <p>Within 30 days



</p> </div> </div>
        <div className='flex gap-4'>
        <div className='border border-gray-300 rounded-full '>
        <MdOutlineSupportAgent className='text-[3rem] px-2 py-2'/>
        </div>
        <div>
        <h1 className='text-xl font-semibold'>Online Support

        </h1>
        <p>24 hours a day, 7 days a week



</p> </div> </div>
        <div className='flex gap-4'>
        <div className='border border-gray-100 rounded-full '>
        <RiMoneyRupeeCircleLine className='text-[3rem] px-2 py-2'/>
        </div>
        <div>
        <h1 className='text-xl font-semibold'>Flexible Payment

        </h1>
        <p>Multiple Credit Cards



</p> </div> </div>
     </div>
     </div>
     <hr className="border border-gray-100 my-[4rem]" />
    <FlashSale/>
    <hr className="border border-gray-100 my-[4rem]" />
     <JoinUs/>
     <hr className="border border-gray-100 my-[4rem]" />

    <Sales/>
    <hr className="border border-gray-100 my-[4rem]" />
    </div>
  )
}

export default LandingPage

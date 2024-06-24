import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const JoinUs = () => {
  
  return (
      <div className='container'>
    <div className='bg-[black] h-[25rem] mt-[5rem] rounded-lg text-white'>
        <div className='flex justify-between  '>
          <div className='mt-[4rem] mx-16'>
           <p className='text-5xl font-semibold mb-8  '>Get 20% off on Summer  </p>  
           <p className='text-xl text-gray mt-3 leading-8 w-[50rem]'>Sign Up to our weekly Newsletter. So you can get all the updates about your newly clothes as well as special discounts upto 40% especially for you  </p>
           <div className='flex'>

           </div>
           <button className='px-16 py-3 my-[3rem] rounded-md bg-white text-black font-semibold'><div className='flex gap-2'>SIGN UP            <FaArrowRightLong className='text-black mt-1' /> </div>
           </button>
           </div>
           <div className='flex'>
          <img src='/public/images/SummerSale.avif' className='h-[24rem] py-8 mx-16 rounded-lg   hidden lg:block ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

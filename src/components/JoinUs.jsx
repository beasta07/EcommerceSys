import React, { useState, useEffect } from 'react';

const JoinUs = () => {
  
  return (
    <div className='bg-[#D8DBE1] h-[25rem] mt-[5rem]'>
      <div className='container'>
        <div className='flex gap-20'>
          <img src='/images/2women.png' className='h-[30rem] -mt-[5rem] hidden sm:block' />
          <div className='mt-[4rem]'>
           <p className='text-3xl font-semibold justify'>JOIN US  </p>  
           <p className='text-xl mt-3'>Sign Up to our weekly Newsletter. So you can get all the updates about your newly clothes , as well as special discounts upto 40% especially for you  </p>
           <button className='px-16 py-3 my-[2rem] rounded-md bg-black text-white'>SIGN UP</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

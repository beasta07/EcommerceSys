import React from 'react';
import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Products = () => {
  const navigate =useNavigate()
  const handleCheckout = () => {
    navigate("/SelectClothes")

  }
  return (
    <div className='sm:container px-[2rem] '>
      <h1 className='font-bold text-center text-xl mt-16'>OUR PRODUCTS</h1>
      <div className='hidden sm:block'>
      <div className='flex justify-center py-9 mb-2 gap-[8rem] '>
        <p>Handbags</p>
        <p>Jackets</p>
        <p>Shoes</p>
        <p>SweatShirts</p>
        <p>Tshirts</p>
      </div>
      </div>
      <div className='sm:flex gap-8 '>
        <div className='w-[21rem] relative group mb-[2rem]   ' onClick={handleCheckout}  >
          <img src='images/Dress1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt='Serenity Dress' />
          <img src='images/Dress2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 w-[21rem]  group-hover:opacity-100' alt='Serenity Dress' />
          <p className='font-semibold mt-2'>Serenity Dress</p>
          <p className='font-semibold'>90.00 $</p>
          <div className='flex gap-1'>
            <AiFillStar className='text-yellow-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
          </div>
        </div>
        <div className='w-[21rem] relative group '  onClick={handleCheckout}>
          <img src='images/Shoes1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt="Men's Patterned Oxford" />
          <img src='images/Shoes2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 w-[21rem] group-hover:opacity-100' alt="Men's Patterned Oxford" />
          <p className='font-semibold mt-2'>Men's Patterned Oxford</p>
          <p className='font-semibold'>55.00$ – 90.00$</p>
          <div className='flex gap-1'>
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
          </div>
        </div>
        <div className='w-[21rem] relative group'  onClick={handleCheckout}>
          <img src='images/Glasses1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt='Ocean Sea Salt For Aquariums' />
          <img src='images/Glasses2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 w-[21rem] group-hover:opacity-100' alt='Ocean Sea Salt For Aquariums' />
          <p className='font-semibold mt-2'>Ocean Sea Salt For Aquariums</p>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-gray-400 line-through'>99.00 $</p>
            <p className='font-semibold text-red-500'>54.00 $</p>
          </div>
          <div className='flex gap-1 mt-2'>
            <AiFillStar className='text-yellow-400' />
            <AiFillStar className='text-yellow-400' />
            <AiFillStar className='text-yellow-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
          </div>
          <p className='text-gray-400 mb-4'>0 reviews</p>
        </div>
        <div className='w-[21rem] relative group'  onClick={handleCheckout}>
          <img src='images/Cardigan1.jpg' className='transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0' alt='In The Clouds Wrap Cardigans' />
          <img src='images/Cardigan2.jpg' className='transition-opacity duration-500 ease-in-out opacity-0 absolute top-0 left-0 w-[21rem] group-hover:opacity-100' alt='In The Clouds Wrap Cardigans' />
          <p className='font-semibold mt-2'>In The Clouds Wrap Cardigans</p>
          <p className='font-semibold'>90.00 $</p>
          <div className='flex gap-1'>
            <AiFillStar className='text-yellow-400' />
            <AiFillStar className='text-yellow-400' />
            <AiFillStar className='text-yellow-400' />
            <CiStar className='text-gray-400' />
            <CiStar className='text-gray-400' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'; // Close icon
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
 const navigate = useNavigate() 
  const handleClick = () => {
    navigate("/")
  }
    const [textIndex, setTextIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideDownVisible, setSlideDownVisible] = useState(false); // State for slide-down screen
  const texts = [
    'SIGN UP NOW FOR 20% OFF',
    'HOT SUMMER DEALS AVAILABLE',
    'NEW SUMMER COLLECTION OUT NOW'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='text-white bg-black text-sm font-bold py-2 flex justify-between items-center px-4'>
        <div className='flex justify-center w-full '>
          <div className='flex items-center justify-center sm:ml-40 ml-4 gap-1'>
            <span className='animate-pulse'>{texts[textIndex]}</span>
            <IoIosArrowDown 
              className='text-[1.25rem] cursor-pointer animate-pulse'
              onClick={() => setSlideDownVisible(true)} // Show slide-down screen
            />
          </div>
        </div>
        <div className='hidden sm:block'>
          <div className='flex space-x-4 font-normal sm:w-96'>
            <h1>Find a store</h1>
            <h1>|</h1>
            <h1>Help</h1>
            <h1>|</h1>
            <h1>Join Us</h1>
            <h1>|</h1>
            <h1>Sign In</h1>
          </div>
        </div>
      </div>

      <div className='text-black bg-white text-sm font-bold flex justify-between items-center px-5'>
        <img src='images/logo.jpg' alt='logo' className='h-24 ' onClick={handleClick} />
        <div className='hidden md:flex text-center items-center font-semibold gap-16'>
          <h1>MEN</h1>
          <h1>WOMEN</h1>
          <h1>KIDS</h1>
          <h1>SPORTS</h1>
          <h1>SALE</h1>
        </div>
        <div className='flex items-center gap-8'>
          <div className='flex items-center bg-gray-100 rounded-3xl px-4 py-2'>
            <IoMdSearch className='text-[1.25rem]' />
            <input 
              placeholder='Search' 
              className='bg-gray-100 focus:outline-none text-black ml-2 w-20 font-normal' 
            />
          </div>
          <CiHeart className='text-2xl hover:text-red-700 hidden sm:block'/>
          <CiShoppingCart className='text-2xl' />
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden flex flex-col items-center bg-white text-black py-4'>
          <h1 className='py-2'>MEN</h1>
          <h1 className='py-2'>WOMEN</h1>
          <h1 className='py-2'>KIDS</h1>
          <h1 className='py-2'>SPORTS</h1>
          <h1 className='py-2'>SALE</h1>
        </div>
      )}

      <div 
        className={`fixed top-0 left-0 right-0 bg-white z-50 transform transition-transform duration-500 ease-in-out ${slideDownVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='p-4 border-b border-gray-200 flex justify-between items-center'>
          <h1 className='text-xl font-bold'>User Information</h1>
          <AiOutlineClose 
            className='text-2xl cursor-pointer' 
            onClick={() => setSlideDownVisible(false)} // Hide slide-down screen
          />
        </div>
        <div className='p-4'>
          {/* Add your form or user information content here */}
          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
              <input type='text' id='name' name='name' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
              <input type='email' id='email' name='email' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea id='message' name='message' rows='3' className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'></textarea>
            </div>
            <div className='flex justify-end'>
              <button type='submit' className='px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

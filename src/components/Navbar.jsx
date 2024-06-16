import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

// Dropdown component
const Dropdown = ({ isOpen, options, handleOptionClick }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute bg-white shadow-md mt-2 py-2 w-32 rounded-md z-10">
      {options.map(option => (
        <div
          key={option.id}
          className="cursor-pointer px-4 py-2 hover:bg-gray-100"
          onClick={() => handleOptionClick(option.id)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default function Navbar() {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const menuItems = [
    { id: 'men', label: 'MEN', options: ['Shirts', 'Pants', 'Shoes'] },
    { id: 'women', label: 'WOMEN', options: ['Dresses', 'Tops', 'Bottoms'] },
    { id: 'kids', label: 'KIDS', options: ['Boys', 'Girls'] },
    { id: 'sports', label: 'SPORTS', options: ['Basketball', 'Soccer', 'Running'] },
    { id: 'sale', label: 'SALE', options: ['Clearance', 'Discounts'] }
  ];

  const handleItemClick = (itemId) => {
    console.log(`Clicked on ${itemId}`);
    setDropdownOpen(itemId === dropdownOpen ? null : itemId);
  };

  const handleMouseEnter = (itemId) => {
    setDropdownOpen(itemId);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <>
      <div className='text-white bg-black text-sm font-bold py-2 flex justify-between items-center px-4'>
        <div className='flex justify-center w-full '>
          <div className='flex items-center justify-center sm:ml-40 ml-4 gap-1'>
            <span className='animate-pulse'>SIGN UP NOW FOR 20% OFF</span>
            <IoIosArrowDown 
              className='text-[1.25rem] cursor-pointer animate-pulse'
              onMouseEnter={() => setDropdownOpen('specials')}
              onMouseLeave={() => setDropdownOpen(null)}
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
        <img src='images/logo.jpg' alt='logo' className='h-24 ' onClick={() => navigate("/")} />
        <div className='hidden md:flex text-center items-center font-semibold gap-16'>
          {menuItems.map(item => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <h1
                className={`cursor-pointer ${dropdownOpen === item.id ? 'text-blue-600' : 'text-black'}`}
                onClick={() => handleItemClick(item.id)}
              >
                {item.label}
              </h1>
              <Dropdown
                isOpen={dropdownOpen === item.id}
                options={item.options.map((opt, index) => ({ id: `${item.id}-${index}`, label: opt }))}
                handleOptionClick={(optionId) => console.log(`Clicked on ${optionId}`)}
              />
            </div>
          ))}
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
            <button onClick={() => setDropdownOpen('mobileMenu')}>
              {dropdownOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
            </button>
          </div>
        </div>
      </div>

      {dropdownOpen === 'mobileMenu' && (
        <div className='md:hidden flex flex-col items-center bg-white text-black py-4'>
          {menuItems.map(item => (
            <h1
              key={item.id}
              className='py-2 cursor-pointer'
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </h1>
          ))}
        </div>
      )}

      <div 
        className={`fixed top-0 left-0 right-0 bg-white z-50 transform transition-transform duration-500 ease-in-out ${dropdownOpen === 'specials' ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='p-4 border-b border-gray-200 flex justify-between items-center'>
          <h1 className='text-xl font-bold'>Specials</h1>
          <AiOutlineClose 
            className='text-2xl cursor-pointer' 
            onClick={() => setDropdownOpen(null)}
          />
        </div>
        <div className='p-4'>
          <ul>
            <li>Special 1</li>
            <li>Special 2</li>
            <li>Special 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

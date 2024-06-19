import React from 'react';
import PropTypes from 'prop-types';
import { FaMoneyBillWave } from "react-icons/fa";

import { GiLargeDress } from "react-icons/gi";
import { IoShirtOutline } from "react-icons/io5";
import { TfiAlarmClock } from "react-icons/tfi";
import { IoMdTrendingUp } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { PiPants } from "react-icons/pi";
import { TbJacket } from "react-icons/tb";
import { FiWatch } from "react-icons/fi";
import { PiHandbagSimple } from "react-icons/pi";
import { GiSunglasses } from "react-icons/gi";
import { TbShoe } from "react-icons/tb";
import { GiSandal } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { GiTennisRacket } from "react-icons/gi";
import { GiBasketballBasket } from "react-icons/gi";
import { GiBasketballJersey } from "react-icons/gi";
import { GiUnderwearShorts } from "react-icons/gi";
import { PiSock } from "react-icons/pi";
import { PiBoot } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { MdOutlineWarehouse } from "react-icons/md";
import { LuBedSingle } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { MdAudiotrack } from "react-icons/md";
import { PiDressLight } from "react-icons/pi";
import { GiFairyWand } from "react-icons/gi";
import { AiOutlineBook } from "react-icons/ai";
import { FaRedhat } from "react-icons/fa";
import { PiBoxingGlove } from "react-icons/pi";
import { GiAmpleDress } from "react-icons/gi";
import { GiDress } from "react-icons/gi";
import { GiSkirt } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { BsFillHandbagFill } from "react-icons/bs";
import { GiHighHeel } from "react-icons/gi";
import { GiBarefoot } from "react-icons/gi";
import { PiPantsThin } from "react-icons/pi";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { MdSportsKabaddi } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";

import { GiLoincloth } from "react-icons/gi";


const iconMap = {
  'Games': <IoGameControllerOutline className='text-[1.25rem]' />,
  'Outdoor': <MdSportsKabaddi className='text-[1.25rem]' />,
  'Educational': <PiGraduationCap className='text-[1.25rem]' />,
  'Shirts': <LiaTshirtSolid className='text-[1.25rem]' />,
  'T-Shirts': <IoShirtOutline className='text-[1.25rem]' />,
  'Pants': <PiPantsThin className='text-[1.25rem]' />,
  'Best Sellers': <FaMoneyBillWave className='text-[1.25rem]' />,
  'Jeans': <PiPants className='text-[1.25rem]' />,
  'Jackets': <TbJacket className='text-[1.25rem]' />,
  'Watches': <FiWatch className='text-[1.25rem]' />,
  'Bags': <PiHandbagSimple className='text-[1.25rem]' />,
  'Sunglasses': <GiSunglasses className='text-[1.25rem]' />,
  'New Arrivals': <GiLargeDress className='text-[1.25rem]' />,
  'Trending Styles': <IoMdTrendingUp className='text-[1.25rem]' />,
  'Limited Editions': <TfiAlarmClock className='text-[1.25rem]' />,
  'Fashion Trends': <GoPerson className='text-[1.25rem]' />,
  'Sneakers': <TbShoe className='text-[1.25rem]' />,
  'Staff Picks': <GoPerson className='text-[1.25rem]' />,
  'Sandals': <GiSandal className='text-[1.25rem]' />,
  'Balls': <IoMdFootball className='text-[1.25rem]' />,
  'Rackets': <GiTennisRacket className='text-[1.25rem]' />,
  'Nets': <GiBasketballBasket className='text-[1.25rem]' />,
  'Jerseys': <GiBasketballJersey className='text-[1.25rem]' />,
  'Shorts': <GiUnderwearShorts className='text-[1.25rem]' />,
  'Socks': <PiSock className='text-[1.25rem]' />,
  'Boots': <PiBoot className='text-[1.25rem]' />,
  'Decor': <MdOutlineWarehouse className='text-[1.25rem]' />,
  'Furniture': <RiSofaLine className='text-[1.25rem]' />,
  'Bedding': <LuBedSingle className='text-[1.25rem]' />,
  'Gadgets': <CiMobile3 className='text-[1.25rem]' />,
  'Audio': <MdAudiotrack className='text-[1.25rem]' />,
  'Wearables': <PiDressLight className='text-[1.25rem]' />,
  'Fiction': <GiFairyWand className='text-[1.25rem]' />,
  'Non-Fiction': <AiOutlineBook className='text-[1.25rem]' />,
  'High Heels': <GiHighHeel className='text-[1.25rem]' />,
  'Dresses': <GiAmpleDress className='text-[1.25rem]' />,
  'Maxi Dresses': <GiDress className='text-[1.25rem]' />,
  'Skirts': <GiSkirt className='text-[1.25rem]' />,
  'Barefoot': <GiBarefoot className='text-[1.25rem]' />,
  'Jewelry': <IoDiamondOutline className='text-[1.25rem]' />,
  'Sports Gear': <PiBoxingGlove className='text-[1.25rem]' />,
  'Hats': <FaRedhat className='text-[1.25rem]' />,
  'Handbags': <BsFillHandbagFill className='text-[1.25rem]' />,
  'Lingerie': <GiLoincloth className='text-[1.25rem]' />,
};

const MegaMenu = ({ isOpen, options, image }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute w-full bg-white shadow-lg z-50">
      <div className="border border-t-1 w-full border-gray-200"></div>
      <div className="">
        <div className="flex">
          <div className="py-16 mx-24">
            {options.map((section, index) => (
              <div key={index} className="col-span-1">
                <h3 className="text-lg font-semibold mb-8 text-gray-700">{section.title}</h3>
                <div className="mb-4 grid grid-cols-3 gap-14">
                  {section.items.map((item, idx) => (
                    <div key={idx}>
                      <div className='flex gap-2'>
                        {iconMap[item.title]}
                        <h1 className='font-semibold'>{item.title}</h1>
                      </div>
                      <p className='text-gray-500 ml-7 w-60 py-2 text-[0.90rem] font-normal'>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border border-gray-300"></div>
          <div className="bg-[#F1F1F0] px-10 py-16">
            <img src={image} alt="Category Sale" className="3xl:w-[50rem] w-[35rem] mb-8" />
            <p className='text-[#747574] font-semibold'>READY TO GET STARTED?</p>
            <div className="border border-t-1 w-full border-gray-300 my-4"></div>
            <p className='font-semibold'>Daily Deals</p>
            <div className="border border-t-1 w-full border-gray-300 my-4"></div>
            <p className='font-semibold'>Bundled Discounts</p>
            <div className="border border-t-1 w-full border-gray-300 my-4"></div>
            <p className='font-semibold'>Promo Codes or Coupons</p>
            <div className="border border-t-1 w-full border-gray-300 my-4"></div>
            <p className='font-semibold'>Holiday-Specific Discounts</p>
            <div className="border border-t-1 w-full border-gray-300 my-4"></div>
            <p className='font-semibold'>Customer Loyalty Rewards</p>
            <div className="border border-t-1 w-full border-gray-300 my-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

MegaMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
};

export default MegaMenu;
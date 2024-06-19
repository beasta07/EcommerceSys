import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import MegaMenu from './MegaMenu';

const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);

  const menuItems = [
    { id: 'men', label: 'Men' , image:'/images/Summer.jpg' },
    { id: 'women', label: 'Women', image:'/images/WomenSale.jpg' },
    { id: 'children', label: 'Children' , image:'/images/ChildrensSale.jpg' },
    { id: 'sports', label: 'Sports' , image:'/images/JerseySale.jpg' },
    { id: 'lifestyle', label: 'Lifestyle', image:'/images/LifestyleSale.jpg' }
  ];

  const megaMenuOptions = {
    men: [
      {
        title: 'FEATURED',
        items: [
          {
            title: 'New Arrivals',
            description: 'Showcasing the latest additions to your clothing collection.'
          },
          {
            title: 'Best Sellers',
            description: 'Highlighting the top-selling items from your store.'
          },
          {
            title: 'Trending Styles',
            description: 'Showcasing items that are popular among your customers.'
          },
          {
            title: 'Limited Editions',
            description: 'Highlighting exclusive or limited-edition clothing pieces.'
          },
          {
            title: 'Fashion Trends',
            description: 'Featuring items that align with current fashion styles.'
          },
          {
            title: 'Staff Picks',
            description: 'Featuring items curated by fashion experts.'
          }
        ]
      },
      {
        title: 'CLOTHING',
        items: [
          { title: 'T-Shirts', description: 'Comfortable and stylish T-shirts for men.' },
          { title: 'Jeans', description: 'Classic denim jeans for everyday wear.' },
          { title: 'Jackets', description: 'Stylish jackets to keep you warm and fashionable.' }
        ]
      },
      {
        title: 'ACCESSORIES',
        items: [
          { title: 'Watches', description: 'Elegant watches for every occasion.' },
          { title: 'Bags', description: 'Functional and fashionable bags.' },
          { title: 'Sunglasses', description: 'Protective and stylish sunglasses.' }
        ]
      },
      {
        title: 'FOOTWEAR',
        items: [
          { title: 'Sneakers', description: 'Comfortable sneakers for daily activities.' },
          { title: 'Boots', description: 'Durable boots for various weather conditions.' },
          { title: 'Sandals', description: 'Casual sandals perfect for summer.' }
        ]
      }
    ],
    women: [
      {
        title: 'FEATURED',
        items: [
          {
            title: 'New Arrivals',
            description: 'Discover the latest trends and styles in women’s fashion.'
          },
          {
            title: 'Best Sellers',
            description: 'Explore the top-selling items loved by our customers.'
          },
          {
            title: 'Trending Styles',
            description: 'Stay ahead with the most popular styles of the season.'
          },
          {
            title: 'Limited Editions',
            description: 'Exclusive pieces that are available for a limited time.'
          },
          {
            title: 'Fashion Trends',
            description: 'Get inspired by the latest fashion trends and must-haves.'
          },
          {
            title: 'Staff Picks',
            description: 'Handpicked favorites chosen by our fashion experts.'
          }
        ]
      },
      {
        title: 'CLOTHING',
        items: [
          { title: 'Dresses', description: 'Elegant and stylish dresses for any occasion.' },
          { title: 'Tops', description: 'Trendy tops to match any outfit.' },
          { title: 'Skirts', description: 'Beautiful skirts for a chic look.' }
        ]
      },
      {
        title: 'ACCESSORIES',
        items: [
          { title: 'Jewelry', description: 'Elegant and stylish jewelry to complete your look.' },
          { title: 'Handbags', description: 'Chic and functional handbags for everyday use.' },
          { title: 'Scarves', description: 'Stylish scarves to accessorize your outfits.' }
        ]
      },
      {
        title: 'FOOTWEAR',
        items: [
          { title: 'Heels', description: 'Elegant heels for formal and casual occasions.' },
          { title: 'Flats', description: 'Comfortable and stylish flats for everyday wear.' },
          { title: 'Sandals', description: 'Cool and comfortable sandals for warm days.' }
        ]
      }
    ],
    children: [
      {
        title: 'FEATURED',
        items: [
          {
            title: 'New Arrivals',
            description: 'Check out the latest arrivals in children’s clothing and accessories.'
          },
          {
            title: 'Best Sellers',
            description: 'Popular items that kids love.'
          },
          {
            title: 'Trending Styles',
            description: 'The latest styles and trends in children’s fashion.'
          },
          {
            title: 'Limited Editions',
            description: 'Unique and limited-edition items for your kids.'
          },
          {
            title: 'Fashion Trends',
            description: 'Stay updated with the newest trends in kids’ fashion.'
          },
          {
            title: 'Staff Picks',
            description: 'Our staff’s favorite picks for your children.'
          }
        ]
      },
      {
        title: 'CLOTHING',
        items: [
          { title: 'Shirts', description: 'Comfortable and stylish shirts for kids.' },
          { title: 'Shorts', description: 'Cool and casual shorts for play and leisure.' },
          { title: 'Pants', description: 'Durable pants for everyday wear.' }
        ]
      },
      {
        title: 'TOYS',
        items: [
          { title: 'Educational', description: 'Toys that promote learning and creativity.' },
          { title: 'Outdoor', description: 'Fun outdoor toys for active play.' },
          { title: 'Games', description: 'Entertaining games for children of all ages.' }
        ]
      },
      {
        title: 'FOOTWEAR',
        items: [
          { title: 'Sneakers', description: 'Comfortable sneakers for active kids.' },
          { title: 'Boots', description: 'Durable boots for all weather conditions.' },
          { title: 'Sandals', description: 'Casual sandals for summer fun.' }
        ]
      }
    ],
    sports: [
      {
        title: 'FEATURED',
        items: [
          {
            title: 'New Arrivals',
            description: 'Latest sports equipment and apparel.'
          },
          {
            title: 'Best Sellers',
            description: 'Top-selling sports gear and clothing.'
          },
          {
            title: 'Trending Styles',
            description: 'Popular sportswear and accessories.'
          },
          {
            title: 'Limited Editions',
            description: 'Exclusive sports items available for a limited time.'
          },
          {
            title: 'Fashion Trends',
            description: 'Stay updated with the latest in sports fashion.'
          },
          {
            title: 'Staff Picks',
            description: 'Our top picks for sports enthusiasts.'
          }
        ]
      },
      {
        title: 'EQUIPMENT',
        items: [
          { title: 'Balls', description: 'High-quality balls for various sports.' },
          { title: 'Rackets', description: 'Durable rackets for your favorite sports.' },
          { title: 'Nets', description: 'Essential nets for different sports.' }
        ]
      },
      {
        title: 'CLOTHING',
        items: [
          { title: 'Jerseys', description: 'Comfortable jerseys for sports activities.' },
          { title: 'Shorts', description: 'Breathable shorts for optimal performance.' },
          { title: 'Socks', description: 'Supportive socks for athletic activities.' }
        ]
      },
      {
        title: 'ACCESSORIES',
        items: [
          { title: 'Bags', description: 'Functional bags for sports gear.' },
          { title: 'Hats', description: 'Stylish hats for sports and leisure.' },
          { title: 'Gloves', description: 'Protective gloves for various sports.' }
        ]
      }
    ],
    lifestyle: [
      {
        title: 'FEATURED',
        items: [
          {
            title: 'New Arrivals',
            description: 'Discover the latest lifestyle products.'
          },
          {
            title: 'Best Sellers',
            description: 'Popular items that customers love.'
          },
          {
            title: 'Trending Styles',
            description: 'Stay updated with the latest trends in lifestyle products.'
          },
          {
            title: 'Limited Editions',
            description: 'Exclusive lifestyle items available for a limited time.'
          },
          {
            title: 'Fashion Trends',
            description: 'The latest fashion trends in lifestyle products.'
          },
          {
            title: 'Staff Picks',
            description: 'Our staff’s favorite lifestyle products.'
          }
        ]
      },
      {
        title: 'HOME',
        items: [
          { title: 'Decor', description: 'Beautiful decor to enhance your home.' },
          { title: 'Furniture', description: 'Stylish and functional furniture.' },
          { title: 'Bedding', description: 'Comfortable and high-quality bedding.' }
        ]
      },
      {
        title: 'ELECTRONICS',
        items: [
          { title: 'Gadgets', description: 'Innovative gadgets for everyday use.' },
          { title: 'Audio', description: 'High-quality audio products.' },
          { title: 'Wearables', description: 'Stylish and functional wearable devices.' }
        ]
      },
      {
        title: 'BOOKS',
        items: [
          { title: 'Fiction', description: 'Engaging fiction books for leisure reading.' },
          { title: 'Non-Fiction', description: 'Informative non-fiction books.' },
          { title: 'Magazines', description: 'Popular magazines across various genres.' }
        ]
      }
    ]
  };

  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    setMegaMenuOpen(megaMenuOpen === itemId ? null : itemId);
  };

  return (
    <>
      <div className='text-white bg-black text-sm font-bold py-2 flex justify-between items-center px-2'>
        <div className='flex justify-center w-full'>
          <div className='flex items-center justify-center lg:ml-40 ml-4 gap-1'>
            <span className='animate-pulse'>SIGN UP NOW FOR 20% OFF</span>
            <IoIosArrowDown
              className={`text-[1.25rem] cursor-pointer animate-pulse ${megaMenuOpen === 'specials' ? 'transform rotate-180' : ''}`}
              onClick={() => handleItemClick('specials')}
            />
          </div>
        </div>
        <div className='hidden lg:block'>
          <div className='flex space-x-4 font-normal lg:w-96'>
            <h1>Find a store</h1>
            <h1>Help</h1>
            <h1>Join Us</h1>
            <h1>Sign In</h1>
          </div>
        </div>
      </div>

      <div className='bg-white text-sm font-bold'>
        <div className='container mx-auto flex justify-between items-center px-4 py-4 relative'>
          <img src='images/logo.jpg' alt='logo' className='h-24 cursor-pointer' onClick={() => navigate("/")} />

          <div className='hidden md:flex text-center items-center font-semibold gap-8'>
            {menuItems.map(item => (
              <div className='flex gap-1 cursor-pointer relative' key={item.id} onClick={() => handleItemClick(item.id)}>
                {item.label} {megaMenuOpen === item.id ? <IoIosArrowUp className='mt-1' /> : <IoIosArrowDown className='mt-1' />}
              </div>
            ))}
          </div>

          <div className='flex items-center gap-4 md:gap-2'>
            <div className='flex items-center bg-gray-100 rounded-3xl px-4 py-2'>
              <IoMdSearch className='text-[1.25rem]' />
              <input
                placeholder='Search'
                className='bg-gray-100 focus:outline-none text-black ml-2 w-20 font-normal'
              />
            </div>

            <CiHeart className='text-2xl hover:text-red-700 hidden lg:block' />
            <CiShoppingCart className='text-2xl' />

            <div className='md:hidden'>
              <button onClick={() => setMegaMenuOpen('mobileMenu')}>
                {megaMenuOpen === 'mobileMenu' ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
              </button>
            </div>
          </div>
        </div>

        {/* MegaMenu */}
        {megaMenuOpen && (
          <MegaMenu isOpen={megaMenuOpen !== null} options={megaMenuOptions[megaMenuOpen]}  image={menuItems.find(item => item.id === megaMenuOpen)?.image} />
        )}
      </div>
    </>
  );
};

export default Navbar;


import React, { useRef, useState,useEffect } from 'react'
import { FaTruck } from "react-icons/fa";
import Logo from '../public/shop-high-resolution-logo-transparent (1).png'
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5"
import Darck from "./pages/home-Component/Darck"
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav({searchbtn,theme,setTheme,handleThemeSwitch}) {
  const [search , setSearch] = useState()
  const { user, isAuthenticated, loginWithRedirect , logout} = useAuth0();
  const colorRef = useRef(null);
  
  const scorRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        scorRef.current.style.display = 'none';
        
      } else {
        scorRef.current.style.display = 'flex';
      
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  return (
    <div id='Nav' ref={colorRef} className='w-full z-50 transition-all duration-300 fixed top-0 '>  
    <marquee direction="right" ref={scorRef}  className='grid grid-cols-2  pt-[10px] pr-[30px] w-full bg-black transition-all duration-300'>
    <div className='text-amber-400 text-[32px] flex gap-5 '>
      <FaTruck />  
      
      <div className='ml-[10px] text-white text-[16px] font-semibold'> 
      
       FREE Shiping when Shopping upto $1000 </div>
       <FaTruck />  

      </div>
            </marquee>
  <div className={`w-full shadow-xl  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='md:grid  md:grid-cols-3 flex md:flex-col md:justify-center items-center  justify-between w-full py-[10px] px-[30px] border-b'>

        <div className='flex gap-5 items-center'>
          <img src={Logo} alt="Logo" className='w-[50px] h-[50px]    md:w-[100px] md:h-[100px]' />
        </div>
        <div className='hidden md:flex justify-center  items-center '>
          <input type='text' value={search}  placeholder='Enter The Prouduct Name ' className='outline-none rounded-l-2xl w-[300px]  py-[5px] px-[30px] border-2 border-blue-700 text-black' onChange={(e) => {
setSearch(e.target.value)}
          }   ></input>
          <button onClick={() => searchbtn(search)} className='bg-blue-700 rounded-r-2xl font-bold text-white border-2 border-blue-700 hover:bg-blue-800 transition-all duration-[300] py-[5px] px-[30px] cursor-pointer'>Search</button>

        </div>
        <div className='flex md:flex-row  md:ml-[100px] gap-5   justify-between  items-center'>
          <div className='w-full'>
          {
            isAuthenticated && (
              <div className='flex gap-5 justify-center items-center text-[16px] w-full'>
            {/*   <div className='overflow-hidden border-2 border-blue-600 rounded-full cursor-pointer w-[80px]  '> 
              <img src={user.picture} alt={user.name} className="w-full transition-all duration-300 " />
              </div>
                */}  
            <p className='md:text-[16px] w-full text-[12px]'>Hello, {user.name}</p>
            </div>
            )
          }
        </div>
          <div className='flex gap-3  justify-between items-center text-[22px] text-blue-700'>
            <Link to="/Liks" className='cursor-pointer'> <FaRegHeart /> </Link>
            <Link to="/Cart"  className='cursor-pointer'> <IoBagCheckOutline /></Link  >
          
          
          </div>
          

        </div>
        </div>

        <div className='md:flex  items-center justify-center w-full py-[10px] px-[30px] border-b'>
        <button
        className='md:hidden p-4 focus:outline-none'
        onClick={toggleMenu}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className='md:flex md:justify-between justify-center items-center '>
  
      <ul className={`md:flex justify-center items-center  gap-5 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li className='flex justify-center items-center my-1'>
      <div className='flex md:hidden justify-center items-center py-[10px] '>
        <input type='text' value={search}  placeholder='Enter The Prouduct Name ' className='outline-none w-[300px]  py-[5px] px-[30px] border-2 border-blue-700 text-black' onChange={(e) => {
setSearch(e.target.value)}
          }   ></input>
          <button onClick={() => searchbtn(search)} className='bg-blue-700 font-bold text-white border-2 border-blue-700 hover:bg-blue-800 transition-all duration-[300] py-[5px] px-[30px] cursor-pointer'>Search</button>
        </div>
        </li>
        <li className='flex justify-center items-center my-1'>
          <Link to="/" className='hover:text-blue-700 cursor-pointer font-bold'>Home</Link>
        </li>
        <li className='flex justify-center items-center my-1'>
          <Link to="/product" className='hover:text-blue-700 cursor-pointer font-bold'>Product</Link>
        </li>
        <li className='flex justify-center items-center my-1'>
          <Link to="/about" className='hover:text-blue-700 cursor-pointer font-bold'>About</Link>
        </li>
        <li className='flex justify-center items-center my-1'>
          <Link to="/contact" className='hover:text-blue-700 cursor-pointer font-bold'>Contact</Link>
        </li>
          <li>
        <div className="flex justify-center items-center gap-5 my-1 md:ml-[900px]">

<Darck colorRef={colorRef}  theme={theme} setTheme={setTheme} handleThemeSwitch={handleThemeSwitch}/>
{
  isAuthenticated ?
  <button  className='flex gap-5 items-center text-[22px]  hover:text-blue-700 cursor-pointer' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><MdOutlineLogout /></button>
  :
  <button  className='flex gap-5 items-center text-[22px]  hover:text-blue-700 cursor-pointer' onClick={() => loginWithRedirect()}><MdOutlineLogin /></button>
}

  
</div>
</li>
      </ul>

    </div>
                  

            

          </div>
      
      </div>
      

      </div>      
        


    
  )
}

export default Nav

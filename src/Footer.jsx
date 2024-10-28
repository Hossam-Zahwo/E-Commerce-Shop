import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Logo from '../public/shop-high-resolution-logo-transparent (1).png'
function Footer({theme,setTheme}) {
  return (
    <div className={`m-0 p-0 w-full absolute z-30 box-border border-t-2 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="py-[30px] px-[40px] w-full grid grid-cols-1 md:grid-cols-3">
          <div className="max-w-[100%] flex flex-col justify-center items-center ">
              <div>
              <img src={Logo} alt="" className='w-[140px]'/>
              </div>
              <div>
                  <p className="mt-[20px] text-[16px] ">Lorem ipsum dolor sit amet consectetur.</p>
                  <div className="flex justify-center items-center mt-[20px]">
                    <li className="ml-[20px] border-2 list-none p-[10px] shadow-2xl cursor-pointer transition-all duration-300 hover:bg-sky-600"><FaFacebookF /></li>
                    <li className="ml-[20px] border-2 list-none p-[10px] shadow-2xl cursor-pointer transition-all duration-300 hover:bg-sky-600"><FaInstagram /></li>
                    <li className="ml-[20px] border-2 list-none p-[10px] shadow-2xl cursor-pointer transition-all duration-300 hover:bg-sky-600"><FaXTwitter /></li>
                    <li className="ml-[20px] border-2 list-none p-[10px] shadow-2xl cursor-pointer transition-all duration-300 hover:bg-sky-600"><FaYoutube /></li>
              
                  </div>
              </div>
          </div>
          <div className=" mt-[30px] flex flex-col justify-center items-center ">
            <h2 className="text-[32px] ">My Account</h2>
            <ul className="mt-[10px] ml-[20px] flex flex-col justify-center items-center">
              <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Account</li>
              <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Drder</li>
              <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Cart</li>
              <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Shipping</li>
              <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">return</li>
            </ul>
          </div>
          <div className=" mt-[30px] flex flex-col justify-center items-center ">
          <h2 className="text-[32px] ">
              Pages
            </h2>
            <ul className="mt-[10px] ml-[20px] flex flex-col justify-center items-center">
            <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Home</li>
            <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">About</li>
            <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Contact</li>
            <li className="mt-[5px] text-[14px] transition-all duration-300 list-none hover:text-sky-600 my-2 cursor-pointer">Terma & Condition</li>
            
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer

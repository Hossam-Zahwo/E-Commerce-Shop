import { Link } from 'react-router-dom';
import { FaRegHeart, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
function Cart({ theme, setLiks, liks }) {


  return (
    <div className={`mt-[180px] mx-0 container py-20 h-full px-10 font-sans border-box ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>


      
      {liks.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[32px] uppercase font-light mb-[30px]">Liks is empty</h2>
          <Link to="/product" className={`py-[10px] px-[30px] ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}> Shop Now</Link>
        </div>
      )}
      <div className='md:grid md:grid-cols-4 gap-5 m-0 flex flex-col justify-center items-center'>
        {liks.map((curElm) => (
            <div key={curElm.id} className='box cursor-pointer border-2 flex flex-col justify-center items-center w-[280px] h-[350px] ml-6 transition-all duration-300 hover:shadow-2xl'>
            <div className='img-box flex justify-center items-center w-full h-[200px]'>
              <img src={curElm.image} alt={curElm.title} className='w-[300px] h-[165px]' />
              <div className='icon relative right-[-50px] transition-all duration-300 z-10'>
                
              
                  <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() => { AddtoCart(curElm) }}>
                  <IoCartOutline />
                </li>
              
              
                <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() => { view(curElm) }}>
                  <IoEyeOutline />
                </li>
              
                <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() =>{ LiksProducts(curElm)}}>
                  <FaRegHeart />
                </li>
              
              </div>
            </div>
            <div className='detail font-normal w-full flex flex-col justify-start items-start ml-5'>
              <p className='text-[14px] text-slate-600'>{curElm.Cat}</p>
              <h3 className='text-[18px] mr-[5px]'>{curElm.title}</h3>
              <h4 className='text-[20px]'>${curElm.price}</h4>
            </div>
          </div>
        ))}
          
      </div>
  
    
    </div>
  );
}

export default Cart;

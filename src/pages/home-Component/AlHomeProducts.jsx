import React, { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Productdefult from '../product-Component/ProductDefault';
export default function AlHomeProducts({view,detail, close, setClose,theme,AddtoCart,LiksProducts}) {
  const {  isAuthenticated, loginWithRedirect } = useAuth0();
  const [prod,setProd] = useState(Productdefult)


  const [currentRow, setCurrentRow] = useState(0);
  const itemsPerRow = 4;

  const getVisibleProducts = () => {
    const startIndex = currentRow * itemsPerRow;
    const endIndex = startIndex + itemsPerRow;
    return prod.slice(startIndex, endIndex);
  };

  const nextRow = () => {
    if ((currentRow + 1) * itemsPerRow < prod.length) {
      setCurrentRow(currentRow + 1);
    }
  };

  const previousRow = () => {
    if (currentRow > 0) {
      setCurrentRow(currentRow - 1);
    }
  };
  return (
    <div className='container:m-0 flex flex-col justify-center items-center transition-all duration-300'>
      <h1 className='font-bold text-[55px] my-10'>Top Products</h1>
      <div className='md:grid md:grid-cols-4 gap-5 m-0 flex flex-col justify-center items-center'>
        {getVisibleProducts().map((curElm) => (
          <div key={curElm.id} className='box cursor-pointer border-2 border-white flex flex-col justify-center items-center w-[280px] h-[350px] ml-6 transition-all duration-300 hover:shadow-2xl'>
            <div className='img-box flex justify-center items-center w-full h-[200px]'>
              <img src={curElm.image} alt={curElm.title} className='w-[300px] h-[160px]' />
              <div className='icon relative right-[-40px] transition-all duration-300 z-10'>
              {
                  isAuthenticated ?
                  <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() => { AddtoCart(curElm) }}>
                  <IoCartOutline />
                </li>
                :
                <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() => loginWithRedirect()}>
                <IoCartOutline />
              </li>
                }
                <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() => { view(curElm) }}>
                  <IoEyeOutline />
                </li>
                {
                  isAuthenticated ?
                <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() =>{ LiksProducts(curElm)}}>
                  <FaRegHeart />
                </li>
                :
                <li className='p-[10px] border-2 text-[18px] list-none cursor-pointer shadow-2xl bg-white text-black transition-all duration-300 hover:bg-sky-600 hover:text-white' onClick={() => loginWithRedirect()}>
                  <FaRegHeart />
                </li>
                  }
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
      <div className="flex mt-4">
        <button onClick={previousRow} className="text-[30px] p-2 mx-2 rounded-full"><FaArrowCircleLeft /></button>
        <button onClick={nextRow} className="text-[30px] p-2 mx-2 rounded-full"><FaArrowCircleRight /></button>
        </div>
      </div>
  )
}

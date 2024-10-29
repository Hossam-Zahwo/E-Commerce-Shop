import React, { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { FaRegHeart, FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import ProductDefault from './product-Component/ProductDefault';
import { useAuth0 } from "@auth0/auth0-react";
function Product({ prod, setProd, detail, view, close, setClose, theme, setTheme, AddtoCart,LiksProducts }) {
  const {  isAuthenticated, loginWithRedirect } = useAuth0();
  // Product filter
  const filterProduct = (category) => {
    const updatedProducts = ProductDefault.filter((x) => x.Cat === category);
    setProd(updatedProducts);
  };

  const allProducts = () => setProd(ProductDefault);
  const [currentRow, setCurrentRow] = useState(0);
  const itemsPerRow = 6; // Adjust for the number of items per two rows

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
    <div className={`mt-[180px] shadow-2xl py-20 h-full font-sans border-box flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {close ? (
        <div className='flex justify-center items-center'>
          <div className={`bg-[rgb(0,0,0,0.24)] fixed z-50 w-full block h-[120%] border-2 border-black`}>
            <div className={`mt-60 ml-[15%] pb-14 w-[900px] h-[500px] rounded-md ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <button onClick={() => setClose(false)} className='rounded-md p-1 bg-red-500 text-white shadow-2xl ml-[97.3%]'>
                <IoMdCloseCircleOutline />
              </button>
              <div className="flex justify-center items-center py-[20px] px-[30px]">
                {detail.map((curElm) => (
                  <div key={curElm.id} className='box w-[700px] cursor-pointer flex justify-center items-center rounded-md h-[400px] ml-6 transition-all duration-300 hover:shadow-2xl'>
                    <div className='img-box flex justify-center items-center bg-slate-300 w-full h-[400px]'>
                      <img src={curElm.image} alt={curElm.title} className='w-[300px] h-[300px]' />
                    </div>
                    <div className='detail font-normal w-full flex flex-col justify-start items-start ml-5 gap-5'>
                      <h3 className='text-[22px] mr-[5px]'>{curElm.title}</h3>
                      <p className='text-[20px] text-slate-600'>{curElm.Cat}</p>
                      <h4 className='text-[20px]'>$ {curElm.price}</h4>
                      <button className='border rounded-md py-2 px-5 text-white bg-black transition-all duration-300 hover:shadow-2xl' onClick={() => { AddtoCart(curElm) }}>Add To Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className='w-full py-7 font-sans border-box flex flex-col justify-center items-center'>
        <h3 className="text-[42px] tracking-[1px] uppercase font-light"># Products</h3>
        <p className="my-[10px] text-slate-600">Home . Products</p>
        <div className="font-sans pr-[30px] px-[40px] w-full">
          <div className="grid grid-col-1   md:flex justify-start items-start w-full">
            <div className="py-[20px] w-[100%] mr-5 md:w-[15%] flex justify-center items-center flex-col">
              <h3 className="text-[16px] uppercase font-semibold">Categories</h3>
              <ul className="mt-[10px] flex justify-center items-center flex-col text-[14px] md:text-[18px] gap-5">
                <li className="mt-[20px] cursor-pointer whitespace-nowrap  " onClick={allProducts}>All Products</li>
                <li className='grid grid-cols-4 md:flex md:flex-col'>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Phone")}>Phone</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Phone")}>Phone</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Laptop")}>Laptop</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Puds")}>Puds</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("TV")}>TV</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Smart Watch")}>Smart Watch</li>
                <li className="mt-[20px] cursor-pointer whitespace-nowrap mx-5" onClick={() => filterProduct("Speakers")}>Speakers</li>
                </li>
              </ul>
            </div>
            <div className="md:w-[85%] flex flex-col justify-center items-center">
      <div className="md:grid md:grid-cols-3 gap-5">
        {getVisibleProducts().map((curElm) => (
          <div key={curElm.id} className='box cursor-pointer border-2 flex flex-col justify-center items-center w-[240px] md:w-[280px] h-[350px] ml-6 transition-all duration-300 hover:shadow-2xl'>
            <div className='img-box flex justify-center items-center w-full h-[200px]'>
              <img src={curElm.image} alt={curElm.title} className='w-[300px] h-[165px]' />
              <div className='icon relative right-[-50px] transition-all duration-300 z-10'>
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
         </div>
    </div>
          </div>

        </div>
    
  )
}

export default Product

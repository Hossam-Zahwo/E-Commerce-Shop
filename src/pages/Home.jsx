import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import HomeProduct from '../pages/home-Component/HomeProduct';
import { FaTruck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import Serv from './home-Component/Serv';
import AlHomeProducts from './home-Component/AlHomeProducts';
import HomeAdds from './home-Component/HomeAdds';
import { IoMdCloseCircleOutline } from "react-icons/io";
;
function Home({view,theme,setTheme,detail , close,setClose,AddtoCart,LiksProducts}) {
  const products =[
    {
      id:1,
      image:"/images/all-nova-12i.png" ,
      title:'23 products'
    },
    {
      id:2,
      image:"/images/LENOVO-V15-G4-Laptop.png" ,
      title:'23 products'
    },
    {
      id:3,
      image:"/images/png-clipart-apple-watch-apple-watch-white-removebg-preview.png" ,
      title:'23 products'
    },
    {
      id:4,
      image:"/images/png-transparent-television-set-led-backlit-lcd-aoc-international-smart-tv-led-miscellaneous-television-rectangle-removebg-preview.png" ,
      title:'23 products'
    },

  ]


  const servses =[
    {
      id:1,
      icon:<FaTruck/>,
      title:  'Free Shipping',
      desc: 'Order abrove $1000'
    },
    {
      id:2,
    
      icon:  <FaDollarSign /> ,
      title:  'Return & Refund'  ,
      desc:   '  Money Back Gaurenty'
    },
    {
      id:3,
      icon:    <CiPercent /> ,
      title:  '  Member Discount'  ,
      desc:   'On every Order'
    },
    {
      id:4,
      icon:    <FaHeadphones /> ,
      title: '  Customer Support'   ,
      desc:   'Every Time Call Support'
    },
  ]
  
  return (
    <>

    <div className={`mt-[180px] py-20 h-full px-10  font-sans border-box ${theme === 'dark' ? 'bg-black text-white shadow-lg shadow-white ' : 'bg-white text-black'}`}>
    {
            close ?
            <div className='flex justify-center items-center '>
            <div   className={`bg-[rgb(0,0,0,0.24)]  fixed z-50 w-full block h-[120%]   border-2 border-black`}>
              
            <div   className={` mt-60 ml-[15%] pb-14  w-[900px] h-[500px] rounded-md  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
              
      
                <button onClick={()=>setClose(false)} className=' rounded-md p-1 bg-red-500 text-white shadow-2xl ml-[97.3%]'><IoMdCloseCircleOutline /></button>
                <div className="flex justify-center items-center py-[20px] px-[30px]"> 
                  {
                    detail.map((curElm,id)=>{
                      return(
                        <div key={curElm.id} className='box w-[700px] cursor-pointer flex  justify-center items-center rounded-md h-[400px] ml-6 transition-all duration-300 hover:shadow-2xl  ' >
                  <div className='img-box flex  justify-center items-center bg-slate-300 w-full h-[400px]  '>
                    <img src={curElm.image} alt={curElm.title} className='w-[300px] h-[250px] '  />
                
                  </div>
      
                  <div className='detail font-normal w-full flex flex-col justify-start items-start ml-5 gap-5'>
                        
                          <h3 className='text-[22px] mr-[5px] '>{curElm.title}</h3>
                          <p className='text-[20px] text-slate-600 transform-cpu'>{curElm.Cat}</p>
                          <h4 className='text-[20px] '>$ {curElm.price}</h4>
                          <button className='border rounded-md py-2 px-5 dar    text-white bg-black transition-all duration-300  hover:shadow-2xl' >Add To Car</button>
                  </div>
                  
      
            </div> 
                      )
                    })
                  }
                  </div>
              </div>
            </div>
          </div>
          : null
          }
       <div className='w-[100%] grid grid-cols-1 md:grid-cols-2  bg-slate-300 container:m-0'>
            <div className='flex flex-col justify-center  items-center w-[100%]  px-5'>
              <div className='flex justify-center items-center md:items-start my-16 flex-col  w-[100%] md:w-[70%] gap-10'>
                <h2 className='tracking-wide text-[35px] md:text-[45px] '>  The Best Note Book  Colletion  2024</h2>
              
              
                  <Link to='/product' className='hidden md:flex justify-center items-center w-52 text-gray-700 gap-1 bg-white p-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-500'>Shop  <FaArrowRight  className='transform transition-transform duration-500 hover:translate-x-4'/></Link>
                  
                </div>
            </div>
            <div className='w-[100%] flex flex-col justify-center items-center'>
              <img src="../images/unnamed__1_-removebg-preview.png" alt="" />
              <Link to='/product' className='flex md:hidden justify-center items-center my-10 w-52 text-gray-700 gap-1 bg-white p-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-500'>Shop  <FaArrowRight  className='transform transition-transform duration-500 hover:translate-x-4'/></Link>
            </div>
       </div>
            <HomeProduct products={products}/>

            <Serv servses={servses}/>

            <AlHomeProducts view={view} detail={detail} theme={theme}  close={close} setClose={setClose} AddtoCart={AddtoCart} LiksProducts={LiksProducts}/>

            <HomeAdds/>

          
            
    </div>

    </>
  )
}

export default Home

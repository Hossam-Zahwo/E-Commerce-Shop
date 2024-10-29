import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Logo from '/images/shop-high-resolution-logo-transparent (1).png'
function About({ theme }) {
  return (
    <div className={`mt-[180px]  h-full p font-sans border-box ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className=' h-[800px] py-56 w-full flex justify-center items-center  bg-[url("/images/staor.jpg")] bg-center bg-cover bg-no-repeat  bg-fixed container:m-0'>
        <div className='flex flex-col justify-center items-center mt-60  px-5'>
          <div className='flex justify-center items-center md:items-center  flex-col w-[100%]  gap-10'>
          <div className='flex gap-5 items-center'>
          <img src={Logo} alt="Logo" className='w-[100px] h-[100px]' />
        </div>
            <h2 className='tracking-wide text-[35px] md:text-[45px] uppercase text-black text-center'>Best site to sell electronics</h2>
            <Link to='/product' className='hidden md:flex justify-center items-center w-52 text-gray-700 gap-1 bg-white p-2 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all duration-500'>
              Shop <FaArrowRight className='transform transition-transform duration-500 hover:translate-x-4' />
            </Link>
          </div>
          <div className={`flex justify-center items-center h-[400px] mt-40 mx-5 md:mx-32 border-2 border-gray-600 rounded-t-lg  ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
              <div className='flex flex-col justify-center items-center text-center w-[80%]  ' >
                <h2 className='text-[25px] md:text-[35px] uppercase '>About Us</h2>
                <p className='text-[18px] pb-28 md:text-[20px] text-gray-700
                '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestib
                ulum magna sed, convallis ex. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Integer posu
                erat nonummy ultrices.</p>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

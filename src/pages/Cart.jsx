import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai";

function Cart({ theme, setCart, cart }) {
  // Increase quantity
  const incqty = (prod) => {
    const exist = cart.find((x) => x.id === prod.id);
    setCart(cart.map((curElm) =>
      curElm.id === prod.id ? { ...exist, qty: exist.qty + 1 } : curElm
    ));
  };
// dec qty 
const decqty = (prod) => {
  const exist = cart.find((x) => x.id === prod.id);
  setCart(cart.map((curElm) =>
    curElm.id === prod.id ? { ...exist, qty: exist.qty - 1 } : curElm
  ));
};

  // Remove product
  const removeproduct = (prod) => {
    const exist = cart.find((x) => x.id === prod.id);
    if (exist) {
      setCart(cart.filter((x) => x.id !== prod.id));
    }
  };
  // total price
  const TotalPrice = cart.reduce((price, itme) => price + itme.qty * itme.price, 0).toFixed(0);

  return (
    <div className={`mt-[180px] mx-0 container py-20 h-full px-10 font-sans border-box ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      {cart.length === 0 && (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl uppercase font-light mb-8">Cart is empty</h2>
          <Link to="/product" className={`py-3 px-6 ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}> Shop Now</Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cart.map((curElm) => (
          <div key={curElm.id} className={`w-full my-4 box cursor-pointer flex flex-col justify-center items-center rounded-md h-[300px] transition-all duration-300 hover:shadow-2xl ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}>
            <div className='flex justify-end items-end w-full rounded-md mx-3'>
              <button onClick={() => removeproduct(curElm)} className='bg-red-600 rounded text-white'><AiOutlineClose /></button>
            </div>
            <div className='img-box flex justify-center items-center w-full h-[300px]'>
              <img src={curElm.image} alt={curElm.title} className='w-full md:w-[250px] lg:w-[300px] h-[165px]' />
              <div className='detail font-normal w-full flex flex-col justify-end items-center px-3 gap-5'>
                <h4 className='text-md md:text-lg text-slate-600'>{curElm.Cat}</h4>
                <p className='text-lg md:text-xl'>Price : ${curElm.price}</p>
                <div className='flex'>
                  <button onClick={() => incqty(curElm)} className="bg-green-500 hover:bg-green-700 mx-2 text-white font-bold py-2 px-4 rounded">+</button>
                  <input type="text" value={curElm.qty} readOnly className='text-center text-black text-lg md:text-xl w-[50px] rounded' />
                  <button onClick={() => decqty(curElm)} className="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-2 px-4 rounded">-</button>
                </div>
                <h3 className='uppercase text-md md:text-lg'>Sub Total : ${curElm.price * curElm.qty}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className={`flex flex-col justify-center items-center h-[200px] ${theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white'}`}>
          <h2 className='text-xl md:text-2xl uppercase'> $ {TotalPrice}</h2>
          <button className='mt-5 py-2 px-4 bg-blue-700 flex justify-center items-center'> Checkout</button>
        </div>
      )}
    </div>
  );
  

}

export default Cart;

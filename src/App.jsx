import './App.css';
import Nav from './Nav';
import React, { useState, useRef, useEffect } from 'react';
import Footer from './Footer';
import ProductDefault from './pages/product-Component/ProductDefault';
import { Route, Routes } from 'react-router-dom';
import Product from './pages/product';
import Home from './pages/Home';
import Contact from './pages/contact';
import Cart from './pages/Cart';
import Liks from './pages/Liks';
import About from './pages/about';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
function App() {
  // Add To Cart
  const [cart, setCart] = useState([]);
  const [liks, setLiks] = useState([]);

  const colorRef = useRef(null);

  // Product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);

  // Product filter
  const [prod, setProd] = useState(ProductDefault);
  const searchbtn = (category) => {
    const filteredProducts = ProductDefault.filter((x) => x.Cat === category);
    setProd(filteredProducts);
  };

  // Product Detail
  const view = (prod) => {
    setDetail([{ ...prod }]);
    setClose(true);
  };

  const AddtoCart = (prod) => {
    const exsit = cart.find((x) => x.id === prod.id);
    if (exsit) {
      alert("Product already in cart");
    } else {
      setCart([...cart, { ...prod, qty: 1 }]);
      alert('Product is added to cart');
    }
  };

  const LiksProducts = (prod) => {
    const exsit = liks.find((x) => x.id === prod.id);
    if (exsit) {
      alert("Product already in liks");
    } else {
      setLiks([...liks, { ...prod, qty: 1 }]);
      alert('Product is added to liks');
    }
  };

  // Theme switch
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };


  const storage = getStorage(); 
  const storageRef = ref(storage, 'path/to/your-image.jpg');
   getDownloadURL(storageRef).then((url) => { const img = document.getElementById('your-img-id'); img.src = url; }).catch((error) => { console.error("Error getting download URL:", error); });
  return  (
    <React.Fragment>
      <div className={`h-full w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Nav
          searchbtn={searchbtn}
          colorRef={colorRef}
          theme={theme}
          setTheme={setTheme}
          handleThemeSwitch={handleThemeSwitch}
          setClose={setClose}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                view={view}
                theme={theme}
                setTheme={setTheme}
                detail={detail}
                close={close}
                setClose={setClose}
                AddtoCart={AddtoCart}
                LiksProducts={LiksProducts}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Product
                prod={prod}
                setProd={setProd}
                detail={detail}
                view={view}
                close={close}
                setClose={setClose}
                theme={theme}
                setTheme={setTheme}
                handleThemeSwitch={handleThemeSwitch}
                AddtoCart={AddtoCart}
                LiksProducts={LiksProducts}
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart theme={theme} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/Liks"
            element={<Liks theme={theme} liks={liks} setLiks={setLiks} />}
          />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route path="/about" element={<About theme={theme} />} />
        </Routes>
      
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </React.Fragment>
  );
};

export default App;
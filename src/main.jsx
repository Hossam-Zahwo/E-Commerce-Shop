import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { initializeApp } from "firebase/app";
import App from './App';
import './index.css';
import Home from './pages/Home';
import Product from './pages/product';
import About from './pages/about';
import Contact from "./pages/contact";
import Cart from './pages/Cart';
import Liks from './pages/Liks';

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: "AIzaSyDs9J4ZxHxX3EpZzifBJcI58kuuUrZXOcQ",
  authDomain: "cvmaster-d03a2.firebaseapp.com",
  projectId: "cvmaster-d03a2",
  storageBucket: "cvmaster-d03a2.appspot.com",
  messagingSenderId: "339395635326",
  appId: "1:339395635326:web:5b16bfb44e58b00c9a902f"
};
initializeApp(firebaseConfig);

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/liks", element: <Liks /> }
    ]
  }
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-pe4fr1hbs3xchk8b.uk.auth0.com"
    clientId="vqwTuHGl2S6EWUCcOSPXEWsprlUNKm5R"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Auth0Provider>
);

// Display an image from Firebase Storage
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'gs://e-commerce-903d3.appspot.com/your-image.jpg');

getDownloadURL(storageRef).then((url) => {
  const img = document.getElementById('your-img-id');
  if (img) {
    img.src = url;
  }
}).catch((error) => {
  console.error("Error getting download URL:", error);
});

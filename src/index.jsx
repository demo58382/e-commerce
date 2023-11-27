import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { APIProvider } from "./context/productContext.jsx";
import { SingleAPIProvider } from "./context/SngProContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import KeepAlive from './keepalive';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <APIProvider>
      <SingleAPIProvider>
        <CartProvider>
          <App />
          <KeepAlive />
        </CartProvider>
      </SingleAPIProvider>
    </APIProvider>
  </React.StrictMode>
)
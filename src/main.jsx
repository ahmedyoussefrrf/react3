import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/flowbite/dist/flowbite.min.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { CounterContextProvider } from './context/CounterContext.jsx';
import UserContextProvider from './context/UserContext.jsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CartNumsProvider from './context/CartNumContext.jsx';

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
 
  <CartNumsProvider>
  <QueryClientProvider client={queryClient}>
  <UserContextProvider>
  <CounterContextProvider>
     <Toaster/>
      <App />
  </CounterContextProvider>
  </UserContextProvider>
</QueryClientProvider>
</CartNumsProvider>

)

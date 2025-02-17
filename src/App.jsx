import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'
import Register from './components/Register'
import Products from './components/Products'
import Categoris from './components/Categoris'
import Notfaund from './components/Notfaund'
import Prands from './components/Brands'
import Protectedroute from './components/Protectedroute'
import ProductDetails from './components/ProdoctDetals'
import Loding from './components/Loding'
import Payement from './components/Payement'
import ForgetPass from './components/ForgetPass'
import WishList from './components/WishList'


export default function App() {




  let routes = createHashRouter([
  {path:'/',element:<Layout></Layout>,children:[
    {index:true,element:<Home></Home>},
    {path:'/cart',element:<Protectedroute><Cart></Cart></Protectedroute>},
    {path:'/Login',element:<Login></Login>},
    {path:'/register',element:<Register></Register>},
    {path:'/productdetails/:id/:catid',element:<ProductDetails></ProductDetails>},
    {path:'/products',element:<Products></Products>},
    {path:'/prands',element:<Prands></Prands>},
    {path:'/wishlist',element:<WishList></WishList>},
    {path:'/forgetpass',element:<ForgetPass></ForgetPass>},
    {path:'/categoris',element:<Categoris></Categoris>},
    {path:'*',element:<Notfaund></Notfaund>},

  ]}
  ])
  return (
    <RouterProvider router = {routes} ></RouterProvider>
  )
}

import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './componnents/layout'
import Home from './componnents/Home'
import Cart from './componnents/Cart'
import Login from './componnents/Login'
import Register from './componnents/Register'
import Products from './componnents/Products'
import Categoris from './componnents/Categoris'
import Notfaund from './componnents/Notfaund'
import Prands from './componnents/Brands'
import Protectedroute from './componnents/Protectedroute'
import ProductDetails from './componnents/ProdoctDetals'
import Loding from './componnents/Loding'
import Payement from './componnents/Payement'
import ForgetPass from './componnents/ForgetPass'
import WishList from './componnents/WishList'


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

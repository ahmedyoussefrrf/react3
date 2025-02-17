import React, { useContext, useRef } from 'react'
import logo from '../assets/finalProject assets/images/freshcart-logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { userToken } from '../context/UserContext'
import { CartNums } from '../context/CartNumContext'
// import {CartNumsProvider} from '../context/CartNumContext'



export default function Navbar() {

  let {cartNum}= useContext(CartNums)

  let ref = useRef(null)

  let {isLogin,setLogin} = useContext(userToken)

  let navigate = useNavigate()

function logout() {
  localStorage.removeItem('token')
  setLogin(null)
  navigate('/login')
}

function toggeltheme()
{
  if(ref.current.checked)
  {
    document.body.classList.add('dark')

  }
  else{
    document.body.classList.remove('dark')
  }
  
}


  return (
  

<nav className=" bg-light-color border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center w-[20%] space-x-3 rtl:space-x-reverse">
      <img src={logo}  alt="Flowbite Logo" />
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center 
    p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100
     focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
      dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-[80%] lg:flex justify-between " id="navbar-default">
      <ul className="font-medium flex flex-col p-4 lg:p-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >Home</Link>
        </li>

        {isLogin&&
        <li>
          <Link to="/cart" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >Cart{cartNum}</Link>
        </li>}
        <li>
          <Link to="/categoris" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >Categoris</Link>
        </li>
        <li>
          <Link to="/prands" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >prands</Link>
        </li>
        <li>
          <Link to="/products" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >Products</Link>
        </li>
        <li>
          <Link to="/wishlist" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >wishlist</Link>
        </li>
  
      </ul>
      <ul className="font-medium flex flex-col p-4 lg:p-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <a href ="" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" ></a>
          <i className='fa-brands fa-facebook' ></i>
        </li>
        <li>
          <a href ="" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" ></a>
          <i className='fa-brands fa-youtube' ></i>
        </li>
        <li>
          <a href ="" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" ></a>
          <i className='fa-brands fa-google' ></i>
        </li>
        {isLogin?
        <li>
          <span className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" onClick={logout} >logout</span>
        </li>:
        <>
         <li>
          <Link to="/login" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >Login</Link>
        </li>
        <li>
          <Link to="/register" className="block py-2 text-gray-600 dark:text-white lg:dark:text-blue-500" >Register</Link>
        </li>
        </>
        }
        <li>
          <div>
         <label className="relative inline-flex cursor-pointer items-center">
  <input id="switch-3" type="checkbox" ref={ref} onChange={toggeltheme} className="peer sr-only" />
  <label htmlFor="switch-3" className="hidden" />
  <div className="peer h-4 w-11 rounded border bg-slate-200 after:absolute after:-top-1 after:left-0 after:h-6 after:w-6 after:rounded-md after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-300 peer-checked:after:translate-x-full peer-focus:ring-green-300" />
</label>

          </div>
        </li>
  
      </ul>
    </div>
  </div>
</nav>


  )
}

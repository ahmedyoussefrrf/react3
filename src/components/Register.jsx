
import React, { useContext, useState } from 'react'
import axios from 'axios'
import {  useFormik } from 'formik'
import { Await } from 'react-router-dom'
import * as Yup from 'yup' 
import { userToken } from '../context/UserContext'

export default function Register() {

 
 
  let  [msgErr,setMsgErr] = useState ('')
  let  [loding,setLoding] = useState (false)
 let {setLogin} = useContext (userToken)

 async function handelRegister (values) {

  
  setLoding(true)
 try {
  let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
 setLoding(false)
 setMsgErr('')
 if (data.message==='success')
  {setLogin(data.token)}

  setLogin(data.token)
 localStorage.setItem('token',data.token)

 } catch (error) {
  setMsgErr(error.response.data.message);
  setLoding(false)
 }
  
}




let  validationSchema = Yup.object().shape({
name:Yup.string().min(3,'min lenght is 3').max(5,'too long').required('filed is required'),
email:Yup.string().required().email(),
password:Yup.string().required().matches(/^[A-Z][a-z0-9]{5}$/),
rePassword:Yup.string().required().oneOf([Yup.ref('password')]),
phone:Yup.string().required().matches(/^(01)[0-25]\d{8}$/)
})

let formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
    phone:''

  },


  validationSchema 
  ,
  onSubmit: handelRegister
  
})



  return (
    <div>
      <h2>Register</h2>
      
<form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
<div className="relative z-0 w-full mb-5 group">
      
      <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "/>
      
    {formik.errors.name && formik.touched.name ?
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{formik.errors.name}</span>
  </div>:''
    }
      
      
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
  <div className="relative z-0 w-full mb-5 group">
    <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email } id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    {formik.errors.email && formik.touched.email ?
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{formik.errors.email}</span>
  </div>:''
    }
       {/*errmessssssssss*/}

     {msgErr &&  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{msgErr}</span>
  </div>}
    

  
    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>




  <div className="relative z-0 w-full mb-5 group">
    
    <input type="password"   onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password } id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    
    {formik.errors.password && formik.touched.password?
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{formik.errors.password}</span>
  </div>:''
    }
    
    
    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
    
    <input type="repassword"onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword } id="rePassword" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
    
    {formik.errors.rePassword && formik.touched.rePassword?
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{formik.errors.rePassword}</span>
  </div>:''
    }
    <label htmlFor="repassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>

  
    <div className="relative z-0 w-full mb-5 group">
      <input type="tel"   onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone }
       id="phone" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
       border-gray-300 appearance-none dark:text-white dark:border-gray-600
        dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" 
        placeholder=" " />

{formik.errors.phone && formik.touched.phone ?
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span className="font-medium">{formik.errors.phone}</span>
  </div>:''
    }
      <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500
       dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
        peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600
         peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
   
  <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Submit</button>
</form>
    </div>
  )
}

import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { payementOnline } from '../Apis/Payement'
import { useFormik } from 'formik'

export default function Payement(cartId) {

 let {mutate,data,isSuccess} = useMutation({mutationFn:payementOnline})
 
 function handelForm(values)
 {
    mutate({cartId,shippingAddress:values})
 }

 if(isSuccess)
 {
    window.location.href = data?.data?.session?.url
    
 }

 let formik = useFormik({
    initialValues:{
        details:'',
        phone:'',
        city:'',
    },
    onSubmit:handelForm
 })


  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='m-3' >
           <input type="text" onChange={formik.handleChange} id= 'phone' value={formik.values.phone} />
           <br /> 
           <input type="text" onChange={formik.handleChange} id= 'city' value={formik.values.city} />
           <br /> 

           <input type="text" onChange={formik.handleChange} id= 'details' value={formik.values. details}/> 
           <br /> 

           
        </form>
    </div>
  )
}

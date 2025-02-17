import React, { useContext } from 'react'
import Featuredproducts from './Featuredproducts'
import Heder from './Heder'
import Categoris from './Categoris'
import { Outlet } from 'react-router-dom'
import { counterContext } from '../context/CounterContext'

export default function Home() {

  let {increase,counter} = useContext(counterContext)



  return (
    <div className='container'  >
      <h1 onClick={increase}>{counter}</h1>
    
      <Heder/>
      <Categoris/>
      <Featuredproducts/>
      
    </div>
  )
}

import React from 'react'
import {ColorRing} from 'react-loader-spinner'

export default function Loding() {
  return (
    <div className='fixed flex bottom-0 top-0 right-0 left-0  justify-center items-center  ' >
      <div>
      <ColorRing
         visible={true}
         height="80"
         width="80"
         ariaLabel="color-ring-loading"
         wrapperStyle={{}}
         wrapperClass="color-ring-wrapper"
         colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
  </div>

    </div>
  )
}

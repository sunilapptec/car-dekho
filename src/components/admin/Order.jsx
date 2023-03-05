import React from "react"
import shoppingbag from "../assets/images/shopping-bag.png"
import { Title } from "../common/Title"

export const Order = () => {
  return (
    <>
      <section className='admin-profile mb-10'>
        <Title title='My Order' />
        <div className='content text-center'>
          <div className='items my-5 bg-white p-7 rounded-lg shadow-shadow1 flexCenter flex-col h-[70vh]'>
            <img src={shoppingbag} alt='shoppingbag' className='object-contain w-52' />
            <h1 className='text-3xl my-5 text-indigo-600 font-medium'>No Order Found</h1>
            <button className='primary-btn'>Browse Vehicles</button>
          </div>
        </div>
      </section>
    </>
  )
}

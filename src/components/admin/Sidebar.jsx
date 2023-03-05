import React from "react"
import { NavLink } from "react-router-dom"
import { adminSideBar } from "../assets/data/data"

export const Sidebar = () => {
  return (
    <>
      <div className='flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800'>
        <div className='flex flex-col top-0 left-0 w-full bg-white border-r'>
          <div className='overflow-y-auto overflow-x-hidden flex-grow'>
            <ul className='flex flex-col py-4 space-y-1'>
              {adminSideBar.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.path} className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6'>
                    <span className='inline-flex justify-center items-center ml-4'>{item.icon}</span>
                    <span className='ml-2 text-sm tracking-wide truncate'>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

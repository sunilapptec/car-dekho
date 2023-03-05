import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { mostSearched } from "../../components/assets/data/data"

export const DetailsSidebar = () => {
  return (
    <>
      <div className='filter-card'>
        <div className='p-5'>
          <h2 className='text-lg font-medium' data-aos='fade-left'>
            Trending Maruti Cars
          </h2>
          <div className='category border-b-2 border-gray-200 py-3 flex justify-between' data-aos='fade-left'>
            <button className='text capitalize mr-2 activeLine text-sm'>Popular </button>
            <button className='text capitalize mr-2 text-sm'>Upcoming</button>
            <button className='text capitalize mr-2 text-sm'>All Cars</button>
          </div>

          <div className='mt-5' data-aos='fade-left'>
            {mostSearched.map((car, i) => (
              <div className='box flex mb-5' key={i}>
                <div className='w-24 tab:w-[250px] tab:mr-8 mobile:w-[150px] mr-3'>
                  <NavLink to='/single-page'>
                    <img src={car?.cover} alt='cover' className='tab:rounded-xl' />
                  </NavLink>
                </div>
                <div className='text'>
                  <h3>{car?.name}</h3>
                  <h2 className='text-sm font-medium'>{car?.price}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='see-all border-t-2 border-gray-200 p-3' data-aos='fade-left'>
          <NavLink to='/' className='text-green2 flex items-center text-sm'>
            View All Car <HiArrowLongRight className='ml-3' size={22} />
          </NavLink>
        </div>
      </div>
    </>
  )
}

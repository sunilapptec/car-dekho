import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { newsAndReview } from "../assets/data/data"

export const News = () => {
  return (
    <>
      <section className='filter-card'>
        <div className='containers bg-white border border-1 border-gray-200'>
          <div className='p-5'>
            <h1 className='text-xl font-medium mb-4 capitalize'>News on cars that you like</h1>
            <div className='mt-5 grid2 mobile:gap-5'>
              {newsAndReview.map((item) => (
                <div className='box border border-gray-200 rounded-md flex mobile:flex-col mobile:rounded-xl' key={item.id}>
                  <div className='w-2/5 h-[250px] mobile:w-full'>
                    <img src={item?.cover} alt='cover' className='ImageFit rounded-l-xl mobile:rounded-xl' />
                  </div>
                  <div className='text p-4 w-3/5 mobile:w-full'>
                    <h3>{item?.title}</h3>
                    <p className='text-gray1 my-4 text-[16px] leading-7'>{item?.desc.slice(0, 100)}...</p>
                    <div className='user flex center'>
                      <div className='bg-gray-100 w-12 h-12 rounded-full text-center flexCenter mr-3'>
                        <h1 className='text-2xl'>{item.user.slice(0, 1)}</h1>
                      </div>
                      <div className='name'>
                        <span>{item.user}</span>
                        <br />
                        <label htmlFor='' className='text-gray1 text-sm'>
                          {item.date}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='see-all border-t-2 border-gray-200 mt-5 p-3'>
            <NavLink className='text-green2 flex items-center text-sm'>
              View All Latest News <HiArrowLongRight className='ml-3' size={22} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

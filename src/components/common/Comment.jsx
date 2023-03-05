import React from "react"
import { useState } from "react"
import { AiFillStar, AiOutlineClose } from "react-icons/ai"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { newsAndReview } from "../assets/data/data"
import { Title, TitleMedium } from "./Title"

export const Comment = () => {
  const [model, setModel] = useState(false)

  function open() {
    setModel(!model)
  }

  function close() {
    setModel(null)
  }
  const handleClickClose = () => {
    close()
  }
  const handleClick = () => {
    open()
  }
  return (
    <>
      <div className='key-feature bg-white border border-gray-200 rounded-md my-8'>
        <div className='p-5'>
          <Title title='Write your Comment on Maruti Swift' />
          <input type='text' className='p-3 pl-6 border bottom-2 bg-gray-50 border-gray-200 w-full rounded-lg text-sm focus:ring-2 focus:ring-red-300 focus:outline-none' placeholder='Write a comment...' required />
          <button className='primary-btn shadow-lg mt-4' onClick={handleClick}>
            Post Comment
          </button>

          {newsAndReview.map((item) => (
            <div className='box border border-gray-200 rounded-md flex mt-8' key={item.id} data-aos='zoom-in-right'>
              <div className='text p-4'>
                <div className='user flex center'>
                  <div className='bg-green-100 w-12 h-12 rounded-full text-center flexCenter mr-3'>
                    <h1 className='text-xl'>{item.user.slice(0, 1)}</h1>
                  </div>
                  <div className='name'>
                    <span className='text-sm'>{item.user}</span>
                    <br />
                    <label htmlFor='' className='text-gray1 text-s'>
                      {item.date}
                    </label>
                  </div>
                </div>
                <p className='text-gray1 my-4 text-sm'>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='see-all border-t border-gray-200  px-5 py-4'>
          <NavLink to='/' className='text-green2 flex items-center text-sm'>
            View All <HiArrowLongRight className='ml-3' size={22} />
          </NavLink>
        </div>
      </div>

      <section className={model ? "back_overlay" : "hidden"}>
        <div className={model ? "modelReview tab:w-2/3 tab:left-32 tab:h-[40vh] mobile:w-full mobile:left-0 mobile:h-auto" : "none"}>
          <div className=''>
            <TitleMedium title='Submit Review' />
            <button onClick={handleClickClose} className='absolute top-5 right-5 w-9 h-9 rounded-full bg-red-100 flex items-center justify-center'>
              <AiOutlineClose className='text-black' size={20} />
            </button>
          </div>

          <ul className='stars flex my-5'>
            <li className='star'>
              <AiFillStar size={50} className='text-org' />
            </li>
            <li className='star'>
              <AiFillStar size={50} className='text-org mx-5' />
            </li>
            <li className='star'>
              <AiFillStar size={50} className='text-org' />
            </li>
            <li className='star'>
              <AiFillStar size={50} className='text-org mx-5' />
            </li>
            <li className='star'>
              <AiFillStar size={50} className='text-org' />
            </li>
          </ul>

          <div className='textarea'>
            <textarea className='p-3 pl-6 border bottom-2 bg-gray-50 border-gray-200 w-full rounded-lg text-sm focus:ring-2 focus:ring-red-300 focus:outline-none' placeholder='Write a comment...' required cols='30' rows='5'></textarea>
          </div>
          <button type='submit' className='primary-btn w-full mt-5' onClick={handleClickClose}>
            Submit
          </button>
        </div>
      </section>
    </>
  )
}

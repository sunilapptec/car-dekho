import React from "react"
import { AiFillStar } from "react-icons/ai"
import { useNavigate } from "react-router"
import { newsAndReview } from "../../../components/assets/data/data"
import { TitleMedium } from "../../../components/common/Title"
import { RatingIcons } from "../../../components/review/Review"
import { Title } from "../../../router/router"
import { CurrentProduct } from "./Specifications"

export const DetailsPageReview = () => {
  return (
    <>
      <ReviewButton />
    </>
  )
}
export const ReviewButton = () => {
  const navigate = useNavigate()

  function clickHandle() {
    return navigate("/review")
  }

  const buttonHandler = () => {
    clickHandle()
  }
  return (
    <section className='review'>
      <Title title='Maruti Swift User Reviews' />
      <CurrentProduct />

      <div className='key-feature bg-white border border-gray-200 p-5 rounded-md my-8'>
        <Title title='Rating of Maruti Swift' />
        <div className='flex items-center mobile:flex-col'>
          <div className='flex items-center w-1/3 mobile:w-full'>
            <div className='flex items-center' data-aos='fade-right'>
              <AiFillStar size={35} className='text-yellow' />
              <h1 className='text-5xl ml-2 font-semibold'>4.1</h1>
            </div>
            <div className='flex flex-col text-s ml-5' data-aos='fade-right'>
              <span>Based on</span>
              <span>252 User reviews</span>
            </div>
          </div>
          <div className='buttons w-1/3 mobile:w-full' data-aos='fade-left'>
            <button className='primary-btn shadow-lg w-full' type='button' onClick={buttonHandler}>
              Write Review
            </button>
          </div>
        </div>
      </div>

      <div className='key-feature bg-white border border-gray-200 rounded-md my-8'>
        <div className='p-5'>
          <TitleMedium title='Maruti Swift User Reviews' />

          {newsAndReview.map((item) => (
            <div className='box border border-gray-200 rounded-md flex mt-5' key={item.id} data-aos='zoom-in-right'>
              <div className='text p-4'>
                <button className='text-sm mb-3'>⭐⭐⭐⭐⭐</button>
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

          {newsAndReview.map((item) => (
            <div className='box border border-gray-200 rounded-md flex mt-5' key={item.id} data-aos='zoom-in-right'>
              <div className='text p-4'>
                <button className='text-sm mb-3'>⭐⭐⭐⭐⭐</button>
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
      </div>
    </section>
  )
}

import React from "react"
import { AiFillStar } from "react-icons/ai"
import { BsEmojiSmile } from "react-icons/bs"
import { FaRegSadCry } from "react-icons/fa"
import { FiSmile } from "react-icons/fi"
import { RiEmotionSadLine } from "react-icons/ri"
import { TbMoodSad } from "react-icons/tb"
import { CurrentProduct } from "../../pages/details/detail/Specifications"
import { Title, TitleMedium } from "../common/Title"

export const Review = () => {
  /* const [modelOpen, setModelOpen] = useState(false)

  // popup model
  function clickHandle() {
    return setModelOpen(!modelOpen)
  }

    if (modelOpen) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  } 

  const close = () => {
    setModelOpen(null)
  }
  const handleClick = () => {
    clickHandle()
  }*/
  return (
    <>
      <section className='review py-8'>
        <div className='s max-w-screen-md m-auto'>
          <Title title='Rate & Review Maruti Swift and Win iPhone 12' />

          <CurrentProduct />

          <form className='bg-white border border-gray-200 rounded-md mt-5 p-5'>
            <TitleMedium title='Rate your experience' />
            <div className='mt-5'>
              <RatingIcons title='Mileage' />
              <RatingIcons title='Maintenance Cost' />
              <RatingIcons title='Safety' />
              <RatingIcons title='Features and Styling' />
              <RatingIcons title='Comfort' />
              <RatingIcons title='Performance' />
            </div>
            <div className='textarea mt-10' data-aos='fade-right'>
              <h3 className='text-lg font-medium'>Write your message </h3>
              <textarea class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5 my-5' rows='5'></textarea>
            </div>
            <button type='submit' className='primary-btn shadow-lg w-full' data-aos='fade-up'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export const RatingIcons = ({ title }) => {
  return (
    <div className='rateBox flex items-center mb-4'>
      <div className='title w-3/12' data-aos='fade-right'>
        <h3>{title} </h3>
      </div>
      <div className='icons flex items-center ml-10' data-aos='fade-left'>
        <button className='text-3xl'>😖</button>
        <button className='text-3xl'>😔</button>
        <button className='text-3xl'>😶</button>
        <button className='text-3xl'>😐</button>
        <button className='text-3xl'>😲</button>
      </div>
    </div>
  )
}

import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[45%]  z-20 -left-5 text-black w-12 h-12 rounded-full bg-white shadow-shadow3 cursor-pointer flex place-items-center justify-center'>
      <MdKeyboardArrowLeft size={30} />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[45%]  z-20 -right-5 text-black w-12 h-12 rounded-full bg-white shadow-shadow3 cursor-pointer flex place-items-center justify-center'>
      <MdKeyboardArrowRight size={30} />
    </div>
  )
}

export const FilterCard = ({ title, item, keys, show, slide }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slide ? 6 : 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: slide ? 3 : 2,
          slidesToScroll: slide ? 3 : 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }
  return (
    <>
      <section className='filter-card pt-12 tab:overflow-x-hidden' key={keys} data-aos='fade-up'>
        <div className='bg-white border border-1 border-gray-200'>
          <div className='p-5'>
            <h1 className='text-xl font-medium mb-4 capitalize'>{title} </h1>
            {show && (
              <div className='category border-b-2 border-gray-200 py-3 mobile:flex mobile:overflow-y-hidden mobile:overflow-x-auto' id='category'>
                <button className='text capitalize mr-5 activeLine'>Hatchback </button>
                <button className='text capitalize mr-5'>Sedan</button>
                <button className='text capitalize mr-5'>SUV</button>
                <button className='text capitalize mr-5'>MUV</button>
                <button className='text capitalize mr-5'>Luxury</button>
              </div>
            )}

            <div className='mt-5'>
              <Slider {...settings}>
                {item.map((car) => (
                  <div className='box border border-gray-200 rounded-md rounded-t-xl' key={car.id}>
                    <div className='flex min-h-[200px] '>
                      <NavLink to='/single-page'>
                        <img src={car?.cover} alt='cover' className='rounded-t-xl' />
                      </NavLink>
                    </div>
                    <div className='text p-4'>
                      <h3>{car?.name}</h3>
                      <h2 className='text-lg font-medium py-3'>{car?.price}</h2>
                      <NavLink to='/single-page'>
                        <button className='primary-btn-outline w-full'>Check Februray Offer</button>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className='see-all border-t-2 border-gray-200 mt-5 p-3'>
            <NavLink to='/' className='text-green2 flex items-center text-sm'>
              View All Car <HiArrowLongRight className='ml-3' size={22} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

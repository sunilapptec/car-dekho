import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { popularBrands } from "../assets/data/data"
import { useDispatch, useSelector } from "react-redux"
import { getAllDealers } from "../../redux/actions/dealerAction"
import { clearError } from "../../redux/actions/authAction"
import { Loader } from "../common/Loader"
import { toast } from "react-toastify"
import { useEffect } from "react"

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

export const Dealer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const dispatch = useDispatch()

  const { loading, error, dealers } = useSelector((state) => state.getdealers)

  useEffect(() => {
    dispatch(getAllDealers())

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error])

  const deImg = "https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg"
  return (
    <>
      <section className='filter-card py-12'>
        <div className='containers bg-white border border-1 border-gray-200'>
          <div className='p-5'>
            <h1 className='text-xl font-medium mb-4 capitalize'>Car Dealer Showrooms</h1>

            <div className='mt-5 text-center '>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {dealers?.length === 5 ? (
                    <Slider {...settings}>
                      {dealers?.map((car) => (
                        <div className='box border border-gray-200 rounded-md items-center p-5' key={car.id}>
                          <div className=' bg-red-100 border-2 border-red-100  h-32 w-32 mx-auto rounded-full'>
                            <img src={deImg} alt='deImg' className='rounded-full ImageFit' />
                          </div>
                          <div className='text mt-3'>
                            <h3 className='capitalize'>dealer name : {car?.name}</h3>
                            <h3 className='py-1 text-s capitalize'>location : {car?.address}</h3>
                            <h3 className='text-s capitalize'>contact no : {car?.primary_contact}</h3>
                            {car?.secondary_contact && <h3 className='py-1 text-s capitalize'>contact no : {car?.secondary_contact}</h3>}
                            {car?.email && <h3 className='text-s'>Email : {car?.email}</h3>}
                          </div>
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <div className='grid grid-cols-4 gap-5 tab:grid-cols-2'>
                      {dealers?.map((car) => (
                        <div className='box border border-gray-200 rounded-md items-center p-5' key={car.id}>
                          <div className=' bg-red-100 border-2 border-red-100  h-32 w-32 mx-auto rounded-full'>
                            <img src={deImg} alt='deImg' className='rounded-full ImageFit' />
                          </div>
                          <div className='text mt-3'>
                            <h3 className='capitalize'>dealer name : {car?.name}</h3>
                            <h3 className='py-1 text-s capitalize'>location : {car?.address}</h3>
                            <h3 className='text-s capitalize'>contact no : {car?.primary_contact}</h3>
                            {car?.secondary_contact && <h3 className='py-1 text-s capitalize'>contact no : {car?.secondary_contact}</h3>}
                            {car?.email && <h3 className='text-s'>Email : {car?.email}</h3>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className='see-all border-t-2 border-gray-200 mt-5 p-3'>
            <NavLink className='text-green2 flex items-center text-sm'>
              View All Car <HiArrowLongRight className='ml-3' size={22} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

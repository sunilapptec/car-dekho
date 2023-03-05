import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { Loader } from "../../components/common/Loader"
import DummyImg from "../../components/assets/images/n3.jpg"
import { clearError } from "../../redux/actions/authAction"
import { compareCarAction, getAllNewCars } from "../../redux/actions/carAction"
import { checkbox, Checkbox } from "@material-tailwind/react"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { IoIosArrowForward } from "react-icons/io"
import axios from "axios"
import Pagination from "react-js-pagination"

export const NewCar = (productId1, productId2) => {
  const dispatch = useDispatch()
  const [popupData, setPopupData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const { loading, error, products, features } = useSelector((state) => state.getAllNewCars)

  useEffect(() => {
    dispatch(getAllNewCars(currentPage))
    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error, currentPage])

  // on check compare car
  const [selectCar, setSelectCar] = useState([products])

  /*  const renderCompareCar = () => {
    return selectCar.map((item) => (
      <div className='containers bg-white border border-1 border-gray-200 shadow-xl p-5 rounded-lg '>
        <div className='flex justify-between items-center mobile:flex-col'>
          <div className='grid grid-cols-2 tab:grid-cols-1'>
            <div className='items flex items-center mr-5 tab:mb-3'>
              <button className='w-8 h-8 bg-gray-100 flexCenter rounded-full'>
                <RxCross2 size={18} />
              </button>
              <h1>{item.name}</h1>
              <div className='img w-20 h-14 mx-5'>
                <img src='https://stimg2.cardekho.com/images/usedcarimages/large/12-2022/3548168/20211128_171801.jpg' className='ImageFit rounded-xl' alt='' />
              </div>
              <div className='text'>
                <h3 className='mobile:text-sm'>2021 Jeep Compass Model</h3>
                <span className='text-s'>15,000 Kms • Petrol • Automatic</span>
              </div>
            </div>
          </div>
          <button className='primary-btn flexCenter mobile:mt-2'>
            Compare <IoIosArrowForward />
          </button>
        </div>
      </div>
    ))
  }
*/

  const addToCompare = (id) => {
    setSelectCar((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check }
        } else {
          return { ...item }
        }
      })
    })
  }
  const renderCompareCar = () => {
    return selectCar.map((item) => {
      if (item.id) {
        return (
          <section className='compare fixed bottom-5 left-[27.1%] w-[71.5%] tab:w-full tab:left-0' key={item.id}>
            <div className='containers bg-white border border-1 border-gray-200 shadow-xl p-5 rounded-lg '>
              <div className='flex justify-between items-center mobile:flex-col'>
                <div className='grid grid-cols-2 tab:grid-cols-1'>
                  <div className='items flex items-center mr-5 tab:mb-3'>
                    <button className='w-8 h-8 bg-gray-100 flexCenter rounded-full'>
                      <RxCross2 size={18} />
                    </button>
                    <h1>{item.name}</h1>
                    <div className='img w-20 h-14 mx-5'>
                      <img src='https://stimg2.cardekho.com/images/usedcarimages/large/12-2022/3548168/20211128_171801.jpg' className='ImageFit rounded-xl' alt='' />
                    </div>
                    <div className='text'>
                      <h3 className='mobile:text-sm'>2021 Jeep Compass Model</h3>
                      <span className='text-s'>15,000 Kms • Petrol • Automatic</span>
                    </div>
                  </div>
                </div>
                <button className='primary-btn flexCenter mobile:mt-2'>
                  Compare <IoIosArrowForward />
                </button>
              </div>
            </div>
          </section>
        )
      } else {
        return null
      }
    })
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className='filter-card tab:overflow-x-hidden' data-aos='fade-up'>
            <div className='bg-white border border-1 border-gray-200'>
              <div className='containers'>
                <div className='p-5'>
                  <div className='my-5 grid grid-cols-4 gap-8 tab:grid-cols-2 mobile:grid-cols-1'>
                    {products?.map((car) => (
                      <div className='box border border-gray-200 rounded-md rounded-t-xl shadow-sm' key={car.id}>
                        <div className='flex min-h-[200px] '>
                          <NavLink to={`/single-page/${car.id}`}>
                            <img src={DummyImg} alt='cover' className='rounded-xl' />
                          </NavLink>
                        </div>
                        <div className='text p-4 relative'>
                          <button className='flex absolute right-2 top-1'>
                            <Checkbox color='red' id={car.id} value={car.name} onChange={addToCompare} />
                          </button>
                          {/*  <button className='flex absolute right-2 top-1' onClick={() => compareCarHandler(car.id)}>
                          <Checkbox color='red' />
                        </button>*/}

                          <h3>{car?.name}</h3>
                          <h2 className='text-lg font-medium py-3'>Rs {car?.price} Lakh*</h2>
                          <NavLink to={`/single-page/${car.id}`}>
                            <button className='primary-btn-outline w-full'>Check Februray Offer</button>
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {features?.per_page <= features?.total && (
                <div className='pagination pb-12' id='react-paginate'>
                  <Pagination activePage={features?.current_page} itemsCountPerPage={features?.per_page} totalItemsCount={features?.total} onChange={(pageNumber) => setCurrentPage(pageNumber)} nextPageText={"Next"} prevPageText={"Prev"} hideFirstLastPages={true} />
                </div>
              )}
            </div>
          </section>
          <div> {renderCompareCar()} </div>
        </>
      )}
    </>
  )
}

export const CompareCard = ({ data, onClose }) => {
  return (
    <>
      <section className='compare fixed bottom-5 left-[27.1%] w-[71.5%] tab:w-full tab:left-0'>
        <div className='containers bg-white border border-1 border-gray-200 shadow-xl p-5 rounded-lg '>
          <div className='flex justify-between items-center mobile:flex-col'>
            <div className='grid grid-cols-2 tab:grid-cols-1'>
              <div className='items flex items-center mr-5 tab:mb-3'>
                <button className='w-8 h-8 bg-gray-100 flexCenter rounded-full'>
                  <RxCross2 size={18} />
                </button>
                <h1>{data.name}</h1>
                <div className='img w-20 h-14 mx-5'>
                  <img src='https://stimg2.cardekho.com/images/usedcarimages/large/12-2022/3548168/20211128_171801.jpg' className='ImageFit rounded-xl' alt='' />
                </div>
                <div className='text'>
                  <h3 className='mobile:text-sm'>2021 Jeep Compass Model</h3>
                  <span className='text-s'>15,000 Kms • Petrol • Automatic</span>
                </div>
              </div>
            </div>
            <button className='primary-btn flexCenter mobile:mt-2'>
              Compare <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

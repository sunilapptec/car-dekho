import React, { useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { toast } from "react-toastify"
import { clearError } from "../../redux/actions/authAction"
import { getAllFavoriteListAction } from "../../redux/actions/favoriteListAction"
import { Loader } from "../common/Loader"
import { Title } from "../common/Title"

const imgCover = "https://stimg2.cardekho.com/images/usedcarimages/large/12-2022/3548168/20211128_171801.jpg"

export const Favorite = () => {
  const dispatch = useDispatch()

  const { loading, error, favoriteList } = useSelector((state) => state.getAllFavorites)

  useEffect(() => {
    dispatch(getAllFavoriteListAction())

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error])
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='admin-profile mb-10'>
          <Title title='Shortlisted' />
          <p>{favoriteList?.length} items are shortlisted. you can explore them</p>
          <div className='content'>
            {favoriteList.map((list) => (
              <div className='items my-5 bg-white p-7 rounded-lg shadow-shadow1 relative'>
                <div className='item flex items-center mr-5 tab:mb-3' key={list.car_id}>
                  <div className='img w-48 h-32 mx-5'>
                    <img src={imgCover} className='ImageFit rounded-xl' alt='' />
                  </div>
                  <div className='text capitalize'>
                    <h3 className='mobile:text-sm'>{list.car.name}</h3>
                    <span className='text-s'>15,000 Kms • Petrol • Automatic </span>
                    <h1 className='text-lg my-2 text-org font-medium'>Rs {list.car.price} Lakh*</h1>

                    <NavLink to={`/single-page/${list.id}`} className='text-sm text-indigo-500 flex items-center'>
                      Check Product
                      <HiOutlineArrowNarrowRight size={18} className='ml-2' />
                    </NavLink>

                    <button className='remove w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center absolute top-0 right-0 m-3'>
                      <AiOutlineClose size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

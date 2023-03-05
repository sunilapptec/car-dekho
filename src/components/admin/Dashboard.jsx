import React from "react"
import { useEffect } from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllFavoriteListAction } from "../../redux/actions/favoriteListAction"
import { Title } from "../common/Title"

export const Dashboard = () => {
  const dispatch = useDispatch()
  const { favoriteList } = useSelector((state) => state.getAllFavorites)

  useEffect(() => {
    dispatch(getAllFavoriteListAction())
  }, [dispatch])
  return (
    <>
      <section className='admin-dashbaord'>
        <Title title='Dashboard' />

        <div className='grid grid-cols-4 gap-5'>
          <div className='box bg-white p-3 shadow-md rounded-md border-indigo-400 border-l-4'>
            <h2 className='text-md text-center font-medium'>Favorite Car</h2>
            <h2 className='text-4xl font-semibold my-4 text-center text-indigo-500'>{favoriteList?.length}</h2>
            <NavLink to='/admin-favorite' className='flex items-center justify-between text-sm'>
              <span>View All</span>
              <HiArrowLongRight size={18} />
            </NavLink>
          </div>
          <div className='box bg-white p-3 shadow-md rounded-md border-l-4 border-deep-orange-500'>
            <h2 className='text-md text-center font-medium'>Favorite Car</h2>
            <h2 className='text-4xl font-semibold my-4 text-center text-deep-orange-500'>{favoriteList?.length}</h2>
            <NavLink to='/admin-favorite' className='flex items-center justify-between text-sm'>
              <span>View All</span>
              <HiArrowLongRight size={18} />
            </NavLink>
          </div>
          <div className='box bg-white p-3 shadow-md rounded-md border-indigo-400 border-l-4'>
            <h2 className='text-md text-center font-medium'>Favorite Car</h2>
            <h2 className='text-4xl font-semibold my-4 text-center text-indigo-500'>{favoriteList?.length}</h2>
            <NavLink to='/admin-favorite' className='flex items-center justify-between text-sm'>
              <span>View All</span>
              <HiArrowLongRight size={18} />
            </NavLink>
          </div>
          <div className='box bg-white p-3 shadow-md rounded-md border-l-4 border-deep-orange-500'>
            <h2 className='text-md text-center font-medium'>Favorite Car</h2>
            <h2 className='text-4xl font-semibold my-4 text-center text-deep-orange-500'>{favoriteList?.length}</h2>
            <NavLink to='/admin-favorite' className='flex items-center justify-between text-sm'>
              <span>View All</span>
              <HiArrowLongRight size={18} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

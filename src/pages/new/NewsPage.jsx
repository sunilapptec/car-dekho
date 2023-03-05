import React from "react"
import { useEffect } from "react"
import { RiSearch2Line } from "react-icons/ri"
import Pagination from "react-js-pagination"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Title } from "../../components/common/Title"
import { Loader } from "../../components/common/Loader"
import { clearError } from "../../redux/actions/authAction"
import { getAllNews } from "../../redux/actions/newsAction"
import { useState } from "react"
const ImgCover = "https://demo.vehica.com/wp-content/uploads/2020/02/audi1.jpg"

export const NewsPage = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const [currentPage, setCurrentPage] = useState(1)

  const { loading, error, news, features } = useSelector((state) => state.getallNews)

  useEffect(() => {
    dispatch(getAllNews(currentPage))

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error, currentPage])

  return (
    <>
      <section className='filter-card my-8 tab:bg-white'>
        <div className='m-auto max-w-screen-lg tab:w-full tab:px-8'>
          <Title title='Car News India - All Latest Car Information And Auto News India' />
          <div className='my-8'>
            <form className='searchBox mobile:hidden'>
              <div className='flex border bottom-1 border-gray-200 rounded-md'>
                <div className='relative w-full'>
                  <input type='search' className='p-3 pl-6 border bottom-2 bg-gray-50 border-gray-200 w-full rounded-lg text-sm focus:ring-2 focus:ring-red-300 focus:outline-none' placeholder='Search Car, model,Car Design...' required />
                  <button type='submit' className='absolute top-0 right-0 p-[11px] text-sm font-medium text-white bg-red-500 rounded-r-lg border border-red-300 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300'>
                    <RiSearch2Line size={22} />
                    <span className='sr-only'>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {loading ? (
            <Loader />
          ) : (
            news.map((item) => (
              <div className='box mb-7 bg-white border border-gray-200 rounded-xl flex mobile:flex-col shadow-shadow1 tab:shadow-sm' key={item.id}>
                <div className='w-2/6 h-[200px] tab:h-[250px] mobile:h-[200px] mobile:w-full'>
                  <NavLink to={`/new/single-page/${news.id}`}>
                    <img src={ImgCover} alt='cover' className='w-full h-full mobile:rounded-xl object-cover rounded-l-xl' />
                  </NavLink>
                </div>
                <div className='text p-4 w-2/3 ml-5 mobile:w-full mobile:ml-0 capitalize'>
                  <h3>{item?.title}</h3>
                  <p className='text-gray1 my-4 text-[16px] leading-7 mobile:text-sm'>{item?.description?.slice(0, 100)}...</p>
                  <h1>User to do</h1>
                  {/* <div className='user flex center'>
                  <div className='bg-green-100 w-12 h-12 rounded-full text-center flexCenter mr-3'>
                    <h1 className='text-2xl'>{news.user.slice(0, 1)}</h1>
                  </div>
                  <div className='name'>
                    <span>{news.user}</span>
                    <br />
                    <label htmlFor='' className='text-gray1 text-sm'>
                      {"news.date"}
                    </label>
                  </div>
                </div>*/}
                </div>
              </div>
            ))
          )}

          {features?.per_page <= features?.total && (
            <div className='pagination' id='react-paginate'>
              <Pagination activePage={features?.current_page} itemsCountPerPage={features?.per_page} totalItemsCount={features?.total} onChange={(pageNumber) => setCurrentPage(pageNumber)} nextPageText={"Next"} prevPageText={"Prev"} hideFirstLastPages={true} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

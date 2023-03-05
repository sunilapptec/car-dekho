import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { Loader } from "../../components/common/Loader"
import { clearError } from "../../redux/actions/authAction"
import { getAllTermAndCond } from "../../redux/actions/termAndCondAction"
import { Title } from "../../router/router"

export const Condition = () => {
  const dispatch = useDispatch()

  const { loading, error, termCon } = useSelector((state) => state.termAndCond)

  useEffect(() => {
    dispatch(getAllTermAndCond())

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
        <section className='about'>
          <div className='containers'>
            <div className='bg-white p-8 shadow-md my-12 w-2/3 rounded-md tab:w-full'>
              <Title title='Terms and Conditions' />
              {termCon.map((item) => (
                <div className='mb-3' key={item.id}>
                  <h2 className='text-lg font-medium my-4 capitalize' data-aos='fade-down-right'>
                    {item.title}
                  </h2>
                  <p className='text-gray-500 text-[15px] leading-6' data-aos='fade-down-left'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

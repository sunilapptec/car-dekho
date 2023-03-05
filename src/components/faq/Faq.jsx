import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { clearError } from "../../redux/actions/authAction"
import { getAllFaq } from "../../redux/actions/faqAction"
import { Loader } from "../common/Loader"
import { Title } from "../common/Title"

export const Faq = () => {
  const dispatch = useDispatch()

  const { loading, error, faqs } = useSelector((state) => state.getFAQ)

  useEffect(() => {
    dispatch(getAllFaq())

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error])
  return (
    <>
      <section className='faq'>
        <div className='containers'>
          <div className='bg-white p-8 shadow-md my-12 w-2/3 tab:w-full rounded-md'>
            <Title title='Frequently Asked Questions' />
            {loading ? (
              <Loader />
            ) : (
              faqs?.map((item, i) => (
                <div className='box border-b border-gray-200 py-5 last:border-b' key={item.id}>
                  <h3 className='text-[17px] mb-2 font-medium' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>{`Q. ${i + 1} ${item.question}`}</h3>
                  <p className='text-sm' data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
                    {item.answer}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}

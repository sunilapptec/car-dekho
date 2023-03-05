import { useSelect } from "@material-tailwind/react"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { FaPhoneSquareAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import contactImg from "../.././components/assets/images/contact.jpg"
import { clearError } from "../../redux/actions/authAction"
import { contactUs } from "../../redux/actions/contactAction"

export const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14124.972161738535!2d85.32395955!3d27.74064875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sne!2snp!4v1676007685238!5m2!1sne!2snp"

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")

  const { error, userInfo, loading } = useSelector((state) => state.contactUs)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearError())
    }

    if (userInfo) {
      toast.success("Thanks For Your Feedbacks.")
      navigate("/")
    }
  }, [dispatch, error, navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set("mobile", mobile)
    formData.set("address", address)
    formData.set("message", message)

    dispatch(contactUs(formData))
  }
  return (
    <>
      <section className='contact relative'>
        <iframe src={map} className='w-full h-72' title='map'></iframe>

        <div className='bg-white my-16 max-w-[90%] mx-auto flex p-7 border border-gray-200 rounded-md tab:flex-col'>
          <div className='left w-2/3 mr-12 tab:w-full'>
            <h1 className='text-xl font-semibold' data-aos='fade-right'>
              CONTACT US
            </h1>
            <p className='text-gray1 text-sm leading-6 my-3' data-aos='fade-right'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum tempore autem distinctio qui iure aspernatur doloribus porro blanditiis perspiciatis alias.
            </p>
            <hr className='w-16 bg-red-500 h-1' data-aos='fade-right' />

            <form className='mt-5' onSubmit={submitHandler}>
              <div className='grid grid-cols-2 gap-6 mobile:grid-cols-1' data-aos='fade-right'>
                <input type='text' disabled className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5' placeholder='Full Name' required />
                <input type='text' value={mobile} onChange={(e) => setMobile(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5' placeholder='Contact Number' required />
              </div>
              <div className='grid grid-cols-2 gap-6 my-8 mobile:grid-cols-1' data-aos='fade-right'>
                <input type='email' disabled className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5' placeholder='example@gmail.com' required />
                <input type='text' disabled className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5' placeholder='Subject' required />
              </div>
              <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} className='mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5' placeholder='Address' required />

              <textarea type='text' value={message} onChange={(e) => setMessage(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none focus:ring-red-400 focus:border-red-400 block w-full p-2.5' placeholder='Message' required cols='30' rows='10' data-aos='fade-right'></textarea>

              <button type='submit' className='primary-btn mt-5' data-aos='fade-right'>
                Submit
              </button>
            </form>
          </div>
          <div className='right w-1/3  tab:w-full tab:mt-8'>
            <div className='box border border-gray-200 rounded-md w-full'>
              <div className='h-60 w-full bg-red-200' data-aos='fade-left'>
                <img src={contactImg} alt='contact' className='h-60 w-full object-cover' />
              </div>
              <div className='py-9 px-5'>
                <h3 className='text-xl font-medium text-red-500'>Call Toll Free:</h3>
                <div className='flex items-center' data-aos='fade-left'>
                  <FaPhoneSquareAlt size={35} />
                  <h2 className='ml-5 text-3xl my-5 font-semibold'>+977 981325385</h2>
                </div>
                <p data-aos='fade-left'>
                  We are 24/7 available. Our expert staff is standing by to answer your questions. You can also contact by email: <span className='text-red-500 cursor-pointer'>example@gmail.com</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Input } from "@material-tailwind/react"
import React, { useEffect } from "react"
import { useState } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { RiLockPasswordLine } from "react-icons/ri"
import { TfiEmail } from "react-icons/tfi"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import loginImg from "../.././components/assets/images/login-banner.svg"
import { clearError, login, validateEmail } from "../../redux/actions/authAction"

export const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { userInfo, error } = useSelector((state) => state.userLogin)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate("/")
      toast.success("Login Successfully")
    }

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, navigate, userInfo, error])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return toast.error("All fields are required")
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email")
    }

    dispatch(login(email, password))
  }

  return (
    <>
      <section className='login my-12'>
        <div className='w-1/2 m-auto bg-white rounded-lg flex border boder-1 border-gray-200'>
          <div className='w-1/3' data-aos='zoom-in-down'>
            <img src={loginImg} alt='login' className='ImageFit rounded-lg' />
          </div>
          <form className='px-16 py-12 w-4/6' data-aos='zoom-in-up' onSubmit={handleSubmit} encType='multipart/form-data'>
            <h2 className='text-2xl font-medium'>Login or Register</h2>
            <span className='text-s text-gray1'>For Better Experience, Order tracking & Regular updates</span>

            <div className='input mt-12'>
              <Input label='Email' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} size='lg' color='red' icon={<TfiEmail />} />
              <br />
              <Input label='Password' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} size='lg' color='red' icon={<RiLockPasswordLine />} />
              <br />

              <button className='primary-btn w-full mb-3' type='submit'>
                Login
              </button>
              <label className='text-s text-gray1 mb-2 block'>By continuing I agree with the Privacy Policy,Terms & Conditions</label>
              <NavLink to='/register' className='text-red-500 text-[15px] flex items-center '>
                SingIn
                <HiOutlineArrowNarrowRight className='ml-1' />
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

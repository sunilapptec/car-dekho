import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { NavLink, useNavigate } from "react-router-dom"
import login from "../.././components/assets/images/login-banner.svg"
import { Input } from "@material-tailwind/react"
import { AiOutlineUser } from "react-icons/ai"
import { TfiEmail } from "react-icons/tfi"
import { IoLocationOutline } from "react-icons/io5"
import { RiLockPasswordLine } from "react-icons/ri"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearError, register, validateEmail } from "../../redux/actions/authAction"
import { toast } from "react-toastify"
import { useEffect } from "react"

export const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const { name, email, password, password_confirmation } = user

  //const { isAuth, error } = useSelector((state) => state.userRegister)
  const { userInfo, error } = useSelector((state) => state.userRegister)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate("/")
      toast.success("Register Successfully")
    }
    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, navigate, userInfo, error])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateEmail(email)) {
      return toast.error("Please enter valid email")
    }

    if (password !== password_confirmation) {
      return toast.error("Password Doesn't Match")
    }

    const formData = new FormData()
    formData.set("name", name)
    formData.set("email", email)
    formData.set("password", password)
    formData.set("password_confirmation", password_confirmation)

    dispatch(register(formData))
  }

  const onchange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <>
      <section className='login my-12'>
        <div className='w-1/2 m-auto bg-white rounded-lg flex border boder-1 border-gray-200'>
          <div className='w-1/3' data-aos='zoom-in-down'>
            <img src={login} alt='login' className='ImageFit rounded-lg' />
          </div>
          <form className='px-16 py-12 w-4/6' data-aos='zoom-in-up' onSubmit={handleSubmit} encType='multipart/form-data'>
            <h2 className='text-2xl font-medium'>Login or Register</h2>
            <span className='text-s text-gray1'>For Better Experience, Order tracking & Regular updates</span>

            <div className='input mt-5'>
              <Input label='Full Name' type='text' name='name' value={name} onChange={onchange} size='lg' color='red' icon={<AiOutlineUser />} />
              <br />
              <Input label='Email' type='text' name='email' value={email} onChange={onchange} size='lg' color='red' icon={<TfiEmail />} />
              {/*<br />
              <Input label='Address' type='text' size='lg' color='red' icon={<IoLocationOutline />} />
               */}
              <br />
              <Input label='Password' type='text' name='password' value={password} onChange={onchange} size='lg' color='red' icon={<RiLockPasswordLine />} />
              <br />
              <Input label='Confirm Password' type='text' name='password_confirmation' value={password_confirmation} onChange={onchange} size='lg' color='red' icon={<RiLockPasswordLine />} />

              <button type='submit' className='primary-btn w-full mb-3 mt-5'>
                Register
              </button>
              <label className='text-s text-gray1 flex mb-2'>By continuing I agree with the Privacy Policy,Terms & Conditions</label>
              <NavLink to='/login' className='text-red-500 text-[15px] flex items-center '>
                Sing Up
                <HiOutlineArrowNarrowRight className='ml-1' />
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

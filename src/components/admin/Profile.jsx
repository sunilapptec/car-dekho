import React, { useEffect, useState } from "react"
import { Title } from "../common/Title"
import { Input, Textarea } from "@material-tailwind/react"
import avatarImg from "../.././components/assets/images/avatar.png"
import { BsCalendarDateFill, BsTelephone } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { clearError, updateUserProfile } from "../../redux/actions/authAction"
import { UpdatePassword } from "../../router/router"
import { toast } from "react-toastify"
import { USER_UPDATE_PROFILE_RESET } from "../../redux/constrants/authConstrants"
import { Loader } from "../common/Loader"
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react"

export const Profile = () => {
  const data = [
    {
      label: "My Profile",
      value: "profile",
      components: <MyProfileComponent />,
    },
    {
      label: "Chanage Password",
      value: "chanage",
      components: <UpdatePassword />,
    },
  ]

  return (
    <>
      <Tabs value='profile'>
        <TabsHeader className='w-96 ml-3 p-2'>
          {data.map(({ label, value }) => (
            <Tab size='md' key={value} value={value} className='p-2'>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, components }) => (
            <TabPanel key={value} value={value}>
              {components}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  )
}

export const MyProfileComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [phoneNo, setPhoneNo] = useState("")
  const [DOB, setDOB] = useState("")
  const [message, setMessage] = useState("")
  const [avatar, setAvatar] = useState([])
  const [avatarPreview, setAvatarPreview] = useState("")

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo: userData } = userLogin

  const { error, userInfo, loading } = useSelector((state) => state.userUpdateProfile)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
    if (userInfo) {
      toast.success("Updated Profile successfully")
      navigate("/admin-profile")
      dispatch({
        type: USER_UPDATE_PROFILE_RESET,
      })
    }
  }, [dispatch, navigate, error, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set("mobile", phoneNo)
    formData.set("dob", DOB)
    formData.set("about_me", message)
    formData.set("profile_image", avatar)

    dispatch(updateUserProfile(formData))
  }

  const onChange = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      // 3 state => 0 mean just created, 1 means processsing and 2 mean everything in ready
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result)
        setAvatar(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  return loading ? (
    <Loader />
  ) : (
    <section className='admin-profile mb-10 bg-white p-7 rounded-lg shadow-shadow1'>
      <Title title='My Profile' />

      <form className='flex justify-between' onSubmit={submitHandler} encType='multipart/form-data'>
        <div className='left w-3/5 mr-10'>
          <Input label='Phone Number' value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} type='text' size='lg' color='blue' icon={<BsTelephone />} />
          <br />
          <Input label='Date Of Birth' value={DOB} onChange={(e) => setDOB(e.target.value)} type='date' size='lg' color='blue' icon={<BsCalendarDateFill />} />
          <br />
          <Textarea label='Message' value={message} onChange={(e) => setMessage(e.target.value)} />

          <div className='flex justify-center'>
            <div className='mb-4 w-full '>
              <label htmlFor='formFileLg' className='text-[0px] inline-block text-neutral-700 dark:text-white text-white'>
                Large file input example
              </label>
              <input onChange={onChange} className='relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-gray-400 border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-md font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-3 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent' id='formFileLg' type='file' />
            </div>
          </div>

          <button type='submit' className='bg-indigo-700 px-12 py-3 mt-3 text-white rounded-lg'>
            Save
          </button>

          <div className='img mt-3'>
            <img src={avatarPreview} alt='' />
          </div>
        </div>
        <div className='right w-2/5'>
          <div className='right h-[150px] w-[150px] rounded-full'>
            <img src={userData.data.profile_image ? userData.data.profile_image : avatarImg} alt='loginImg' className='ImageFit rounded-full' />
          </div>

          <ul className='mt-6 capitalize px-2'>
            <li className='text-md'>
              <label className='text-indigo-500 font-medium'>Username : </label> {userData.data.user.name}
            </li>
            <li className='text-md my-2'>
              <label className='text-indigo-500 font-medium'>Email : </label> {userData.data.user.email}
            </li>
            <li className='text-md'>
              <label className='text-indigo-500 font-medium'>Phone Number : </label> {userData.data.mobile ? userData.data.mobile : "+977 9813253082"}
            </li>
            <li className='text-md my-2'>
              <label className='text-indigo-500 font-medium'>Date of Birth : </label> {userData.data.dob ? userData.data.dob : "2023-10-20"}
            </li>
            <li className='text-md'>
              <label className='text-indigo-500 font-medium'>Bio : </label> {userData.data.about_me ? userData.data.about_me : "Hello from App Technologies Pvt. Ltd"}
            </li>
          </ul>
        </div>
      </form>
    </section>
  )
}

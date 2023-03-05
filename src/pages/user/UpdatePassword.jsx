import React from "react"
import { RiLockPasswordLine } from "react-icons/ri"
import { Input } from "@material-tailwind/react"
import { Title } from "../../router/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { clearError, updatePassword } from "../../redux/actions/authAction"
import { UPDATE_PASSWORD_RESET } from "../../redux/constrants/authConstrants"
import { Loader } from "../../components/common/Loader"

export const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, userInfo, loading } = useSelector((state) => state.updatePassword)

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
    if (userInfo) {
      toast.success("Password updated successfully")
      navigate("/admin-profile")
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      })
    }
  }, [dispatch, navigate, error, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.set("old_password", oldPassword)
    formData.set("password", newPassword)
    formData.set("password_confirmation", confirmpassword)

    dispatch(updatePassword(formData))
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='admin-profile mt-15 bg-white p-7 rounded-lg shadow-shadow1 w-2/3'>
          <form onSubmit={submitHandler} encType='multipart/form-data'>
            <Title title='Change Password' />
            <Input label='Old Password' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} type='password' size='lg' color='blue' icon={<RiLockPasswordLine />} />
            <br />
            <Input label='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type='password' size='lg' color='blue' icon={<RiLockPasswordLine />} />
            <br />
            <Input label='Confirm Password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} type='cpassword' size='lg' color='blue' icon={<RiLockPasswordLine />} />
            <button type='submit' disabled={loading ? true : false} className='bg-indigo-700 px-12 mt-5 py-3 text-white rounded-lg'>
              Chanage Password
            </button>
          </form>
        </section>
      )}
    </>
  )
}

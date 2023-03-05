import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/login.svg"
import { SearchBox } from "../common/SearchBox"
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { HiOutlineUserCircle } from "react-icons/hi"
import { navBar } from "../assets/data/data"
import { RiDashboardLine } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"

import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react"
import { IoIosLogOut } from "react-icons/io"
import { BiUser } from "react-icons/bi"
import { logout } from "../../redux/actions/authAction"
import { toast } from "react-toastify"

export const Header = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    toast.success("Logout Successfully.")
  }

  return (
    <>
      <header className='h-auto bg-white border-b bottom-2 border-gray-200 main-header'>
        <div className='containers'>
          <div className='flex justify-between items-center py-4'>
            <div className='logo flex h-12 w-48 object-contain pt-2 tab:w-32'>
              <NavLink to='/' className='logo-link'>
                <img src={logo} alt='logo' className='object-contain ' width='100%' height='100%' />
              </NavLink>
            </div>

            <SearchBox />

            <div className='user flex items-center text-sm'>
              <select name='' id='' className='mr-8 tab:hidden'>
                <option value=''>English</option>
                <option value=''>Hindi</option>
                <option value=''>Neplai</option>
              </select>

              {userInfo ? (
                <Menu
                  placement='bottom-end'
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <MenuHandler>
                    <div className='text-lg uppercase w-10 h-10 text-white bg-org rounded-full flexCenter cursor-pointer'>{userInfo?.data?.user?.name?.slice(0, 1)}</div>
                  </MenuHandler>
                  <MenuList className='w-72'>
                    <NavLink to='/dashboard' className='border-none outline-none'>
                      <MenuItem className='flex items-center'>
                        <RiDashboardLine size={20} className='mr-4' /> <span>Dashboard</span>
                      </MenuItem>
                    </NavLink>
                    <NavLink to='/admin-profile' className='border-none outline-none'>
                      <MenuItem className='flex items-center'>
                        <BiUser size={20} className='mr-4' /> <span>Profile</span>
                      </MenuItem>
                    </NavLink>
                    <NavLink to='/admin-favorite' className='border-none outline-none'>
                      <MenuItem className='flex items-center'>
                        <AiOutlineHeart size={20} className='mr-4' /> <span>Favourite</span>
                      </MenuItem>
                    </NavLink>
                    <MenuItem className='flex items-center' onClick={logoutHandler}>
                      <IoIosLogOut size={20} className='mr-4' /> <span>Log Out</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <div className='logoin flex items-center'>
                  <NavLink to='/dashboard'>
                    <HiOutlineUserCircle size={22} className='mr-3' />
                  </NavLink>
                  <NavLink to='/login'>Login</NavLink>
                  <span>/</span>
                  <NavLink to='/register'>Register</NavLink>
                </div>
              )}
              <Menu
                placement='bottom-end'
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <MenuHandler>
                  <button type='button' className='hidden tab:block ml-5 items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
                    <AiOutlineMenu size={22} />
                  </button>
                </MenuHandler>
                <MenuList className='w-96 mobile:w-full'>
                  {navBar.map((item) => (
                    <NavLink to={item.path} key={item.id} className='border-none outline-none mb-3 block'>
                      <MenuItem className='flex items-center uppercase'>{item.name}</MenuItem>
                    </NavLink>
                  ))}
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>

        <nav className='border-t bottom-1 border-gray-200 p-3 tab:hidden'>
          <div className='containers flex justify-between'>
            <ul className='flex item-center'>
              {navBar.map((item) => (
                <li className='mr-8' key={item.id}>
                  <NavLink to={item.path} className='NavLink uppercase text-[15px] font-medium text-primary'>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className='location flex items-center tab:hidden'>
              <GoLocation size={20} />
              <span className='text-sm ml-3'>Kathmandu</span>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

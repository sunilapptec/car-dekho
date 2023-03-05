import React from "react"
import { AiFillStar, AiOutlineHeart } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import { NavLink } from "react-router-dom"
import { newsAndReview } from "../assets/data/data"
import { useActiveMenu } from "react-active-menu"

export const Compare = () => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu({
    offset: 60,
    smooli: true,
  })
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".compare-page-header")
    header.classList.toggle("active", this.window.scrollY > 800)
  })
  return (
    <>
      <section className='compare-pages h-[500vh]'>
        <div className='w-3/4 m-auto mobile:w-full'>
          <div className='topItems w-2/3 m-auto tab:w-full mobile:w-full mobile:p-5'>
            <div className='content mt-10 grid grid-cols-2 gap-7 tab:grid-cols-2 mobile:grid-cols-1'>
              {newsAndReview.slice(0, 2).map((item) => (
                <div className='box border border-gray-200 rounded-xl shadow-sm' data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
                  <div className='img relative'>
                    <img src={item.cover} alt='cover' className='h-40 w-full rounded-t-xl mobile:object-cover' data-aos='fade-up-right' />
                    <div className='bg-red-500 w-7 h-7 flexCenter rounded-md absolute bottom-0 right-0 m-3'>
                      <AiFillStar className='text-white' />
                    </div>
                  </div>
                  <div className='details p-5 bg-white rounded-b-xl' data-aos='fade-up-left'>
                    <h3 className='flex justify-between text-md font-medium mb-5'>
                      <span>{item.title.slice(0, 50)}...</span>
                      <i className='ml-3'>
                        <AiOutlineHeart size={18} />
                      </i>
                    </h3>

                    <NavLink to='/#' className='text-red-500 font-medium flex items-center'>
                      View Seller Details
                      <BsArrowRight className='ml-2' size={20} data-aos='fade-right' />
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bottomItems mt-10 relative mobile:p-5'>
            <div className='buttons my-3 compare-page-header'>
              <button ref={registerTrigger("content1")} type='button' data-aos='fade-right' className='mb-2.5 px-6 py-2 bg-gray-100 rounded-3xl text-sm'>
                Overview
              </button>
              <button ref={registerTrigger("content2")} type='button' data-aos='fade-right' className='mb-2.5 px-6 py-2 bg-gray-100 rounded-3xl text-sm mx-4'>
                features
              </button>
              <button ref={registerTrigger("content3")} type='button' data-aos='fade-right' className='mb-2.5 px-6 py-2 bg-gray-100 rounded-3xl text-sm'>
                specification
              </button>
            </div>
            <div ref={registerContainer} className='h-[505vh]'>
              <div className='bg-white border border-1 border-gray-200 mb-10  rounded-lg' ref={registerSection("content1")}>
                <h3 className='text-lg font-medium p-5 bg-black rounded-t-lg text-white'>Car Overview</h3>
                <ul>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Price</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Rs26,50,000</h3>
                      <h3 className='w-1/2'>Rs26,50,000</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Fuel Type</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Petrol</h3>
                      <h3 className='w-1/2'>Diesel</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Kms Driven </div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>15,000 Kms</h3>
                      <h3 className='w-1/2'>47,000 Kms</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Ownership</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>1st Owner</h3>
                      <h3 className='w-1/2'>1st Owner</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Registration Year</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>n/a</h3>
                      <h3 className='w-1/2'>Jul 2020</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Transmission</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Automatic</h3>
                      <h3 className='w-1/2'>Automatic</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Insurance Type</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Comprehensive</h3>
                      <h3 className='w-1/2'>Comprehensive</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Seats</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>5 Seats</h3>
                      <h3 className='w-1/2'>7 Seats</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> RTO</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>n/a</h3>
                      <h3 className='w-1/2'>KA 04</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Engine Displacement</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>1368 CC</h3>
                      <h3 className='w-1/2'>2393 CC</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Year of Manufacture</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>2021</h3>
                      <h3 className='w-1/2'>2020</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Car location</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>2021</h3>
                      <h3 className='w-1/2'>Binnamangala Old Madras Road Near Vivekanada </h3>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='bg-white border border-1 border-gray-200 mb-10  rounded-lg' ref={registerSection("content2")}>
                <h3 className='text-lg font-medium p-5 bg-black rounded-t-lg text-white'>Features</h3>
                <ul>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Price</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Rs26,50,000</h3>
                      <h3 className='w-1/2'>Rs26,50,000</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Fuel Type</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Petrol</h3>
                      <h3 className='w-1/2'>Diesel</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Kms Driven </div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>15,000 Kms</h3>
                      <h3 className='w-1/2'>47,000 Kms</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Ownership</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>1st Owner</h3>
                      <h3 className='w-1/2'>1st Owner</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Registration Year</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>n/a</h3>
                      <h3 className='w-1/2'>Jul 2020</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Transmission</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Automatic</h3>
                      <h3 className='w-1/2'>Automatic</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Insurance Type</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Comprehensive</h3>
                      <h3 className='w-1/2'>Comprehensive</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Seats</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>5 Seats</h3>
                      <h3 className='w-1/2'>7 Seats</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> RTO</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>n/a</h3>
                      <h3 className='w-1/2'>KA 04</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Engine Displacement</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>1368 CC</h3>
                      <h3 className='w-1/2'>2393 CC</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Year of Manufacture</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>2021</h3>
                      <h3 className='w-1/2'>2020</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Car location</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>2021</h3>
                      <h3 className='w-1/2'>Binnamangala Old Madras Road Near Vivekanada </h3>
                    </div>
                  </li>
                </ul>
              </div>

              <div className='bg-white border border-1 border-gray-200 mb-10  rounded-lg' ref={registerSection("content3")}>
                <h3 className='text-lg font-medium p-5 bg-black rounded-t-lg text-white'>Specification</h3>
                <ul>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Price</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Rs26,50,000</h3>
                      <h3 className='w-1/2'>Rs26,50,000</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Fuel Type</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Petrol</h3>
                      <h3 className='w-1/2'>Diesel</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Kms Driven </div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>15,000 Kms</h3>
                      <h3 className='w-1/2'>47,000 Kms</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Ownership</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>1st Owner</h3>
                      <h3 className='w-1/2'>1st Owner</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Registration Year</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>n/a</h3>
                      <h3 className='w-1/2'>Jul 2020</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Transmission</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Automatic</h3>
                      <h3 className='w-1/2'>Automatic</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Insurance Type</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>Comprehensive</h3>
                      <h3 className='w-1/2'>Comprehensive</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Seats</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>5 Seats</h3>
                      <h3 className='w-1/2'>7 Seats</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> RTO</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>n/a</h3>
                      <h3 className='w-1/2'>KA 04</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'> Engine Displacement</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>1368 CC</h3>
                      <h3 className='w-1/2'>2393 CC</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Year of Manufacture</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>2021</h3>
                      <h3 className='w-1/2'>2020</h3>
                    </div>
                  </li>
                  <li>
                    <div className='  px-5 py-3 text-center text-md font-medium'>Car location</div>
                    <div className='flex justify-between text-center bg-gray-100 py-2'>
                      <h3 className='w-1/2'>2021</h3>
                      <h3 className='w-1/2'>Binnamangala Old Madras Road Near Vivekanada </h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

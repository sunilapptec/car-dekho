import React, { useState } from "react"
import { AiFillStar, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
import { BsArrowRight, BsSliders } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
import { IoIosArrowForward } from "react-icons/io"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import { filter, newsAndReview } from "../../assets/data/data"
import { Title } from "../../common/Title"
import { NavLink, useNavigate } from "react-router-dom"

const info = "There are 4978 certified second-hand cars in Bangalore currently available for sale of brands like Maruti, Hyundai, Honda, Toyota, Mahindra. Used/Old cars price start from Rs 60,000 in Bangalore.The most popular used cars are in Bangalore Maruti Swift (Rs. 1.49 Lakh - 9 Lakh), Hyundai i20 (Rs. 1.94 Lakh - 11.70 Lakh), Volkswagen Polo (Rs. 1.80 Lakh - 11.45 Lakh), Mahindra XUV500 (Rs. 1.50 Lakh - 21.45 Lakh), Honda City (Rs. 1.50 Lakh - 97.50 Lakh).To know more about used cars prices, photos, mileage, reviews, and other details, please select your desired model from the list below, Also check used car valuation on CarDekho."

export const SearchContent = () => {
  const [toggle, setToggle] = useState(true)
  const [open, setOpen] = useState(true)
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <div className='searchContent bg-white'>
        <div className='containers flex justify-between medium:flex-col  '>
          <div className='left w-1/4 my-12 medium:w-full'>
            <button onClick={() => setToggle(!toggle)} className='flex items-center border border-gray-200 w-full px-5 py-3 rounded-lg'>
              <BsSliders size={15} />
              <span className='uppercase text-sm font-medium ml-3'> {toggle ? "Expand All Filters" : "COLLAPSE ALL FILTERS"}</span>
            </button>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Budget</h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content mt-3'>
                  <Slider
                    marks={{
                      1: `$1`,
                      1000: `$1000`,
                    }}
                    min={1}
                    max={1000}
                    defaultValue={[600, 1000]}
                    tipProps={{
                      placement: "top",
                      visible: true,
                    }}
                  />
                  <div className='content mt-3'>
                    <span className='mt-12 block text-sm font-medium mb-4'>What is your price range?</span>
                    {filter.map((item) => (
                      <div className='flex justify-between mt-3'>
                        <div className='flex items-center'>
                          <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                          <label className='text-s font-medium ml-5'>{item.price} Lakh</label>
                        </div>
                        <label className='text-sm text-gray1'>{item.product}</label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Budget</h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>

              {toggle && (
                <div className='content mt-3'>
                  <form class='flex items-center'>
                    <div class='relative w-full'>
                      <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <AiOutlineSearch />
                      </div>
                      <input type='text' id='simple-search' class='bg-gray-50 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 focus:border-2 focus:outline-none block w-full pl-10 p-2.5' placeholder='Search' required />
                    </div>
                  </form>
                  <label className='text-s text-gray1 mt-5  block'>POPULAR</label>
                  {filter.map((item) => (
                    <div className='flex justify-between mt-3'>
                      <div className='flex items-center'>
                        <input checked type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                        <label className='text-s font-medium ml-5'>{item.name} </label>
                      </div>
                      <label className='text-sm text-gray1'>{item.product}</label>
                    </div>
                  ))}
                  <label className='text-s text-gray1 mt-5 uppercase  block'>Others </label>
                  {filter.map((item) => (
                    <>
                      <div className='flex justify-between mt-3'>
                        <div className='flex items-center'>
                          <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                          <label className='text-s font-medium ml-5'>{item.name && item.name} </label>
                        </div>
                        <label className='text-sm text-gray1'>{item.product && item.product}</label>
                      </div>
                      <div className='flex justify-between mt-3'>
                        <div className='flex items-center'>
                          <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                          <label className='text-s font-medium ml-5'>{item.name && item.name} </label>
                        </div>
                        <label className='text-sm text-gray1'>{item.product && item.product}</label>
                      </div>
                      <div className='flex justify-between mt-3'>
                        <div className='flex items-center'>
                          <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                          <label className='text-s font-medium ml-5'>{item.name} </label>
                        </div>
                        <label className='text-sm text-gray1'>{item?.product}</label>
                      </div>
                    </>
                  ))}
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Model year </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content mt-3'>
                  <Slider
                    marks={{
                      2002: `2002`,
                      2023: `2023`,
                    }}
                    min={2002}
                    max={2023}
                    defaultValue={[2023]}
                    tipProps={{
                      placement: "top",
                      visible: true,
                    }}
                    className='my-8'
                  />
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Fuel type </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content mt-6'>
                  {filter.map((item) => (
                    <div className='flex justify-between mt-3'>
                      <div className='flex items-center'>
                        <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                        <label className='text-s font-medium ml-5'>{item.type}</label>
                      </div>
                      <label className='text-sm text-gray1'>{item.product}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Body type </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content mt-6'>
                  {filter.map((item) => (
                    <div className='flex justify-between mt-3'>
                      <div className='flex items-center'>
                        <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />
                        <div className='w-10'>
                          <img src={item.cover} alt='cover' className='ml-3 imageFit' />
                        </div>
                        <label className='text-s font-medium ml-5'>{item.name ? item.name : "Car"}</label>
                      </div>
                      <label className='text-sm text-gray1'>{item.product}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Seats </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content mt-6'>
                  {filter.map((item) => (
                    <div className='flex justify-between mt-3'>
                      <div className='flex items-center'>
                        <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />

                        <label className='text-s font-medium ml-5'>{item.seats} Seats</label>
                      </div>
                      <label className='text-sm text-gray1'>{item.product}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Transmission </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content py-6'>
                  <div className='flex justify-between mt-3'>
                    <div className='flex items-center'>
                      <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />

                      <label className='text-s font-medium ml-5'>Automatic</label>
                    </div>
                    <label className='text-sm text-gray1'>1</label>
                  </div>
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Ownership </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Transmission </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content py-3'>
                  <div className='flex justify-between mt-3'>
                    <div className='flex items-center'>
                      <input type='checkbox' class='w-4 h-4 text-red-500 rounded' />

                      <label className='text-s font-medium ml-5'>Nepal</label>
                    </div>
                    <label className='text-sm text-gray1'>1</label>
                  </div>
                </div>
              )}
            </div>

            <div className='border border-gray-200 w-full px-5 py-3 rounded-lg mt-4'>
              <button className='top-btn flex justify-between items-center w-full' onClick={() => setOpen(!open)}>
                <h3 className='font-medium'>Transmission </h3>
                {toggle ? <AiOutlineMinus /> : <AiOutlinePlus size={20} />}
              </button>
              {toggle && (
                <div className='content py-3'>
                  <div className='flex justify-between mt-3'>
                    <div className='flex items-center'>
                      <input checked type='checkbox' class='w-4 h-4 text-red-500 rounded' />

                      <label className='w-5 h-5 bg-red-500 ml-5 mr-2 rounded-md'></label>
                      <label className='text-s font-medium  '>Red</label>
                    </div>
                    <label className='text-sm text-gray1'>1</label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* right */}
          <div className='right w-3/4 pl-12 mb-12 medium:w-full medium:pl-0 overflow-y-hidden relative'>
            {/*<Title title='4978 Second Hand Cars in Bangalore' />
            <div className='top-text'>
              <p className='text-sm leading-6'>{readMore ? info : `${info.substring(0, 275)}...`} </p>
              {readMore && (
                <>
                  <h3 className='text-md text-black font-medium my-5'>Top 5 Used Cars in Bangalore</h3>
                  <table className='text-s'>
                    <thead className='bg-gray-100'>
                      <th className='font-normal'>MODEL</th>
                      <th className='font-normal'>PRICE I BANNGALORE </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Maruti Swift </td>
                        <td>Rs 1.49 Lakh - 9 lakh</td>
                      </tr>
                      <tr>
                        <td>Maruti Swift </td>
                        <td>Rs 1.49 Lakh - 9 lakh</td>
                      </tr>
                      <tr>
                        <td>Maruti Swift </td>
                        <td>Rs 1.49 Lakh - 9 lakh</td>
                      </tr>
                      <tr>
                        <td>Maruti Swift </td>
                        <td>Rs 1.49 Lakh - 9 lakh</td>
                      </tr>
                    </tbody>
                  </table>
                </>
              )}
              <button className='text-black text-sm underline underline-offset-4' onClick={() => setReadMore(!readMore)}>
                {readMore ? "Read Less" : " Read More"}
              </button>
            </div>*/}

            {/* <div className='filter mt-10'>
              <div className='category flex justify-between'>
                <div className='buttons'>
                  <button className='text-lg font-medium mr-5 capitalize'>Budget Cars </button>
                  <button className='text-lg font-medium mr-5 capitalize'>Popular Cars </button>
                  <button className='text-lg font-medium mr-5 capitalize'>Luxury Cars </button>
                  <button className='text-lg font-medium mr-5 capitalize'>Partner Cars </button>
                </div>
                <select name='' id='' className='border border-gray-300 rounded-md text-s'>
                  <option value=''>Relevance</option>
                  <option value=''>Distance</option>
                  <option value=''>Added Date</option>
                  <option value=''>Price - Low to High </option>
                  <option value=''>Price - High to Low</option>
                  <option value=''>Kms - Low to High</option>
                  <option value=''>Model1 - Newest to Oldest</option>
                </select>
              </div>

              <Card />
            </div>*/}

            <CategoryShow title='Choose your budget' price={true} />
            <Card />
            <Card />

            <CategoryShow title='Curated Cars Collection' carImg={true} />
            <Card />
            <Card />

            <CategoryShow title='Body Type' body={true} />
            <Card />
            <Card />

            <CategoryShow title='Nearby Location' location={true} />
            <Card />

            <CategoryShow title='Fuel Type' fuel={true} />
            <Card />

            <CategoryShow title='Similar Cars' name={true} />
            <Card />

            <CompareCard />
          </div>
        </div>
      </div>
    </>
  )
}

export const Card = () => {
  return (
    <div className='content mt-10 grid grid-cols-3 gap-7 tab:grid-cols-2  mobile:grid-cols-1'>
      {newsAndReview.slice(0, 3).map((item) => (
        <div className='box border border-gray-200 rounded-xl shadow-shadow1' data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
          <div className='img relative'>
            <img src={item.cover} alt='cover' className='min-[200px] rounded-t-xl' data-aos='fade-up-right' />
            <div className='bg-red-500 w-7 h-7 flexCenter rounded-md absolute bottom-0 right-0 m-3'>
              <AiFillStar className='text-white' />
            </div>
          </div>
          <div className='details p-5' data-aos='fade-up-left'>
            <h3 className='flex justify-between text-md'>
              <span>{item.title.slice(0, 20)}...</span>
              <i className='ml-3'>
                <AiOutlineHeart size={18} />
              </i>
            </h3>
            <label className='text-s'>15,000 kms • Petrol • Automatic</label>
            <h2 className='text-lg font-semibold'>Rs 26.50 Lakh</h2>
            <div className='flex justify-between my-3'>
              <label className='text-s'>EMI starts @ 16,110/mo</label>
              <div className='flexCenter'>
                <input type='checkbox' class='w-4 h-4 text-red-500 rounded mr-3' />
                <span className='text-sm'>Compare</span>
              </div>
            </div>
            <NavLink to='/#' className='text-red-500 font-medium flex items-center'>
              View Seller Details
              <BsArrowRight className='ml-2' size={20} data-aos='fade-right' />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}

export const CategoryShow = ({ title, price, carImg, body, location, fuel, keys, name }) => {
  return (
    <div className='CategoryBox bg-sky1 px-8 py-4 mobile:px-4 rounded-lg my-10' key={keys}>
      <div className='title'>
        <h3 className='text-md font-medium'>{title}</h3>
      </div>
      <div className='buttons mt-3 flex flex-wrap  mobile:grid mobile:grid-cols-3'>
        {filter &&
          filter.map((item) => (
            <div className='items mr-3 my-1 '>
              {price && <button className='text-s shadow-md  px-5 py-2 rounded-lg bg-white'>{item.price} Lakh</button>}

              {carImg && (
                <div className='box bg-white p-2 rounded-lg shadow-md'>
                  <div className='img'>
                    <img src={item?.carCover} alt='cover' className='w-[80px] h-12 rounded-lg bg-red-200 object-fill' />
                  </div>

                  <div className='texts text-center flex flex-col mt-2'>
                    <span className='text-[12px] leading-[13px]'>{item.curated}</span>
                    <span className='text-[10px]'>{item.price} Lakh</span>
                  </div>
                </div>
              )}

              {body && (
                <div className='box bg-white p-2 rounded-lg shadow-md'>
                  <div className='img'>
                    <img src={item?.cover} alt='cover' className='w-[80px] h-12 rounded-lg object-fill' />
                  </div>

                  <div className='texts text-center flex flex-col mt-2'>
                    <span className='text-[12px] leading-[13px]'>{item.name}</span>
                  </div>
                </div>
              )}

              {location && <button className='text-s shadow-md  px-5 py-2 rounded-lg bg-white'>{item.location} </button>}
              {fuel && <button className='text-s shadow-md  px-5 py-2 rounded-lg bg-white'>{item.type} </button>}
              {name && <button className='text-s shadow-md  px-5 py-2 rounded-lg bg-white'>{item.name} </button>}
            </div>
          ))}
      </div>
    </div>
  )
}

export const CompareCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <section className='compare fixed bottom-5 left-[27.1%] w-[71.5%] tab:w-full tab:left-0'>
        <div className='containers bg-white border border-1 border-gray-200 shadow-xl p-5 rounded-lg '>
          <div className='flex justify-between items-center mobile:flex-col'>
            <div className='grid grid-cols-2 tab:grid-cols-1'>
              <div className='items flex items-center mr-5 tab:mb-3'>
                <button className='w-8 h-8 bg-gray-100 flexCenter rounded-full'>
                  <RxCross2 size={18} />
                </button>
                <div className='img w-20 h-14 mx-5'>
                  <img src='https://stimg2.cardekho.com/images/usedcarimages/large/12-2022/3548168/20211128_171801.jpg' className='ImageFit rounded-xl' alt='' />
                </div>
                <div className='text'>
                  <h3 className='mobile:text-sm'>2021 Jeep Compass Model</h3>
                  <span className='text-s'>15,000 Kms • Petrol • Automatic</span>
                </div>
              </div>
              <div className='items flex items-center'>
                <button className='w-8 h-8 bg-gray-100 flexCenter rounded-full'>
                  <RxCross2 size={18} />
                </button>
                <div className='img w-20 h-14 mx-5'>
                  <img src='https://stimg2.cardekho.com/images/usedcarimages/large/12-2022/3548168/20211128_171801.jpg' className='ImageFit rounded-xl' alt='' />
                </div>
                <div className='text'>
                  <h3 className='mobile:text-sm'>2021 Jeep Compass Model</h3>
                  <span className='text-s'>15,000 Kms • Petrol • Automatic</span>
                </div>
              </div>
            </div>
            <button className='primary-btn flexCenter mobile:mt-2' onClick={() => navigate("/compare")}>
              Compare <IoIosArrowForward />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

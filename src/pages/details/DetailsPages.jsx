import React, { useState } from "react"
import { MdOutline360 } from "react-icons/md"
import { VscTag } from "react-icons/vsc"
import { TbEngine } from "react-icons/tb"
import { GiAirBalloon, GiFuelTank, GiGearStick } from "react-icons/gi"
import { BiPlayCircle } from "react-icons/bi"
import { NavLink, useParams } from "react-router-dom"
import { Comment, DetailsPageHeader, FilterCard, Title } from "../../router/router"
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai"
import { BsLightningCharge, BsSpeedometer2 } from "react-icons/bs"
import { HiArrowLongRight } from "react-icons/hi2"
import { mostSearched } from "../../components/assets/data/data"
import { Carousel } from "react-carousel-minimal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getSingleNewCar } from "../../redux/actions/carAction"
import { toast } from "react-toastify"
import { clearError } from "../../redux/actions/authAction"
import { addCarToFavorite } from "../../redux/actions/favoriteListAction"

const img = "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/7820/1675862859794/front-left-side-47.jpg?tr=w-456"
export const DetailsPages = () => {
  const [chanageContent, setChanageContent] = useState(0)

  const handleTabClick = (contentIndex) => {
    setChanageContent(contentIndex)
  }

  const datas = [
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/audi1.jpg",
    },
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/3-1-1024x683.jpg",
    },
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/2-1-1024x683.jpg",
    },
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/1-1-1024x683.jpg",
    },
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/4-1-1024x683.jpg",
    },
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/5-1-1024x683.jpg",
    },
    {
      image: "https://demo.vehica.com/wp-content/uploads/2020/02/6-1-1024x683.jpg",
    },
  ]

  // get matched id product
  const dispatch = useDispatch()
  const param = useParams()

  const { error, product } = useSelector((state) => state.newCarsDetails)

  const id = param.id
  useEffect(() => {
    dispatch(getSingleNewCar(id))

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
    if (errorFav) {
      toast.error(errorFav)
      dispatch(clearError())
    }
  }, [dispatch, error, id])

  //add to favorite list
  const { error: errorFav, favoriteItem } = useSelector((state) => state.favorites)

  const addToFavorite = () => {
    const formData = new FormData()
    const quantity = 1

    formData.set("car_id", id)
    formData.set("quantity", quantity)
    dispatch(addCarToFavorite(formData))

    if (favoriteItem) {
      toast.success("Car Added to Favorite")
    } else {
      console.log(errorFav)
    }
  }

  return (
    <>
      <section className='details-pages overflow-x-hidden'>
        <DetailsPageHeader />

        <div className='imageContent py-8 bg-white pl-5 '>
          <div className='containers flex justify-between tab:flex-col'>
            <div className='left w-1/2 flex mobile:flex-col tab:w-full' data-aos='zoom-in-right'>
              <div className='mobile:flex mobile:justify-between'>
                <div className='ima-cat w-14 h-14 relative rounded-xl my-5' onClick={() => handleTabClick(0)} data-aos='zoom-in-right'>
                  <div>
                    <img src={img} alt='cover' className='rounded-xl' />
                    <div className='text-s overlayImg'>+39 Images</div>
                  </div>
                </div>
                <div className='ima-cat w-14 h-14 relative rounded-xl my-5' onClick={() => handleTabClick(1)} data-aos='zoom-in-right'>
                  <div>
                    <img src={img} alt='cover' className='rounded-xl' />
                    <div className='text-s overlayImg'>
                      <MdOutline360 size={30} className='ml-2' />
                    </div>
                  </div>
                </div>
                <div className='ima-cat w-14 h-14 relative rounded-xl my-5' onClick={() => handleTabClick(2)} data-aos='zoom-in-right'>
                  <div>
                    <img src={img} alt='cover' className='rounded-xl' />
                    <div className='text-s overlayImg '> +8 Colours </div>
                  </div>
                </div>
                <div className='ima-cat w-14 h-14 relative rounded-xl my-5' onClick={() => handleTabClick(3)} data-aos='zoom-in-right'>
                  <div>
                    <img src={img} alt='cover' className='rounded-xl' />
                    <div className='text-s overlayImg'>
                      <BiPlayCircle size={30} className='ml-2' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='img ml-5 mobile:ml-0 w-full'>
                {chanageContent === 0 && (
                  <section id='ImageSection'>
                    <Carousel
                      data={datas}
                      time={2000}
                      width='650px'
                      height='400px'
                      radius='10px'
                      slideNumber={true}
                      automatic={false}
                      dots={false}
                      pauseIconColor='white'
                      pauseIconSize='40px'
                      slideImageFit='cover'
                      thumbnails={true}
                      thumbnailWidth='100px'
                      style={{
                        textAlign: "center",
                        maxWidth: "750px",
                        maxHeight: "450px",
                        margin: "auto auto 40px auto",
                      }}
                    />
                  </section>
                )}
                {chanageContent === 1 && (
                  <section id='Image360Section'>
                    <img src={img} alt='cover' className='rounded-md' data-aos='zoom-in-right' />
                  </section>
                )}
                {chanageContent === 2 && (
                  <section id='ImageColorsSection'>
                    <div className='h-[40vh] w-full'>
                      <img src='https://demo.vehica.com/wp-content/uploads/2020/02/audi1.jpg' alt='cover' className='rounded-md ImageFit' data-aos='zoom-in-right' />
                    </div>

                    <div className='flex mt-5'>
                      <button className='w-12 h-12 rounded-xl shadow-shadow1 bg-red-600 '></button>
                      <button className='w-12 h-12 rounded-xl shadow-shadow1 bg-yellow mx-5'></button>
                      <button className='w-12 h-12 rounded-xl shadow-shadow1 bg-black'></button>
                      <button className='w-12 h-12 rounded-xl shadow-shadow1 bg-white mx-5'></button>
                      <button className='w-12 h-12 rounded-xl shadow-shadow1 bg-gray-200'></button>
                    </div>
                  </section>
                )}
                {chanageContent === 3 && (
                  <section id='VideoSection'>
                    <iframe width='560' height='315' src='https://www.youtube-nocookie.com/embed/722kmy42Wc4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>{" "}
                  </section>
                )}
              </div>
            </div>
            <div className='right w-1/2 ml-16 tab:w-full tab:mt-8 mobile:ml-0'>
              <div className='flex justify-between mobile:flex-col'>
                <div className='text w-1/2 mobile:w-full'>
                  <h1 className='text-2xl font-semibold' data-aos='zoom-in-left'>
                    Maruti Swift
                  </h1>
                  <div className='rating flex items-center my-3' data-aos='zoom-in-left'>
                    <div className='rating-outer'>
                      <div
                        className='rating-inner'
                        style={{
                          width: `%`,
                        }}
                      ></div>
                    </div>
                    <p className='text-sm ml-5'>251 reviews</p>
                  </div>
                  <h2 className='text-xl font-semibold' data-aos='zoom-in-left'>
                    Rs 6.00 - 8.98 Lakh*
                    <NavLink to='/' className='text-red-500 ml-2 text-sm font-normal'>
                      Get On Road Price
                    </NavLink>
                  </h2>
                  <label className='text-sm text-gray1' data-aos='zoom-in-left'>
                    *Ex-showroom Price in Kathmandu
                  </label>
                  <br />
                  <button className='primary-btn shadow-xl mt-7 mb-4' data-aos='zoom-in-left'>
                    View Current Offers
                  </button>
                  <div className='flex items-center' data-aos='zoom-in-left'>
                    <VscTag size={28} />
                    <label className='text-sm text-gray1 ml-3'>Don't miss out on the best offers for this month</label>
                  </div>
                </div>
                <div className='icons flex w-1/2 mobile:w-full justify-end'>
                  <button onClick={addToFavorite} className='icons w-9 h-9 rounded-full bg-gray-200 flexCenter mx-7'>
                    <AiOutlineHeart size={25} />
                  </button>
                  <div className='icons w-9 h-9 rounded-full bg-gray-200 flexCenter'>
                    <AiOutlineShareAlt size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='main-content my-10'>
          <div className='containers flex tab:flex-col'>
            <div className='content-left mr-6 w-3/4 tab:w-full'>
              <div className='key-feature bg-white border border-gray-200 rounded-md'>
                <div className='p-5'>
                  <Title title='Key Specs of Maruti Swift' />
                  <div className='flex justify-between items-center text-center tab:grid tab:grid-cols-3 tab:gap-5 mobile:grid-cols-2' data-aos='zoom-out-left'>
                    <div className='box px-5 capitalize text-center'>
                      <TbEngine size={35} className='mx-auto' />
                      <span className='text-s text-gray1'>Engine</span>
                      <h4>{product.data?.engineTransmission?.engine_displacement} cc</h4>
                    </div>
                    <div className='box px-5 capitalize'>
                      <BsLightningCharge size={35} className='mx-auto' />
                      <span className='text-s text-gray1'>BHP</span>
                      <h4>{product.data?.engineTransmission?.max_power} Bhp</h4>
                    </div>
                    <div className='box px-5 capitalize'>
                      <GiGearStick size={35} className='mx-auto' />
                      <span className='text-s text-gray1'>Transmission</span>
                      <h4>Manual/Automatic</h4>
                    </div>
                    <div className='box px-5 capitalize'>
                      <BsSpeedometer2 size={35} className='mx-auto' />
                      <span className='text-s text-gray1'>Mileage</span>
                      <h4>{product.data?.fuelPerformance?.mileage} kmpl</h4>
                    </div>
                    <div className='box px-5 capitalize'>
                      <GiFuelTank size={35} className='mx-auto' />
                      <span className='text-s text-gray1'>Fuel</span>
                      <h4>
                        {product.data?.fuelPerformance?.fuel_type}/{product.data?.fuelPerformance?.secondary_fuel_type}
                      </h4>
                    </div>
                    <div className='box px-5 capitalize'>
                      <GiAirBalloon size={35} className='mx-auto' />
                      <span className='text-s text-gray1'>Airbags</span>
                      <h4>{product.data?.safety?.passenger_airbag}</h4>
                    </div>
                  </div>
                </div>
                <div className='see-all border-t border-gray-200  px-5 py-4'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    Specs and Features <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>

              <div className='key-feature bg-white border border-gray-200 rounded-md my-8'>
                <div className='p-5'>
                  <Title title='Maruti Swift Latest Update' />
                  <p data-aos='zoom-out-left'>
                    Latest Update:
                    <a href='/#' className='text-blue-500 underline underline-offset-4'>
                      Buyers can save up to Rs 44,000 on Maruti Swift in February.
                    </a>
                  </p>
                  <p data-aos='zoom-out-left'>Variants: It can be had in four trims: LXi, VXi, ZXi and ZXi+. The VXi and ZXi trims are also offered with a CNG option.</p>
                  <p data-aos='zoom-out-left'>Price: Prices for the Swift range between Rs 6 lakh and Rs 8.98 lakh (ex-showroom Delhi).</p>
                </div>
                <div className='see-all border-t border-gray-200  px-5 py-4'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    Read More <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>

              <div className='key-feature bg-white border border-gray-200  rounded-md'>
                <div className='p-5'>
                  <Title title='Maruti Suzuki Swift price list (Variants)' />
                  <p>The price of Maruti Swift starts at Rs. 6.00 Lakh and goes upto Rs. 8.98 Lakh. Maruti Swift is offered in 11 variants - the base model of Swift is LXI and the top variant Maruti Swift ZXI Plus DT AMT which comes at a price tag of Rs. 8.98 Lakh.</p>
                </div>
                <div className='see-all border-t border-gray-200  px-5 py-4' data-aos='zoom-out-left'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    Specs and Features <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>

              <div className='key-feature bg-white border border-gray-200  rounded-md mt-8'>
                <div className='p-5' data-aos='zoom-out-left'>
                  <Title title='Maruti Suzuki Swift Review' />
                  <p>Maruti’s bestseller gets a handful of changes and a new engine. Is it still the sensible yet fun choice it was before?</p>
                </div>
                <div className='see-all border-t border-gray-200  px-5 py-4' data-aos='zoom-out-left'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    Specs and Features <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>

              {/* <FilterCard className='none' title='Maruti Suzuki Swift Comparison with similar cars' item={mostSearchData} show={false} />*/}

              <div className='key-feature bg-white border border-gray-200  rounded-md my-8'>
                <div className='p-5'>
                  <Title title='Specification of Maruti Swift' />
                  <div className='grid grid-cols-2 mobile:grid-cols-1 gap-5 faq capitalize' data-aos='zoom-out-left'>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>ARAI Mileage</span>
                      <span>{product?.data?.fuelPerformance?.mileage} kmpl</span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Fuel Type</span>
                      <span>{product?.data?.fuelPerformance?.fuel_type} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>No. of cylinder</span>
                      <span>{product?.data?.engineTransmission?.cylinder_no} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Transmission Type</span>
                      <span>{product?.data?.engineTransmission?.cylinder_no} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Fuel Tank Capacity</span>
                      <span>{product?.data?.fuelPerformance?.fuel_tank_capacity} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Service Cost (Avg. of 5 years)</span>
                      <span> None </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Engine Displacement (cc)</span>
                      <span> {product?.data?.engineTransmission?.engine_displacement} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Max Power (bhp@rpm)</span>
                      <span> {product?.data?.engineTransmission?.max_power} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Seating Capacity</span>
                      <span> {product?.data?.dimensionCapacity?.seating_capacity} </span>
                    </div>
                    <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
                      <span>Body Type</span>
                      <span>None </span>
                    </div>
                  </div>
                </div>

                <div className='see-all border-t border-gray-200  px-5 py-4'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    Specs and Features <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>

              <div className='key-feature bg-white border border-gray-200 rounded-md'>
                <div className='p-5'>
                  <Title title='Maruti Suzuki Swift Mileage' />
                  <p data-aos='zoom-out-left'>The claimed ARAI mileage: Maruti Swift Petrol is 23.2 kmpl | Maruti Swift CNG is 30.9 km/kg.The claimed ARAI mileage for the automatic variants: Maruti Swift Petrol is 23.76 kmpl.</p>

                  <table className='m mobile:overflow-x-scroll'>
                    <thead className='bg-gray-100' data-aos='zoom-out-left'>
                      <tr>
                        <th>Fuel Type </th>
                        <th>Transmission</th>
                        <th>ARAI Mileage</th>
                      </tr>
                    </thead>
                    <tbody data-aos='zoom-out-left'>
                      <tr>
                        <td>Petrol</td>
                        <td>Automatic</td>
                        <td>23.76 kmpl</td>
                      </tr>
                      <tr>
                        <td>Petrol</td>
                        <td>Manual</td>
                        <td>23.2 kmpl</td>
                      </tr>
                      <tr>
                        <td>CNG</td>
                        <td>Manual</td>
                        <td>30.9 km/kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='see-all border-t border-gray-200  px-5 py-4'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    Specs and Features <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>

              <Comment />
            </div>

            <div className='content-right w-3/12 tab:w-full h-[98vh] tab:h-auto bg-white border border-gray-200 rounded-md'>
              <div className='filter-card'>
                <div className='p-5'>
                  <h2 className='text-lg font-medium' data-aos='fade-left'>
                    Trending Maruti Cars
                  </h2>
                  <div className='category border-b-2 border-gray-200 py-3 flex justify-between' data-aos='fade-left'>
                    <button className='text capitalize mr-2 activeLine text-sm'>Popular </button>
                    <button className='text capitalize mr-2 text-sm'>Upcoming</button>
                    <button className='text capitalize mr-2 text-sm'>All Cars</button>
                  </div>

                  <div className='mt-5' data-aos='fade-left'>
                    {mostSearched.map((car, i) => (
                      <div className='box flex mb-5' key={i}>
                        <div className='w-24 tab:w-[200px] tab:mr-5 mr-3'>
                          <NavLink to='/single-page'>
                            <img src={car?.cover} alt='cover' className='tab:rounded-xl' />
                          </NavLink>
                        </div>
                        <div className='text'>
                          <h3>{car?.name}</h3>
                          <h2 className='text-sm font-medium'>{car?.price}</h2>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='see-all border-t-2 border-gray-200 p-3' data-aos='fade-left'>
                  <NavLink to='/' className='text-green2 flex items-center text-sm'>
                    View All Car <HiArrowLongRight className='ml-3' size={22} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

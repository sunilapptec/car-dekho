import React, { useEffect, useState } from "react"
import { AiFillStar, AiOutlineClose } from "react-icons/ai"
import { BsCheck2, BsStarHalf } from "react-icons/bs"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink, useParams } from "react-router-dom"
import { mostSearched, specification } from "../../../components/assets/data/data"
import { FilterCard, Title } from "../../../router/router"
import { useActiveMenu } from "react-active-menu"
import { useDispatch, useSelector } from "react-redux"
import { getSingleNewCar } from "../../../redux/actions/carAction"
import { clearError } from "../../../redux/actions/authAction"
import { toast } from "react-toastify"
import { Loader } from "../../../components/common/Loader"

const img = "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/7820/1675862859794/front-left-side-47.jpg?tr=w-456"

export const Specifications = () => {
  const [mostSearchData, setMostSearchData] = useState(mostSearched)

  // get matched id product
  const dispatch = useDispatch()
  const { id } = useParams()

  const { error, product } = useSelector((state) => state.newCarsDetails)

  /*useEffect(() => {
    dispatch(getSingleNewCar(id))

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error, id])*/

  return (
    <>
      <section className='specifications'>
        <Title title='Swift Specs, Features and Price' />
        <CurrentProduct />

        <div className='key-feature bg-white border border-gray-200  rounded-md my-8'>
          <div className='p-5'>
            <Title title='Key Specifications of Maruti Swift' />
          </div>

          <div className='grid grid-cols-2 tab:grid-cols-1 gap-3 faq' data-aos='zoom-out-left'>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>ARAI Mileage</span>
              <span>{product?.data?.fuelPerformance?.mileage} kmpl</span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Fuel Type</span>
              <span>{product?.data?.fuelPerformance?.fuel_type} </span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>No. of cylinder</span>
              <span>{product?.data?.engineTransmission?.cylinder_no} </span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Max Torque (nm@rpm)</span>
              <span>{product?.data?.engineTransmission?.max_torque} </span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Transmission Type</span>
              <span>{product?.data?.engineTransmission?.cylinder_no} </span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Fuel Tank Capacity</span>
              <span>{product?.data?.fuelPerformance?.fuel_tank_capacity} </span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Service Cost (Avg. of 5 years)</span>
              <span> None </span>
            </div>
            <div className='box pb-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>City Mileage</span>
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

          <div className='px-5 mt-6'>
            <Title title='Key Features of Maruti Swift' />
          </div>
          <div className='grid grid-cols-2 tab:grid-cols-1 gap-3 faq' data-aos='zoom-out-left'>
            <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Power Steering</span>
              {product?.data?.comfortConvenience?.power_steering ? (
                <span>
                  <BsCheck2 className='text-green-500' size={22} />
                </span>
              ) : (
                <span>
                  <AiOutlineClose className='text-red-500' size={22} />
                </span>
              )}
            </div>
            <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Power Windows Front</span>
              {product?.data?.comfortConvenience?.power_windows_front ? (
                <span>
                  <BsCheck2 className='text-green-500' size={22} />
                </span>
              ) : (
                <span>
                  <AiOutlineClose className='text-red-500' size={22} />
                </span>
              )}
            </div>
            <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Anti Lock Braking System</span>
              {product?.data?.comfortConvenience?.power_windows_front ? (
                <span>
                  <BsCheck2 className='text-green-500' size={22} />
                </span>
              ) : (
                <span>
                  <AiOutlineClose className='text-red-500' size={22} />
                </span>
              )}
            </div>
            <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Air Conditioner</span>
              {product?.data?.comfortConvenience?.ac ? (
                <span>
                  <BsCheck2 className='text-green-500' size={22} />
                </span>
              ) : (
                <span>
                  <AiOutlineClose className='text-red-500' size={22} />
                </span>
              )}
            </div>
            <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Driver Airbag</span>
              {product?.data?.safety?.airbags_nos === 0 ? (
                <span>
                  <AiOutlineClose className='text-red-500' size={22} />
                </span>
              ) : (
                <span>
                  <BsCheck2 className='text-green-500' size={22} />
                </span>
              )}
            </div>
            <div className='box py-3 flex justify-between border-b border-gray-200 mx-5'>
              <span>Passenger Airbag</span>
              {product?.data?.safety?.passenger_airbag ? (
                <span>
                  <BsCheck2 className='text-green-500' size={22} />
                </span>
              ) : (
                <span>
                  <AiOutlineClose className='text-red-500' size={22} />
                </span>
              )}
            </div>
          </div>
        </div>

        <div className='key-feature relative bg-white border border-gray-200 rounded-md mt-8'>
          <div className='px-5 pt-4 border-b border-gray-200'>
            <Title title='Maruti Swift Specifications' />
          </div>
          <SpecificationsDetailComponent data={product.data} />
        </div>

        <FilterCard className='none' title='Maruti Suzuki Swift Comparison with similar cars' item={mostSearchData} show={false} />
      </section>
    </>
  )
}

export const SpecificationsDetailComponent = ({ data }) => {
  const { registerContainer, registerSection, registerTrigger } = useActiveMenu({
    offset: 60,
    smooth: true,
  })
  return (
    <>
      <div className='items border flex relative'>
        <div className='category py-5 w-2/6 h-[65vh] bg-gray-50 mobile:hidden' data-aos='fade-right'>
          <button ref={registerTrigger("content1")} type='button' className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Engine and Transmission
          </button>
          <button ref={registerTrigger("content2")} type='button' className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Fuel & Performance
          </button>
          <button ref={registerTrigger("content3")} type='button' className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Suspension, Steering & Brakes
          </button>
          <button ref={registerTrigger("content4")} className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Dimensions & Capacity
          </button>
          <button ref={registerTrigger("content5")} className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Comfort & Convenience
          </button>
          <button ref={registerTrigger("content6")} className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Interior
          </button>
          <button ref={registerTrigger("content7")} className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Exterior
          </button>
          <button ref={registerTrigger("content8")} className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Safety
          </button>
          <button ref={registerTrigger("content9")} className='mb-2.5 px-5 py-3 text-sm text-left w-full text-primary bg-gray-100'>
            Entertainment & Communication
          </button>
        </div>

        <div className='w-4/6 py-5 h-[65vh] overflow-auto overflow-x-hidden mobile:w-full' ref={registerContainer}>
          <div className='content' ref={registerSection("content1")}>
            <div className='flex justify-center items-center mb-8' data-aos='fade-left' data-aos-delay='100'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-auto text-md font-medium mx-1  mobile:w-full'>Engine and Transmission</h2>
              <hr className='w-[40%] h-[2px] bg-red-500' />
            </div>

            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='300'>
              <span>Displacement (cc)</span>
              <span>{data?.engineTransmission?.engine_displacement}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='400'>
              <span>Max Power</span>
              <span>{data?.engineTransmission?.max_power}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='500'>
              <span>Max Torque</span>
              <span>{data?.engineTransmission?.max_torque}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='600'>
              <span>No. of cylinder</span>
              <span>{data?.engineTransmission?.cylinder_no}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='700'>
              <span>Valves Per Cylinder</span>
              <span>{data?.engineTransmission?.valves_per_cylinder}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='800'>
              <span>TransmissionType</span>
              <span>{data?.engineTransmission?.transmission_type}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='900'>
              <span>Gear Box</span>
              <span>{data?.engineTransmission?.gear_box}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize' data-aos='fade-left' data-aos-delay='900'>
              <span>engine type</span>
              <span>{data?.engineTransmission?.engine_type}</span>
            </div>
          </div>
          <div className='content' ref={registerSection("content2")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[25%] text-md font-medium mx-1 mobile:w-full'>Fuel & Performance</h2>
              <hr className='w-[45%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>Fuel Type </span>
              <span>{data?.fuelPerformance?.fuel_type}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>Petrol Mileage (ARAI)</span>
              <span>{data?.fuelPerformance?.mileage}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>fuel tank capacity</span>
              <span>{data?.fuelPerformance?.fuel_tank_capacity}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>Emission Norm Compliance</span>
              <span>{data?.fuelPerformance?.emission_norm_compliance}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>secondary fuel type</span>
              <span>{data?.fuelPerformance?.secondary_fuel_type}</span>
            </div>
          </div>
          <div className='content' ref={registerSection("content3")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[40%] text-md font-medium mx-1 mobile:w-full'>Suspension, Steering & Brakes</h2>
              <hr className='w-[30%] h-[2px] bg-red-500' />
            </div>

            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>front brake type</span>
              <span>{data?.suspensionBrake?.front_brake_type}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>front suspension</span>
              <span>{data?.suspensionBrake?.front_suspension}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>rear brake type</span>
              <span>{data?.suspensionBrake?.rear_brake_type}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>rear suspension</span>
              <span>{data?.suspensionBrake?.rear_suspension}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>steering suspension</span>
              <span>{data?.suspensionBrake?.steering_suspension}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>turning radius</span>
              <span>{data?.suspensionBrake?.turning_radius}</span>
            </div>
          </div>
          <div className='content' ref={registerSection("content4")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[30%] text-md font-medium mx-1 mobile:w-full'>Dimensions & Capacity</h2>
              <hr className='w-[40%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Length (mm)</span>
              <span>{data?.dimensionCapacity?.length}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Width (mm)</span>
              <span>{data?.dimensionCapacity?.width}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Height (mm)</span>
              <span>{data?.dimensionCapacity?.height}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Seating Capacity</span>
              <span>{data?.dimensionCapacity?.seating_capacity}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Wheel Base (mm)</span>
              <span>{data?.dimensionCapacity?.wheel_base}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Front Tread (mm)</span>
              <span>{data?.dimensionCapacity?.front_tread}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Rear Tread (mm)</span>
              <span>{data?.dimensionCapacity?.rear_tread}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Kerb Weight (Kg)</span>
              <span>{data?.dimensionCapacity?.kerb_weight}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>Gross Weight (Kg)</span>
              <span>{data?.dimensionCapacity?.gross_weight}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>No of Doors</span>
              <span>{data?.dimensionCapacity?.doors_no}</span>
            </div>
          </div>
          <div className='content' ref={registerSection("content5")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[35%] text-md font-medium mx-1 mobile:w-full'>Comfort & Convenience</h2>
              <hr className='w-[35%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>AC</span>
              <span>{data?.comfortConvenience?.ac}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>accessory power outlet</span>
              <span>{data?.comfortConvenience?.accessory_power_outlet}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>additional features</span>
              <span>{data?.comfortConvenience?.additional_features}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>foldable rear seat</span>
              <span>{data?.comfortConvenience?.foldable_rear_seat}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>heater</span>
              <span>{data?.comfortConvenience?.heater}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>keyless entry</span>
              <span>{data?.comfortConvenience?.keyless_entry}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>parking sensors</span>
              <span>{data?.comfortConvenience?.parking_sensors}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>power steering</span>
              <span>{data?.comfortConvenience?.power_steering}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>power windows front</span>
              <span>{data?.comfortConvenience?.power_windows_front}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>rear seat headrest</span>
              <span>{data?.comfortConvenience?.rear_seat_headrest}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>AC</span>
              <span>{data?.comfortConvenience?.ac}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>remote fuel lid opener</span>
              <span>{data?.comfortConvenience?.remote_fuel_lid_opener}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>remote trunk opener</span>
              <span>{data?.comfortConvenience?.remote_trunk_opener}</span>
            </div>
          </div>

          <div className='content capitalize' ref={registerSection("content6")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[10%] text-md font-medium mx-1 mobile:w-full'>Interior</h2>
              <hr className='w-[60%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>digital clock</span>
              <span>{data?.interior?.digital_clock}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>dual tone dashboard</span>
              <span>{data?.interior?.dual_tone_dashboard}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>fabric upholstery</span>
              <span>{data?.interior?.fabric_upholstery}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>glove compartment</span>
              <span>{data?.interior?.glove_compartment}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>additional features</span>
              <span>{data?.interior?.additional_features}</span>
            </div>
          </div>
          <div className='content capitalize' ref={registerSection("content7")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[10%] text-md font-medium mx-1 mobile:w-full'>exterior</h2>
              <hr className='w-[60%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>adjustable headlights</span>
              <span>{data?.exterior?.adjustable_headlights}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>halogen headlamps</span>
              <span>{data?.exterior?.halogen_headlamps}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>manually adjustable rear mirror</span>
              <span>{data?.exterior?.manually_adjustable_rear_mirror}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>tyre size</span>
              <span>{data?.exterior?.tyre_size}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>wheel covers</span>
              <span>{data?.exterior?.wheel_covers}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>wheel size</span>
              <span>{data?.exterior?.wheel_size}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>additional features</span>
              <span>{data?.exterior?.additional_features}</span>
            </div>
          </div>
          <div className='content capitalize' ref={registerSection("content8")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[10%] text-md font-medium mx-1 mobile:w-full'>safety</h2>
              <hr className='w-[60%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>ABS</span>
              <span>{data?.safety?.abs}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>adjustable seats</span>
              <span>{data?.safety?.adjustable_seats}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>advance safety features</span>
              <span>{data?.safety?.advance_safety_features}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>airbags no</span>
              <span>{data?.safety?.airbags_nos}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>central locking</span>
              <span>{data?.safety?.central_locking}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>child safety locks</span>
              <span>{data?.safety?.child_safety_locks}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>crash sensor</span>
              <span>{data?.safety?.crash_sensor}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>EBD</span>
              <span>{data?.safety?.ebd}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>engine immobilizer</span>
              <span>{data?.safety?.engine_immobilizer}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>passenger airbag</span>
              <span>{data?.safety?.passenger_airbag}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>passenger mirror</span>
              <span>{data?.safety?.passenger_side_rear_view_mirror}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>power door locks</span>
              <span>{data?.safety?.power_door_locks}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>rear seat belts</span>
              <span>{data?.safety?.rear_seat_belts}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>seat belt warning</span>
              <span>{data?.safety?.seat_belt_warning}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5'>
              <span>speed alert</span>
              <span>{data?.safety?.speed_alert}</span>
            </div>
          </div>

          <div className='content capitalize' ref={registerSection("content9")}>
            <div className='flex justify-center items-center mb-8'>
              <hr className='w-[10%] h-[2px] bg-red-500' />
              <h2 className='w-[45%] text-md font-medium mx-1 mobile:w-full'>entertainment and Communication</h2>
              <hr className='w-[25%] h-[2px] bg-red-500' />
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>bluetooth connectivity </span>
              <span>{data?.entertainmentCommunication?.bluetooth_connectivity}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>integrated audio</span>
              <span>{data?.entertainmentCommunication?.integrated_2din_audio}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>radio</span>
              <span>{data?.entertainmentCommunication?.radio}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>speaker front</span>
              <span>{data?.entertainmentCommunication?.speaker_front}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>touch screen</span>
              <span>{data?.entertainmentCommunication?.touch_screen}</span>
            </div>
            <div className='text px-16 mobile:px-5 flex justify-between mb-5 capitalize'>
              <span>usb auxiliary input</span>
              <span>{data?.entertainmentCommunication?.usb_auxiliary_input}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const CurrentProduct = () => {
  return (
    <div className='bg-white border border-gray-200 rounded-md p-5'>
      <div className='flex mobile:flex-col'>
        <div className='img w-64 mobile:w-full mr-7'>
          <img src={img} alt='cover' data-aos='zoom-in-right' />
        </div>
        <div className='text mobile:mt-5'>
          <h1 className='text-2xl font-semibold' data-aos='zoom-in-left'>
            Maruti Swift
          </h1>

          <div className='rating flex items-center my-1' data-aos='zoom-in-left'>
            <AiFillStar className='text-yellow' />
            <AiFillStar className='text-yellow' />
            <AiFillStar className='text-yellow' />
            <AiFillStar className='text-yellow' />
            <BsStarHalf size={14} className='text-yellow' />

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
          <button className='primary-btn shadow-xl mt-3 mb-2' data-aos='zoom-in-left'>
            View Current Offers
          </button>
        </div>
      </div>
    </div>
  )
}

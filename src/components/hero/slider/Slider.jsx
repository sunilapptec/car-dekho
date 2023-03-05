import React from "react"
import { hero } from "../../assets/data/data"
//import logo from "../../assets/images/login.svg"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Radio, Select, Option } from "@material-tailwind/react"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[45%]  z-20 left-5 text-white w-12 h-12 rounded-full bg-indigo-500 shadow-shadow3 cursor-pointer flex place-items-center justify-center'>
      <MdKeyboardArrowLeft size={30} />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[45%]  z-20 right-5 text-white w-12 h-12 rounded-full bg-indigo-500 shadow-shadow3 cursor-pointer flex place-items-center justify-center'>
      <MdKeyboardArrowRight size={30} />
    </div>
  )
}
export const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
    arrow: true,
  }
  return (
    <>
      <section className='slider relative sliderHome'>
        <div className='containers flex justify-between py-10'>
          <div className='find shadow-shadow2 w-1/4 tab:w-full p-6 rounded-md py-5 bg-white relative z-10'>
            <h1 className='text-2xl text-black font-semibold'>Find your right car</h1>

            <Tabs id='custom-animation' value='tab1'>
              <TabsHeader className='flex mt-6 bg-none' background='none'>
                <Tab key='tab1' shadow={0} value='tab1' className='p-3.5'>
                  New Car
                </Tab>
                <Tab key='tab2' value='tab2' className='p-3.5'>
                  Used Car
                </Tab>
              </TabsHeader>
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                <TabPanel value='tab1'>
                  <div className='flex my-3'>
                    <div className='radioBtn'>
                      <Radio id='blue' label='By Budget' name='color' color='blue' defaultChecked />
                    </div>
                    <div className='radioBtn ml-5'>
                      <Radio id='blue' label='By Model' name='color' color='blue' />
                    </div>
                  </div>
                  <div className='slectBox'>
                    <select className='w-full p-4 border boder-2 border-gray-200 outline-none'>
                      <option>Select Budget</option>
                      <option>1 - 5 Lakh</option>
                      <option>5 - 10 Lakh</option>
                      <option>10 - 15 Lakh</option>
                      <option>20 - 25 Lakh</option>
                    </select>
                    <select className='w-full p-4 border boder-2 border-gray-200 outline-none'>
                      <option>All Model</option>
                      <option>Hondo</option>
                      <option>Hondo</option>
                      <option>Hondo</option>
                      <option>Hondo</option>
                    </select>
                    <button className='primary-btn w-full my-5'>Search</button>
                  </div>
                </TabPanel>
                <TabPanel value='tab2'>
                  <div className='flex my-5'>
                    <div className='radioBtn'>
                      <Radio id='blue' label='By Budget' name='color' color='blue' defaultChecked />
                    </div>
                    <div className='radioBtn ml-5'>
                      <Radio id='blue' label='By Brand' name='color' color='blue' />
                    </div>
                  </div>
                  <div className='slectBox'>
                    <select className='w-full  p-4 border boder-2 border-gray-200 outline-none'>
                      <option>Select Budget</option>
                      <option>1 - 5 Lakh</option>
                      <option>5 - 10 Lakh</option>
                      <option>10 - 15 Lakh</option>
                      <option>20 - 25 Lakh</option>
                    </select>
                    <select className='w-full  p-4 border boder-2 border-gray-200 outline-none'>
                      <option>Select Budget</option>
                      <option>Kathmandu </option>
                      <option>Gorkha </option>
                      <option>Pokhara </option>
                    </select>
                    <button className='primary-btn w-full my-5'>Search</button>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
          <div className='images absolute top-0 left-0 w-[100%] h-[70vh] z-2 tab:bg-red-300 tab:hidden'>
            <Slider {...settings}>
              {hero.map((item) => (
                <div className='img h-[70vh] tab:h-[50vh]' key={item.id}>
                  <img src={item.cover} alt='cover' className='ImageFit' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

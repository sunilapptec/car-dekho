import React from "react"
import { Title } from "../common/Title"
import { popularBrands } from "../assets/data/data"
import { Select, Option, Textarea, Input } from "@material-tailwind/react"

export const AddUsedCar = () => {
  return (
    <>
      <section className='admin-dashbaord'>
        <Title title='Add Car' />
        <div className='content'>
          <form className='items my-5 bg-white p-7 rounded-lg shadow-shadow1 relative'>
            <div className='grid grid-cols-2 gap-5 capitalize'>
              <div className='w-full'>
                {/*<h3 className='text-sm mb-2'>Select Your Car Brand</h3>*/}
                <Select label='Select Your Car Brand' size='md'>
                  {popularBrands.map((item) => (
                    <Option value={item.name}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className='w-full'>
                {/*<h3 className='text-sm mb-2'>Select the registration year</h3>*/}
                <Select label='Select the registration year' size='md'>
                  {popularBrands.map((item) => (
                    <Option value={item.name}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className='w-full'>
                {/*<h3 className='text-sm mb-2'>Select your Hyundai</h3>*/}
                <Select label='Select your Hyundai' size='md'>
                  {popularBrands.map((item) => (
                    <Option value={item.name}>{item.name}</Option>
                  ))}
                </Select>
              </div>
              <div className='w-full'>
                {/*<h3 className='text-sm mb-2'>Select Variant</h3>*/}
                <Select label='Select Variant' size='md'>
                  <Option>Petrol Variant</Option>
                  <Option>Diesel Variant</Option>
                </Select>
              </div>
              <div className='w-full'>
                {/*<h3 className='text-sm mb-2'>Select Car Ownership</h3>*/}
                <Select label='Select Car Ownership' size='md'>
                  <Option>1st owner</Option>
                  <Option>2nd owner</Option>
                  <Option>3rd owner</Option>
                  <Option>4th owner</Option>
                  <Option>5th owner</Option>
                </Select>
              </div>
              <div className='w-full'>
                {/*<h3 className='text-sm mb-2'>Select KM driven</h3>*/}
                <Select label='Select KM driven' size='md'>
                  <Option> 0 km - 10,000 km</Option>
                  <Option>10,000 km - 20,000 km</Option>
                  <Option>20,000 km - 30,000 km</Option>
                  <Option>30,000 km - 40,000 km</Option>
                  <Option>40,000 km - 50,000 km</Option>
                  <Option>50,000 km - 60,000 km</Option>
                  <Option>60,000 km - 70,000 km</Option>
                </Select>
              </div>
            </div>
            <div className='w-full mt-5'>
              {/*<h3 className='text-sm mb-2'>What is your location?</h3>*/}
              <Select label='What is your location?' size='md'>
                <Option>Kathmandu</Option>
                <Option>Kathmandu</Option>
                <Option>Kathmandu</Option>
              </Select>
            </div>
            <div className='w-full mt-5'>
              <Textarea size='lg' label='Write Features of car' />
            </div>
            <div className='flex justify-center'>
              <div className='mb-4 w-full '>
                <label htmlFor='formFileLg' className='text-[0px] inline-block text-neutral-700 text-white'>
                  Large file input example
                </label>
                <input className='relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded-lg border border-gray-400 border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1 text-md font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-3 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent' id='formFileLg' type='file' />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

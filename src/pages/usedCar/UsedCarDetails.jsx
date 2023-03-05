import React, { useState } from "react"
import { BsCheck2 } from "react-icons/bs"
import { mostSearched, usedCardFea } from "../../components/assets/data/data"
import { TitleMedium } from "../../components/common/Title"
import { Carousel } from "react-carousel-minimal"
import { FilterCard } from "../../router/router"

export const UsedCarDetails = () => {
  const [mostSearchData, setMostSearchData] = useState(mostSearched)

  const img = "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/7820/1675862859794/front-left-side-47.jpg?tr=w-456"

  const data = [
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

  return (
    <>
      <div className='used-cars mt-10'>
        <div className='containers'>
          <div className='flex tab:flex-col tab:h-auto'>
            <div className='img ml-5 mb-10'>
              <Carousel data={data} time={2000} width='650px' height='450px' radius='10px' slideNumber={true} automatic={false} dots={false} pauseIconColor='white' pauseIconSize='40px' slideImageFit='cover' thumbnails={true} thumbnailWidth='150px' className='flex max-h-[450px] max-w-[750px] items-center text-center mt-auto ml-auto mr-[40px] mb-auto' />
            </div>
            <div className='right ml-10 tab:ml-0 bg-white shadow-shadow1 p-8 rounded-2xl h-60 tab:h-auto'>
              <div className='text'>
                <h1 className='text-2xl font-semibold' data-aos='zoom-in-left'>
                  2021 Jeep Compass Model S DCT
                </h1>
                <label className='text-sm text-gray1 my-3 block' data-aos='zoom-in-left'>
                  15,000 kms • Petrol • Automatic • 1st Owner
                </label>
                <h2 className='text-xl font-semibold' data-aos='zoom-in-left'>
                  Rs 6.00 - 8.98 Lakh*
                </h2>
                <br />
                <button className='primary-btn shadow-xl' data-aos='zoom-in-left'>
                  View Current Offers
                </button>
              </div>
            </div>
          </div>
          <div className='w-10/12 tab:w-full mt-10'>
            <div className='right ml-4 my-10 bg-white shadow-shadow1 p-8 rounded-2xl'>
              <TitleMedium title='Car overview' />
              <ul className='grid grid-cols-2 mt-8 mobile:grid-cols-1'>
                {usedCardFea.map((usedCard) => (
                  <li className='flex items-center mb-6'>
                    <label className='text-sm flex items-center text-gray1 mr-16 w-1/3' data-aos='zoom-in'>
                      {usedCard.icon}
                      <span className='ml-3' data-aos='zoom-in'>
                        {usedCard.title}
                      </span>
                    </label>
                    <span data-aos='zoom-in-up'>{usedCard.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='w-10/12 tab:w-full'>
            <div className='right ml-4 my-10 bg-white shadow-shadow1 p-8 rounded-2xl'>
              <TitleMedium title='Features' />
              <ul className='grid grid-cols-2 mt-8 mobile:grid-cols-1'>
                {usedCardFea.map((usedCard) => (
                  <li className='flex items-center mb-6'>
                    <label className='text-sm flex items-center text-gray1 mr-5' data-aos='zoom-in'>
                      <BsCheck2 className='text-green-500' size={22} />
                    </label>
                    <span data-aos='zoom-in-up'>{usedCard.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='mb-8'>
            <FilterCard title='The most searched cars' item={mostSearchData} show={true} />
          </div>
        </div>
      </div>
    </>
  )
}

import React from "react"
import { Title } from "../../router/router"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='containers'>
          <div className='bg-white p-8 shadow-md my-12 w-2/3 rounded-md tab:w-full'>
            <Title title='About CarDekho' />

            <p className='text-gray-500 text-[15px] leading-6' data-aos='fade-down-right'>
              CarDekho.com is India's leading car search venture that helps users buy cars that are right for them. Its website and app carry rich automotive content such as expert reviews, detailed specs and prices, comparisons as well as videos and pictures of all car brands and models available in India. The company has tie-ups with many auto manufacturers, more than 4000 car dealers and numerous financial institutions to facilitate the purchase of vehicles.
            </p>
            <p className='text-gray-500 text-[15px] leading-6 my-4' data-aos='fade-down-left'>
              CarDekho.com has launched many innovative features to ensure that users get an immersive experience of the car model before visiting a dealer showroom. These include a Feel The Car tool that gives 360-degree interior/exterior views with sounds of the car and explanations of features with videos; search and comparison by make, model, price, features; and live offers and promotions in all cities. The platform also has used car classifieds wherein users can upload their cars for sale, and find used cars for buying from individuals and used car dealers.
            </p>
            <p className='text-gray-500 text-[15px] leading-6 mb-4' data-aos='fade-down-right'>
              Besides the above consumer product features, CarDekho.com provides a rich array of tech-enabled tools to OE manufacturers and car dealers. These include apps for dealer sales executives to manage leads, cloud services for tracking sales performance, call tracker solution, digital marketing support, virtual online showroom and outsourced lead management operational process for taking consumers from enquiry to sale.
            </p>
            <p className='text-gray-500 text-[15px] leading-6' data-aos='fade-down-left'>
              Our vision is to construct a complete ecosystem for consumers and car manufacturers, dealers and related businesses such that consumers have easy and complete access to not only buying and selling cars, but also manage their entire ownership experience, be it accessories, tyres, batteries, insurance or roadside assistance.
            </p>
            <p className='text-gray-500 text-[15px] leading-6 my-4' data-aos='fade-down-right'>
              The company has expanded to Southeast Asia with the launch of Zigwheels.ph, Zigwheels.my and Oto.com. It also has a presence in the UAE with Zigwheels.ae
            </p>
            <p className='text-gray-500 text-[15px] leading-6' data-aos='fade-down-left'>
              To diversify our product offerings we have ventured into car insurance business through InsuranceDekho.Com
            </p>

            <h2 className='text-2xl font-medium my-4' data-aos='fade-down-right'>
              Investors and shareholders
            </h2>
            <p className='text-gray-500 text-[15px] leading-6' data-aos='fade-down-left'>
              CarDekho.com, which went live in 2008, was set up by a bunch of young, enthusiastic IIT graduates. Its investors include Google Capital, Tybourne Capital, Hillhouse Capital, Sequoia Capital, HDFC Bank, Ratan Tata and Times Internet.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

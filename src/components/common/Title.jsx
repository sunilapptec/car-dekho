import React from "react"

export const Title = ({ title }) => {
  return (
    <>
      <h1 className='text-2xl font-medium text-black mb-5' data-aos='fade-right'>
        {title}
      </h1>
    </>
  )
}
export const TitleMedium = ({ title }) => {
  return (
    <>
      <h1 className='text-xl font-medium text-black' data-aos='fade-right'>
        {title}
      </h1>
    </>
  )
}

import React from "react"
import { DetailsPageHeader } from "../../router/router"
import { DetailsSidebar } from "./DetailsSidebar"

export const SinglePageLayout = ({ children }) => {
  return (
    <>
      <DetailsPageHeader />
      <div className='main-content my-10'>
        <div className='containers flex tab:flex-col'>
          <div className='content-left mr-6 w-3/4 tab:w-full'>{children}</div>
          <div className='content-right w-3/12 tab:w-full h-[98vh] tab:mt-5 tab:h-full bg-white border border-gray-200 rounded-md'>
            <DetailsSidebar />
          </div>
        </div>
      </div>
    </>
  )
}

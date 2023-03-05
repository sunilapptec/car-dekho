import React from "react"
import { NavLink } from "react-router-dom"

export const DetailsPageHeader = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".page-header")
    header?.classList.toggle("active", this.window.scrollY > 100)
  })

  const data = [
    {
      id: 1,
      text: "swift",
      link: "/single-page",
    },
    {
      id: 2,
      text: "price",
      link: "/price",
    },
    {
      id: 3,
      text: "compare",
      link: "/compare",
    },
    {
      id: 4,
      text: "images",
      link: "/images",
    },
    {
      id: 5,
      text: "specifications",
      link: "/specifications",
    },
    {
      id: 6,
      text: "reviews",
      link: "/user-reviews",
    },
    {
      id: 7,
      text: "video",
      link: "/video",
    },
  ]

  return (
    <>
      <header className='page-header bg-white border-b border-gray-200'>
        <nav className='border-t bottom-1 border-gray-200 p-3'>
          <div className='containers flex justify-between'>
            <ul className='flex mr-8 mobile:overflow-y-hidden mobile:overflow-x-auto mobile:pt-1' id='category'>
              {data.map((item) => (
                <li className='mobile:inline-block' key={item.id}>
                  <NavLink to={`${item.link}`} className='NavLink uppercase text-[15px] font-medium text-primary mr-6 mobile:inline-block mobile:text-sm'>
                    {item.text}
                  </NavLink>
                </li>
              ))}

              {/* <li className='mobile:inline-block'>
                <NavLink path='/single-page' className='NavLink uppercase text-[15px] font-medium text-primary mr-6 mobile:inline-block mobile:text-sm'>
                  swift
                </NavLink>
              </li>
              <li className='mobile:inline-block'>
                <NavLink to='/spec' className='NavLink uppercase text-[15px] font-medium text-primary mr-6 mobile:inline-block mobile:text-sm'>
                  specifications
                </NavLink>
              </li>*/}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

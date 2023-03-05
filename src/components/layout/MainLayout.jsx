import React from "react"
import { Footer } from "../common/Footer"
import { Header } from "../header/Header"

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-[50vh]'>{children}</main>
      <Footer />
    </>
  )
}

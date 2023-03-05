import React from "react"
import { Sidebar } from "./Sidebar"

export const AdminLayout = ({ children }) => {
  return (
    <>
      <main className='min-h-[80vh] relative '>
        <div className='containers flex relative'>
          <section className='admin-sidebar w-1/4 ml-10 bg-white min-h-[80vh]'>
            <Sidebar />
          </section>
          <section className='content w-3/4 h-auto p-5'>{children}</section>
        </div>
      </main>
    </>
  )
}

import { About, AddUsedCar, AdminLayout, Compare, Condition, Contact, Dashboard, DetailsPageReview, DetailsPages, Faq, Favorite, Home, Login, MainLayout, NewCar, NewDetailsPages, NewsPage, Order, Profile, Register, Review, ScrollToTop, SearchContent, SinglePageLayout, Specifications, UsedCarDetails } from "./router/router"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//aos
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useSelector } from "react-redux"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path='/login'
            element={
              <MainLayout>
                <Login />
              </MainLayout>
            }
          />
          <Route
            path='/register'
            element={
              <MainLayout>
                <Register />
              </MainLayout>
            }
          />
          <Route
            path='/contact'
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          <Route
            path='/faq'
            element={
              <MainLayout>
                <Faq />
              </MainLayout>
            }
          />
          <Route
            path='/about'
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />
          <Route
            path='/terms-and-conditions'
            element={
              <MainLayout>
                <Condition />
              </MainLayout>
            }
          />
          <Route
            path='/new-car'
            element={
              <MainLayout>
                <NewCar />
              </MainLayout>
            }
          />
          <Route
            path='/search'
            element={
              <MainLayout>
                <SearchContent />
              </MainLayout>
            }
          />
          <Route
            path='/single-page/:id'
            element={
              <MainLayout>
                <DetailsPages />
              </MainLayout>
            }
          />
          <Route
            path='/specifications/:id'
            element={
              <MainLayout>
                <SinglePageLayout>
                  <Specifications />
                </SinglePageLayout>
              </MainLayout>
            }
          />
          <Route
            path='/reviews'
            element={
              <MainLayout>
                <SinglePageLayout>
                  <DetailsPageReview />
                </SinglePageLayout>
              </MainLayout>
            }
          />
          <Route
            path='/review'
            element={
              <MainLayout>
                <Review />
              </MainLayout>
            }
          />
          <Route
            path='/compare'
            element={
              <MainLayout>
                <Compare />
              </MainLayout>
            }
          />
          <Route
            path='/used-car'
            element={
              <MainLayout>
                <UsedCarDetails />
              </MainLayout>
            }
          />
          <Route
            path='/news'
            element={
              <MainLayout>
                <NewsPage />
              </MainLayout>
            }
          />
          <Route
            path='/new/single-page/:id'
            element={
              <MainLayout>
                <NewDetailsPages />
              </MainLayout>
            }
          />
          <Route
            path='/dashboard'
            element={
              <MainLayout>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </MainLayout>
            }
          />
          <Route
            path='/admin-profile'
            element={
              <MainLayout>
                <AdminLayout>
                  <Profile />
                </AdminLayout>
              </MainLayout>
            }
          />
          <Route
            path='/admin-favorite'
            element={
              <MainLayout>
                <AdminLayout>
                  <Favorite />
                </AdminLayout>
              </MainLayout>
            }
          />
          <Route
            path='/admin-order'
            element={
              <MainLayout>
                <AdminLayout>
                  <Order />
                </AdminLayout>
              </MainLayout>
            }
          />
          <Route
            path='/admin-add-used-car'
            element={
              <MainLayout>
                <AdminLayout>
                  <AddUsedCar />
                </AdminLayout>
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

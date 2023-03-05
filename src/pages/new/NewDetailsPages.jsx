import React from "react"
import { Comment, Title } from "../../router/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { clearError } from "../../redux/actions/authAction"
import { useParams } from "react-router"
import { getSingleNewDetails } from "../../redux/actions/newsAction"
import { Loader } from "../../components/common/Loader"

export const NewDetailsPages = () => {
  // get matched id news
  const dispatch = useDispatch()
  const param = useParams()

  const { error, singleNew, loading } = useSelector((state) => state.getNewsDetails)

  const id = param.id
  useEffect(() => {
    dispatch(getSingleNewDetails(id))

    if (error) {
      toast.error(error)
      dispatch(clearError())
    }
  }, [dispatch, error, id])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className='filter-card bg-white py-8'>
          <div className='m-auto max-w-screen-lg'>
            <Title title='Car News India - All Latest Car Information And Auto News India' />
            <span className='text-sm text-gary1 '>Modified On Dec 15, 2022 12:22 PM By Rohit for Hyundai Verna 2022</span>
            <div className='img h-[70vh] my-8'>
              <img src='https://demo.vehica.com/wp-content/uploads/2020/02/audi1.jpg' alt='' className='ImageFit' />
            </div>
            <p className='text-md leading-7'>The new generation Verna can be reserved for a token amount of Rs 25,000. Design of the new front and rear of the car teased along with the silhouette. Hyundai has confirmed a new 1.5-litre TGDi petrol engine for the sedan. The sedan loses the diesel engine with the new generation. To be available in four variants: EX, S, SX and SX(O) The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette. The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette. The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette. The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette. The new generation Verna can be reserved for a token amount of Rs 25,000. Design of the new front and rear of the car teased along with the silhouette. Hyundai has confirmed a new 1.5-litre TGDi petrol engine for the sedan. The sedan loses the diesel engine with the new generation. To be available in four variants: EX, S, SX and SX(O) The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette. The new generation Verna can be reserved for a token amount of Rs 25,000. Design of the new front and rear of the car teased along with the silhouette. Hyundai has confirmed a new 1.5-litre TGDi petrol engine for the sedan. The sedan loses the diesel engine with the new generation. To be available in four variants: EX, S, SX and SX(O) The new generation Verna can be reserved for a token amount of Rs 25,000. Design of the new front and rear of the car teased along with the silhouette. Hyundai has confirmed a new 1.5-litre TGDi petrol engine for the sedan. The sedan loses the diesel engine with the new generation. To be available in four variants: EX, S, SX and SX(O) The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette. The new generation Verna can be reserved for a token amount of Rs 25,000. Design of the new front and rear of the car teased along with the silhouette. Hyundai has confirmed a new 1.5-litre TGDi petrol engine for the sedan. The sedan loses the diesel engine with the new generation. To be available in four variants: EX, S, SX and SX(O) The new generation Verna may officially debut soon as Hyundai has opened bookings for it for a token amount of Rs 25,000. The carmaker has also given us a first official teaser briefly showcasing the sedan’s updated design, front and rear, with peeks at its silhouette.</p>

            <Comment />
          </div>
        </section>
      )}
    </>
  )
}

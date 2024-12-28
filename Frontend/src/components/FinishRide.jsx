import React from 'react'
import { Link } from 'react-router-dom'


const FinishRide = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[92%] absolute top-0' onClick={() => {
          props.setFinishRidePanel(false)
        }}><i className="text-2xl text-gray-700 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
        <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'> 
            <div className='flex items-center gap-3'>
                <img className='h-12 w-10 rounded-full object-cover' src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.pn" alt="" />
                <h2 className='text-lg font-medium'>Harsh Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 Km</h5>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
            <div className='w-full mt-5'>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-range-fill"></i>
                    <div>
                        <h3 className='text-lg font-medium'>562/11-A</h3>
                        <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 p-3 border-b-2'>
                    <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Ahemdabad</p>
                        </div>
                </div>
                <div className='flex items-center gap-5 p-3'>
                    <i className="ri-bank-card-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                        </div>
                </div>
            </div>
            <div className='mt-6 w-full'>
                <Link to='/captain-home' className='w-full flex text-lg justify-center bg-green-600 text-white font-semibold mt-5 p-3 rounded-lg'>Finish Ride</Link >
                <p className='text-red-500 mt-6 text-sm'>Click on Finish Ride button if you have completed the payment</p>
            </div>
        </div>
    </div>
  )
}

export default FinishRide
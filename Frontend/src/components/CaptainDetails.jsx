import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

  const { captain } = useContext(CaptainDataContext)

  return (
    <div>
        <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3 justify-start'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png" alt="" />
                <h4 className='text-lg font-medium capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
              </div>
              <div>
                <h4 className='text-xl font-semibold'>₹295.20</h4>
                <p className='text-sm text-gray-600'>Earned</p>
              </div>
            </div>
            <div className='flex p-5 bg-gray-100 rounded-xl justify-center gap-5 items-center mt-6'>
              <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
              <div className='text-center'>
                <i className="text-3xl mb-2 font-thin ri-booklet-fill"></i>
                  <h5 className='text-lg font-medium'>10.2</h5>
                  <p className='text-sm text-gray-600'>Hours Online</p>
              </div>
            </div>
    </div>
  )
}

export default CaptainDetails
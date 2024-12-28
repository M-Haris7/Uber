import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[92%] absolute top-0' onClick={() => {
          props.setVehicleFound(false)
        }}><i className="text-2xl text-gray-700 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Lookong for a Driver</h3>

        <div className='flex gap-2 justify-between flex-col items-center'>
            <img className='h-21' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YTSRumOWPEGnKsu348o4rupfZtzdFaIZL--gK0ws-_OVogM3" alt="" />
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
        </div>
    </div>
  )
}

export default LookingForDriver
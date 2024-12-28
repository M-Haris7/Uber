import React from 'react'


const LocationSearchPanel = (props) => {
    console.log(props)
    // sample array of location data
    const locations = [
        "436/128, Karimganj Road, Pasandbagh, Lucknow",
        "2A/12, Ghafoor Nagar, Jamia Nagar, Lucknow",
        "12/3, Near Manyawar Showroom, Aminabad, Lucknow",
        "13/2, Wave Mall, Gomti Nagar, Lucknow"
    ]

  return (
    <div>
        {/* this is just a sample data */}
        { 
            locations.map(function(element, idx){
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex border-2 p-3 border-gray-100 active:border-black rounded-xl items-center justify-start my-2 gap-2'> 
                    <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                    <h4 className='font-medium'>{element}</h4>
                </div>
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel
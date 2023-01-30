import React from 'react'
import Map from './Map'


const Agency = () => {
  return (
    
    <div className='agency__container pb-24'>
        <div className="agency__container--block mx-auto max-w-[1240px] items-center p-6'">
            <h2 className='agency__container--title text-[black] text-center pt-24 lg:pb-16 text-3xl md:text-4xl lg:text-5xl font-medium '>AGENCY</h2>
            <div className="agency__container--carte">
                <Map />
            </div>
        </div>
    </div>
  )
}

export default Agency
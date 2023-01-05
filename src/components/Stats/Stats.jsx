import React from 'react'
import { FaBrain } from 'react-icons/fa'

const Stats = () => {
  return (
    <div className='pnine__stats--all'>
        {/* container pour le background */}
        <div className="container__stats"></div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg ">
          <FaBrain size={26} className="justify-center" />
          </div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg">2</div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg ">3</div>
        </div>

        Stats
    </div>
  )
}

export default Stats
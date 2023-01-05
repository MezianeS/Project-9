import React from 'react'
import { FaBrain } from 'react-icons/fa'
import IAicon from './../../assets/iaicon.png'

const Stats = () => {
  return (
    <div className='pnine__stats--all'>
        {/* container pour le background */}
        <div className="container__stats"></div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
          <img src={IAicon} alt="Cerveau informatique" className='stats--items-1 pl-3 pr-3 pt-5'/>
          <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>AI:Artifical Intelligence</h4>
          <p className='pl-5 pr-5 pb-2 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo adipisci doloribus dolor delectus numquam.</p>
          </div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg">2</div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg ">3</div>
        </div>

        Stats
    </div>
  )
}

export default Stats
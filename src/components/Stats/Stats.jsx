import React from 'react'
import { FaBrain } from 'react-icons/fa'
import IAicon from './../../assets/iaicon.png'

const Stats = () => {
  return (
    <div className='pnine__stats--all'>
        {/* container pour le background */}
        <div className="container__stats "></div>
        {/* container pour le background */}
        <div className='flex flex-col lg:flex-row justify-center items-center mt-36 lg:p-16 lg:ml-48 lg:mr-48'>
          <div id="stats" className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
          <img src={IAicon} alt="Cerveau informatique" className='stats--items-1 pl-3 pr-3 pt-5'/>
          <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>AI: Artifical Intelligence</h4>
          <p className='pl-5 pr-5 pb-5 text-center'>An opportunity to reinvent oneself and advance in one's career.</p>
          </div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
          <img src={IAicon} alt="Cerveau informatique" className='stats--items-1 pl-3 pr-3 pt-5'/>
          <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>AI:Artifical Intelligence</h4>
          <p className='pl-5 pr-5 pb-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo adipisci doloribus dolor delectus numquam.</p>
          </div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
          <img src={IAicon} alt="Cerveau informatique" className='stats--items-1 pl-3 pr-3 pt-5'/>
          <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>AI:Artifical Intelligence</h4>
          <p className='pl-5 pr-5 pb-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo adipisci doloribus dolor delectus numquam.</p>
          </div>
        </div>

        Stats
    </div>
  )
}

export default Stats
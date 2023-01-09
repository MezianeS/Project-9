import React from 'react'
import { FaBrain } from 'react-icons/fa'
import IAicon from './../../assets/iaicon.png'
import City from './../../assets/smart-city.png'
import VrGlasses from './../../assets/vr-glasses.png'

const Stats = () => {
  return (
    <div className='pnine__stats--all '>
        {/* container pour le background */}
        <div className="container__stats "></div>
        {/* container pour le background */}
        <div className='mx-auto max-w-[1240px] items-center p-6'  id="services">
          <h2 className='text-center mt-24 text-3xl md:text-4xl lg:text-5xl font-medium'>Services</h2>
          <p className='mt-10 m-3 lg:ml-48 lg:mr-48 text-center'>The most talked about high tech subjects in 2021 were artificial intelligence, augmented reality and virtual reality, and the Internet of Things. These technologies have been used in various fields such as healthcare, education, entertainment, and industry.</p>
          <div className='flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-12 lg:p-16 lg:ml-48 lg:mr-48'>
            <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
            <img src={IAicon} alt="Artificial Intelligence Brain" className='stats--items-1 pl-3 pr-3 pt-5'/>
            <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>Artifical Intelligence</h4>
            <p className='pl-5 pr-5 pb-5 text-center'>An opportunity to reinvent oneself and advance in one's career.</p>
            </div>
            <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
            <img src={VrGlasses} alt="Virtual reality" className='stats--items-1 pl-3 pr-3 pt-5'/>
            <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>Virtual Reality</h4>
            <p className='pl-5 pr-5 pb-5 text-center'>An innovative way to connect to the world.</p>
            </div>
            <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg flex flex-col justify-center items-center">
            <img src={City} alt="Digital City" className='stats--items-1 pl-3 pr-3 pt-5'/>
            <h4 className='pb-1 pt-2 font-bold text-[#91E5F6]'>Digital building</h4>
            <p className='pl-5 pr-5 pb-5 text-center'>Innovation, connectivity, and progress: welcome to the new digital world.</p>
            </div>
          </div>
        </div>

        Stats
    </div>
  )
}

export default Stats
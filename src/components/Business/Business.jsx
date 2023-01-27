import React from 'react'
import PlanetsImg from './../../assets/facecyborg.png'

const Business = () => {
  return (
    <div className='business__container bg-[black]'>
        <div className="business__container--block mx-auto max-w-[1240px] items-center p-6'">
            <div className="business__container--text">
                <h2 className="business__container-title text-center pt-24 text-3xl md:text-4xl lg:text-5xl font-medium">BUSINESS</h2>
                <p className="business__container--textblock"></p>            
            </div>
            <img src={PlanetsImg} alt="" className='business__content--img' />
        </div>

        
    </div>
  )
}

export default Business
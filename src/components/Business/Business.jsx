import React from 'react'
import PlanetsImg from './../../assets/facecyborg.png'

const Business = () => {
  return (
    <div className='business__container bg-[black] pb-24'>
        <div className="business__container--block mx-auto max-w-[1240px] items-center p-6'">
            <h2 className="business__container-title text-center pt-24 lg:pb-16 text-3xl md:text-4xl lg:text-5xl font-medium " id="business">BUSINESS</h2>
            <div className="business__container--textimg flex flex-col lg:flex-row">
                <p className="business__container--textblock mt-10 m-3 lg:ml-48 lg:mr-48 p-10 lg:pl-0 text-center lg:text-start text-lg">
                <span className='text-2xl font-bold text-[#F89C92]'>Define your experience</span>
                <br />
                Our AI solution for businesses automates sales forecasting processes to improve your company's performance. Integrated with inventory management system to optimize product availability. Enhances customer experience by personalizing offers. Contact us to learn more about the benefits for your business.
                </p>
                <img src={PlanetsImg} alt="Earth cyborg face" className='business__content--img p-10' />            
            </div>
        </div>        
    </div>
  )
}

export default Business
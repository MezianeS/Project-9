import React from 'react'
import IMGhome from './../../assets/cyborgearth.png'


const Index = () => {
  return (
    <div className='container pnine__index--all p-6 lg:p-16'>
      {/* <h1 className="text-4xl text-[#f89c92] font-bold tracking-wide">FUTURE.</h1> */}
      <div className='pnine__title--txt lg:mt-12'>
        <h1 className='text-3xl md:text-4xl font-medium mt-10 mb-6 md:mt-20'>The world of technology at your fingertips</h1>
        <p>We believe that technology is an essential tool for innovation and progress, and we are eager to share our knowledge and enthusiasm with our online community.</p>
        <p>Join us and stay up to date on technological news!</p>
      </div>  
        <div className='pnine__img--index'>
          <img src={IMGhome} alt="Bras robotique"/>
        </div>


        
    </div>
  )
}

export default Index
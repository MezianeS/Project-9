import React from 'react'
import { FaBrain } from 'react-icons/fa'
import IAicon from './../../assets/iaicon.png'

const Stats = () => {
  return (
    <div className='pnine__stats--all'>
        {/* container pour le background */}
        <div className="container__stats"></div>
        <div className='flex flex-col lg:flex-row justify-center items-center'>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg ">
          <img src={IAicon} alt="Cerveau informatique" className='stats--items-1 p-5'/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo adipisci doloribus dolor delectus numquam molestiae unde accusantium eveniet voluptatibus consectetur modi, aliquam tenetur fuga? Deleniti ullam accusamus rem iusto optio!</p>
          </div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg">2</div>
          <div className="container__stats--items bg-[#0C2231] m-5 border-solid border-2 rounded-lg ">3</div>
        </div>

        Stats
    </div>
  )
}

export default Stats
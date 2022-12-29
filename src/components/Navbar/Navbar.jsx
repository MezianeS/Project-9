import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='navbar__projectnine text-lg'>
        <nav className='container flex'>
            <ul className='hidden space-x-8 lg:flex'>
                <li className='p-4'><a href="#stats">Home</a></li>
                <li className='p-4'><a href="#stats">Stats</a></li>
                <li className='p-4'><a href="#business">Business</a></li>
                <li className='p-4'><a href="#agency">Agency</a></li>
                <li className='p-4'><a href="#contact">Contact</a></li>
            </ul>
            <div className='md:hidden' onClick={handleNav} > 
                {/* <label for="check">
                    <input type="checkbox" id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label> */}
                {!nav ? <AiOutlineClose size={28}/> : <RxHamburgerMenu size={28}/> }
                
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#133C55] ease-in-out duration-500 max-[360px]:w-[70%]' : 'fixed left-[-100%]'}>
                <h1 className="text-4xl text-[#f89c92] font-bold tracking-wide m-5 pl-5">FUTURE.</h1>
                    <ul className='p-4 uppercase'>
                        <li className='p-4 border-b border-[#F89C92]'><a href="#stats">Home</a></li>
                        <li className='p-4 border-b border-[#F89C92]'><a href="#stats">Stats</a></li>
                        <li className='p-4 border-b border-[#F89C92]'><a href="#business">Business</a></li>
                        <li className='p-4 border-b border-[#F89C92]'><a href="#agency">Agency</a></li>
                        <li className='p-4'><a href="#contact">Contact</a></li>
                    </ul>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar
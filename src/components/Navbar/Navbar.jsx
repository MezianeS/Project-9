import React, { useState } from 'react'


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
            <div className='lg:hidden' onClick={handleNav} > 
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg> */}
                <label for="check">
                    <input type="checkbox" id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
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
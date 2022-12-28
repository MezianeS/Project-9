import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar__projectnine text-lg'>
        <nav className='container flex'>
            <ul className='hidden space-x-8 lg:flex'>
                <li className='p-4'><a href="#stats">Home</a></li>
                <li className='p-4'><a href="#stats">Stats</a></li>
                <li className='p-4'><a href="#business">Business</a></li>
                <li className='p-4'><a href="#agency">Agency</a></li>
            </ul>
            <div className='lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>
            </div>
            <div className="fixed left-0 top-0 w-[60%] border-r border-r-gray-900">
                <ul>
                    <li className='p-4'><a href="#stats">Home</a></li>
                    <li className='p-4'><a href="#stats">Stats</a></li>
                    <li className='p-4'><a href="#business">Business</a></li>
                    <li className='p-4'><a href="#agency">Agency</a></li>
                </ul>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar
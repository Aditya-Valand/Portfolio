import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="relative flex justify-between p-10 m-2 ">
        <div className='text-red-500 text-4xl font-bold font-heading' >
            Aditya
        </div>
        <div className="flex text-xl space-x-8 font-heading">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <Link
              key={item}
              to={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-red-500 transition-all duration-300 font-medium tracking-wide relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
       
      </nav>
  )
}

export default Navbar
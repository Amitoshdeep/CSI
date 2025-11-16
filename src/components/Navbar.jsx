import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  const NavBar= [
    {name: "Home", path: "/" },
    {name: "About Us", path: "/about" },
    {name: "Core Team", path: "/core-team" },
    {name: "Events", path: "/events" },
  ];

  return (
    <div className='fixed top-0 z-20 h-18 w-full
    '>

      <div className='relative w-full h-full'>

        {/* Main Nav BAr */}
        <div
        className='absolute w-[52%] h-full
        left-[20.5%] flex items-center
        bg-gray-300/10 rounded-2xl
        backdrop-blur-sm
        '>

          <ul className='flex items-center justify-center
          w-full gap-5
          text-xl font-bold
          '>

            {
              NavBar.map( (nav, index) =>(
                <NavLink
                to={nav.path}
                key={index}
                className={( {isActive}) =>
                  `duration-300 px-3 py-2 rounded-xl
                  ${isActive ? "text-black bg-white/60": "text-black/50" }`}
                >

                  {nav.name}
                </NavLink>
              ) )
            }

          </ul>


        </div>


      </div>

    </div>
  )
}

export default Navbar

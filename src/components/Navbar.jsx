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
    <div className='fixed top-0 z-20 h-20 w-full
    bg-url("src/assets/layout/header.png")
    bg-no-repeat bg-contain
    '>

      <div className='relative w-full h-full'>

        {/* Main Nav BAr */}
        <div className='absolute w-[51%] h-full left-[21%] flex items-center'>

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
                  `duration-300
                  ${isActive ? "text-black": "text-black/50" }`}
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

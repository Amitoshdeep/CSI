import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

function Navbar() {

  const NavBar = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Core Team", path: "/core-team" },
    { name: "Events", path: "/events" },
 ,
  ];

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='fixed top-0 z-20 h-18 w-full'
    >

      <div className='relative w-full h-full'>

        {/* Blur Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='absolute w-screen bg-gray-300/10 backdrop-blur-sm h-5'
        />

        {/* Main Nav Bar */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className='absolute w-[52%] h-full
            left-[20.5%] flex items-center
            bg-gray-300/10 rounded-b-2xl
            backdrop-blur-sm
            shadow-sm shadow-black/10'
        >

          <ul className='flex items-center justify-center
            w-full gap-5
            text-xl font-bold'
          >

            {NavBar.map((nav, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    `duration-300 px-3 py-2 rounded-xl
                     ${isActive ? "text-black bg-white/60" : "text-black/50"}`
                  }
                >
                  {nav.name}
                </NavLink>
              </motion.div>
            ))}

          </ul>

        </motion.div>

      </div>

    </motion.div>
  )
}

export default Navbar

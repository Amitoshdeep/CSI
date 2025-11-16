import React from 'react'
// import CircularText from "../components/reactbits/CircularText"

function Home() {

  const imgLogo = [
    {name: "chitkara", url: "/imgs/culogo.png"},
    {name: "csi-logo", url: "/imgs/csi-logo.png"}
  ]

  return (
    <div className='relative min-h-screen'>

      {/* Hero img */}
      <div className='hero relative px-4 z-10 pt-5'>

        {/* Main Banner*/}
        <div className='w-full aspect-[16/9]
        mask-[url("src/assets/layout/Imgage.png")] bg-[url("imgs/hero.png")]
          bg-no-repeat bg-cover mask-no-repeat mask-contain relative p-4
        '>
          {/* Logo Inside Hero Banner */}
          <div className='flex gap-5 items-center h-20 p-3 bg-black/25 backdrop-blur-[3px] w-max rounded-2xl'>
            {
              imgLogo.map( (img, index) =>(
                <div className='h-15 aspect-square' key={index}>
                  <img src={img.url} alt={img.name} className='h-full w-full object-cover rounded-xl' />
                </div>
              ) )
            }
          </div>

        </div>

          {/* Paragraph */}
          <div className=' w-1/2 h-2/6 absolute bottom-20
            flex flex-col gap-4 p-4
          '>

            <h1 className='text-6xl text-black font-Aldo'>
              Computer Society of India
            </h1>

            <p>
              The Indian computer industry is represented by the Computer Society of India. A small group of computer professionals founded it on March 6th, 1965, and it has since expanded to become the national organization that represents computer experts. It has 100,000 members, 511 student clubs, and 72 chapters spread around across India.
            </p>

          </div>

      </div>

    </div>
  )
}

export default Home

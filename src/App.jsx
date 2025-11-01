import React from 'react'

function App() {
  return (
    <div
      data-scroll-container
      className='bg-black text-white
      min-h-[100dvh] w-full overflow-x-hidden
      '
    >
      <div className='min-h-[100dvh] flex items-center justify-center text-4xl'>
        App
      </div>

      <div className='min-h-[100dvh] bg-amber-200 text-black flex items-center justify-center text-4xl'>
        Yoloo
      </div>
    </div>
  )
}

export default App

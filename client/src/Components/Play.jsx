import React from 'react'

function Play({onClick}) {
  return (

      <div>
      <button className="p-6 bg-zinc-500 w-[80px] h-[80px] text-5xl text-black rounded-full hover:bg-blue-600" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </button>
    </div>

  )
}

export default Play
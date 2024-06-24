// import React from 'react'

// function Navbar() {
//   return (
//     <div className='bg-zinc-900 flex'>
//         <div className='logo text-white flex justify-start px-2 mx-10'>Focus</div>
//         <div className='all justify-end'>
//         {["About us", "Services", "Your Profile"].map((item, index)=>
//         (
//             <div key={index} className='items text-white flex justify-between'>{item}</div>
//         )
//         )}
//         </div>
        
//     </div>
//   )
// }

// export default Navbar

import React from 'react'

function Navbar() {
  return (
    <div className='bg-zinc-900 flex justify-between items-center px-10'>
      <div className='logo text-white text-4xl'>Focus</div>
      <div className='flex space-x-6'>
        {["About us", "Services", "Your Profile"].map((item, index) => (
          <div key={index} className='text-white'>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default Navbar

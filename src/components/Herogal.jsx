import React from 'react'

function Herogal() {
  return (
    <div className=' relative w-screen min-h-[150vh]'>
        <div className=' absolute w-1/3 top-[50%] h-2/4 card  flex items-center flex-col justify-center'>
           <img className=' w-2/3' src='/assets/pic14.png'/>
           <p className=' text-white my-2 text-xl'>Short wear</p>
        </div>
        <div className=' absolute top-[10%] left-[30%] w-1/3 h-2/4 card  flex items-center flex-col justify-center'>
           <img className=' w-2/3' src='/assets/pic15.png'/>
           <p className=' text-white my-2 text-xl'>Cotton Two Stuck</p>
        </div>
        <div className=' absolute right-[10%] top-[40%] w-1/3 h-2/4 card  flex items-center flex-col justify-center'>
           <img className=' w-2/3' src='/assets/pic16.png'/>
           <p className=' text-white my-2 text-xl'>Bouffet</p>
        </div>
    </div>
  )
}

export default Herogal
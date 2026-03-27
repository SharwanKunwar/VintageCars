import React from 'react'

function Navbar() {
  return (
    <>
        <div className="bg-black/30 backdrop-blur-sm h-[8vh] flex items-center px-5 border-b border-white/40 w-full gap-2" >
        {/* logo and text  */}
            <div className=' w-[50%] h-full flex items-center'>
                <section className='flex items-center gap-2'>
                    <img src="/logo/vintageLogo.png" alt="" className='w-10 h-10'/>
                    <h1 className='tracking-widest text-lg text-indigo-400'>Vintage<span className='text-white'>C</span><span>ars</span></h1>
                </section>
            </div>

        {/* options menu */}
            <div className=' w-[50%] h-full flex items-center'>
                
            </div>
        </div>
    </>
  )
}

export default Navbar

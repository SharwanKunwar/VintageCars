import { Button,Card } from 'antd'
import React from 'react'
import { motion } from 'framer-motion'

function CarCard({img, name, model, description, price}) {
  return (
    <>
        <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.1}}
        className=' border border-black/10  shadow-sm h-[500px] rounded-md flex flex-col gap-1'>
         
               {/* top  */}
            <div className=' h-[60%]'>
                <img src={img} alt="" className='w-full h-full object-cover rounded-b-xl rounded-t-sm shadow-sm'/>
            </div>
            {/* bottom  */}
            <div className=' h-[40%] p-2'>
                <section className='flex justify-between items-center'>
                    <h1 className='text-xl font-medium tracking-wide text-shadow-sm'>{name}</h1>
                    <p className='text-sm text-neutral-400 pr-5'>{price}</p>
                </section>
                <p className='text-neutral-500'>{model}</p>
                <p className='text-neutral-600 mt-2'>{description}</p>
                <Button size='large' className='w-full mt-3 bg-linear-to-bl! from-indigo-400! to-pink-400! text-white! '>View Details</Button>
            </div>
         
        </motion.div>
    </>
  )
}

export default CarCard



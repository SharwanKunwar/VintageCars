import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import {Button} from 'antd'


function App() {
  return (
    <>
      <div className=" w-screen flex flex-col gap-3 relative">
        {/* // navbar  */}
        <div className=" fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* // video page  */}
        <div className=" w-full h-screen ">
          <div className="h-screen pt-[8vh]">
           <img src="mainImages/homepagecar02.jpg" alt="img" className="w-full h-full object-cover"/>
          </div>
          <div className="text-white absolute top-0  w-full h-screen  flex justify-center items-center flex-col">
            <div className=" w-[70%] h-[80vh] rounded-md mt-20 flex justify-start items-start flex-col">
              <section className="max-w-4xl  ">
                <div className="flex ">
                  <motion.p
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                  className=" px-5 border-green-400/50 rounded-full border  shadow-sm mb-2 mt-13 z-0">Toyota Cars</motion.p>
                </div>
                <motion.h1 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                 className="md:text-7xl text-2xl font-bold font-sans  mb-1 text-shadow-sm ">Timeless Machines</motion.h1>
                <motion.h2 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                className="md:text-xl text-neutral-200 rounded-full text-shadow-sm mb-5">Where legends like the Toyota Mark II still rule the road</motion.h2>
                <Button size="large" className="px-15! bg-linear-to-bl! from-indigo-400! border border-orange-400/30!">
                  Explore more
                </Button>
              </section>
            </div>
            {/* <motion.div 
            initial={{opacity:0,y:100}}
            animate={{opacity:1,y:0}}
            transition={{delay:5}}
            className="bg-white/30 backdrop-blur-sm w-[95%] h-[10vh] mt-30 rounded-md"> </motion.div> */}
          </div>
        </div>

        {/* //next page  ------------------------------------------------------------------------*/}
        <div className="bg-green-400 w-full h-screen flex gap-2">
          <div className="bg-yellow-400 w-[50%] h-full">left</div>
          <div className="bg-yellow-400 w-[50%] h-full">right</div>
        </div>
      </div>
    </>
  );
}

export default App;

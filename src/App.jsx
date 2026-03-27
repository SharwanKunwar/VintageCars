import React from "react";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";


function App() {
  return (
    <>
      <div className="bg-black w-screen flex flex-col gap-3 relative">
        {/* // navbar  */}
        <div className=" fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* // video page  */}
        <div className=" w-full h-screen ">
          <div className="h-screen pt-[8vh]">
            <video
              src="/videoSource/HomeVideo.mp4"
              loop
              muted
              autoPlay
            />
          </div>
          <div className="text-white absolute top-0  w-full h-screen  flex justify-center items-center flex-col">
            <div className=" w-[95%] h-[55vh] rounded-md mt-30 flex justify-center items-center flex-col">
              <section className="max-w-4xl  text-center ">
                <div className="flex ">
                  <motion.p
                initial={{opacity:0, y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:5.5}}
                  className=" px-5 border-green-400/50 rounded-full border  shadow-sm mb-2 mt-13 z-0">Vintage Cars</motion.p>
                </div>
                <motion.h1 
                initial={{opacity:0, y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:5.6}}
                 className="md:text-7xl text-2xl font-bold font-sans tracking-widest mb-1 text-shadow-sm ">Timeless Machines</motion.h1>
                <motion.h2 
                initial={{opacity:0, y:100}}
                animate={{opacity:1,y:0}}
                transition={{delay:5.7}}
                className="md:text-xl text-neutral-200 rounded-full text-shadow-sm mb-55">Where legends like the Toyota Mark II still rule the road</motion.h2>
                <p className="text-neutral-400 text-shadow-sm mb-15">Step into a world where engineering meets character. Vintage cars aren’t just vehicles, they’re stories built in steel, shaped by an era that cared about design, power, and identity. From the iconic Toyota Mark II to other forgotten legends, this is a collection of machines that still turn heads and stir emotions long after their time.</p>
              </section>
            </div>
            <div className="bg-white/30 backdrop-blur-sm w-[95%] h-[10vh] mt-30 rounded-md">
              
            </div>
          </div>
        </div>

        <div className="bg-green-400 w-full h-screen">box</div>
      </div>
    </>
  );
}

export default App;

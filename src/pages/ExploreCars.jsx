import React from 'react'
import { FaArrowAltCircleLeft, FaHome } from "react-icons/fa";
import { Button } from 'antd';
import CarCard from '../components/CarCard';
import cars from '../data/Cars';
import { Link } from 'react-router-dom';

function ExploreCars() {
    
    const [selectedBrand, setSelectedBrand] = React.useState("All");

  return (
    <>
        <div className=' w-screen relative'>
            
                <div className=' fixed  w-full h-[10vh] flex items-center px-10 justify-end z-50'>
                    <Link to={"/"}>
                    <Button><FaArrowAltCircleLeft /></Button>
                    </Link>
                </div>
            
            <video src="/videoSource/HomeVideo.mp4" autoPlay muted loop/>
            <div className=' absolute top-0 left-0 w-screen h-screen flex justify-center items-end pb-50'>
                <p className='text-gray-300 text-shadow-sm w-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestias dolor, facilis enim totam velit autem blanditiis delectus a, temporibus, quisquam quo voluptas? Sunt, sapiente dolore! Maxime dignissimos distinctio recusandae.</p>
            </div>

            <div className=' h-[13vh] flex justify-center items-center gap-5 px-5'>
                <Button onClick={() => setSelectedBrand("All")}>All</Button>
                <Button onClick={() => setSelectedBrand("Toyota")}>Toyota</Button>
                <Button onClick={() => setSelectedBrand("Nissan")}>Nissan</Button>
                <Button onClick={() => setSelectedBrand("BMW")}>BMW</Button>
                <Button onClick={() => setSelectedBrand("Audi")}>Audi</Button>
                <Button onClick={() => setSelectedBrand("Mercedes")}>Mercedes</Button>
                <Button onClick={() => setSelectedBrand("Lamborghini")}>Lamborghini</Button>
                
            </div>

            <div className=' w-screen h-[88vh] grid md:grid-cols-4 gap-5 px-5 overflow-y-scroll overflow-x-hidden pb-10'> 
                {cars.filter(car => selectedBrand === "All" || car.brand === selectedBrand).map((car) => (
                    <CarCard key={car.id} img={car.image} name={car.brand} model={car.model} description={car.des} price={car.price}/> 
                ))}
            </div>

            
        </div>
    </>
  )
}

export default ExploreCars


import React from 'react';
import Image from 'next/image';
import banner from "@/public/images/hero.svg"
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-12vh)] flex justify-center flex-col">

        {/* Grid layout */}
        <div className="w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Content */}
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black font-serif font-bold uppercase">
              Mega Sale <span className="text-rose-600">Special</span> Offer up to <span className="text-orange-500">60%</span> Off
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas architecto officiis eveniet voluptate. Corporis fugit,
              dolorem quam facere recusandae minus atque deleniti nisi tenetur
              voluptatem maxime, voluptas natus nam est!
            </p>
            <div className= "flex mt-6 items-center space-x-4"> 
                <Button size={"lg"} className='bg-blue-800'>Shop Now</Button>
                <Button size={"lg"}> Explore More</Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="hidden lg:block">
            <Image 
              src={banner} 
              width={600} 
              height={600} 
              alt="Hero Banner" // Always add alt text
              className="lg:h-[50%] lg:w-[50%] xl:w-[80%] xl:h-[80%]" 
            />
          </div>
        </div>

      </div>
    </>
  );
};

export default Hero;

import React from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import one from "../assets/plans/IMG-20250706-WA0007.jpg"
import two from "../assets/plans/IMG-20250706-WA0008.jpg"
import three from "../assets/plans/IMG-20250706-WA0009.jpg"
import four from "../assets/plans/IMG-20250706-WA0010.jpg"
import five from "../assets/plans/IMG-20250706-WA0011.jpg"
import six from "../assets/plans/IMG-20250706-WA0012.jpg"
import seven from "../assets/plans/IMG-20250706-WA0013.jpg"
import eight from "../assets/plans/IMG-20250706-WA0015.jpg"
import nine from "../assets/plans/IMG-20250706-WA0016.jpg"
import ten from "../assets/plans/IMG-20250706-WA0018.jpg"
import {  LucideArrowRight } from 'lucide-react';

function Plans(){
    const planImages = [one,two,three,four,five,six,seven,eight,nine,ten]

      // Function to update centerSlidePercentage based on screen width

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1199, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 463, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

    return <div className='mt-12 bg-[#e1f5d573] rounded-2xl py-6'>
      <p className='text-center font-bold text-2xl mb-4 text-[#242323]'>Explore our solar installation plans</p>
       <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000} // Speed in milliseconds
        // removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on tablet and mobile
        showDots={false} // Hide the small dots/indicators
        
      >
        {planImages.map((plan,index) => (
            <div  className='mx-2' key={index}><img src={plan} alt="bla" /></div>
        ))}
      </Carousel>
      <div className='flex items-center justify-center cursor-pointer' ><p>See more</p> <LucideArrowRight/> </div>
    </div>
}

export default Plans
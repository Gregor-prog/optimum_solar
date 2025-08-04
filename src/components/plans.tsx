import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {  LucideArrowRight } from 'lucide-react';

function Plans(){
    const planImages = [
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330316/IMG-20250707-WA0015_ooioij.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330316/IMG-20250707-WA0014_qy3dt1.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330316/IMG-20250706-WA0011_xs8c6w.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330315/IMG-20250706-WA0012_wag7bw.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330315/IMG-20250706-WA0013_rgwvs7.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330315/IMG-20250706-WA0016_bzbffx.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330315/IMG-20250706-WA0008_gr684r.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330314/IMG-20250706-WA0009_ypdqlx.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330314/IMG-20250706-WA0015_cuonfc.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330314/IMG-20250706-WA0018_nbb1r8.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330314/IMG-20250706-WA0010_rnytul.jpg"},
        {image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754330313/IMG-20250706-WA0007_hs9gkp.jpg"}
    ]

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

    return <div className='overflow-hidden mt-12 bg-[#e1f5d573] rounded-2xl py-6'>
      <p className='text-center font-bold text-2xl mb-4 text-[#242323]'>Explore our solar installation plans</p>
       <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000} // Speed in milliseconds
        // removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on tablet and mobile
        showDots={false} // Hide the small dots/indicators
        
      >
        {planImages.map((image,index) => (
            <div  className='mx-2' key={index}><img src={image.image} alt="bla" /></div>
        ))}
      </Carousel>
      <div className='flex items-center justify-center cursor-pointer' ><p>See more</p> <LucideArrowRight/> </div>
    </div>
}

export default Plans
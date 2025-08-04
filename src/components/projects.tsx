import Carousel from "react-multi-carousel"
function Projects(){

    const project = [
        {title:"3KVA Solar System done at Benin, Delta State, Nigeria", image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1753388663/IMG_1616_dhnhsf.jpg"},
        {title:"4.2KVA done at Iseyin, Ondo State, Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1753388654/IMG_0813_zi6jrx.jpg"},
        {title:"2KVA system done at Ibadan, Oyo State, Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1753388626/IMG_0668_xqld1q.jpg"},
        {title:"8KVA sstem done at IWO ROAD Ibadan, oyo State, Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1753388656/IMG_8217_quckq9.jpg"},
        {title:"1.5KVA with Lithium battery done at ilesha, Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754324666/IMG_1321_bc6gcw.jpg"},
        {title:"1.5KVA with Lithium battery done at ilesha, Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754326427/IMG_1328_zpqztl.jpg"},
        {title:"4VA done at Egbeda, Oyo State, Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754324826/IMG-20250804-WA0017_zztgl1.jpg"},
        {title:"6.2KVA done at Iganna,Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754324845/IMG-20250705-WA0114_v7hsik.jpg"},
        {title:"1.5KVA done at Iseyin,Nigeria",image:"https://res.cloudinary.com/drh4ma3hj/image/upload/v1754324851/IMG-20250705-WA0080_deo3s5.jpg"},
    ]


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

    return <div className="overflow-hidden my-[20px]-50 mx-1.5 rounded-2xl py-6  ">
 
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000} // Speed in milliseconds
                // removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on tablet and mobile
                showDots={false} // Hide the small dots/indicators
                
              >
               {project.map((item,index) => (
                <div className="w-[400px] bg-[#c7c7c7e1] h-[350px] flex flex-row items-center ">
                    <img src={item.image} alt={`project ${index}`} className=" top-0" />
                    <p className="absolute bottom-4 p-5 bg-[#0000005b] w-full font-bold text-white">{item.title}</p>
                </div>
               ))}
              </Carousel>

                 <div className="md:mx-16 my-10 mx-3">
                    <p className="sm:text-xl text-[15px] font-semibold">
                        - Projects executed across all states in Nigeria, from CCTV camera installations to credible solar system setup
                    </p>
                </div>
    </div>
}

export default Projects 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
   const [slideIndex, setSlideIndex] = useState<number>(0);

   const slideList = [
      {
         id: "0001",
         heading: "Whole body health <br /> starts <i>in the gut.</i>",
         img: "https://pebble-wellina.myshopify.com/cdn/shop/files/hero-slide-1.webp?v=1774428659&width=1920"
      },
      {
         id: "0002",
         heading: "Beauty powered <br /> by <i>balance.</i>",
         img: "https://pebble-wellina.myshopify.com/cdn/shop/files/hero-slide-2.webp?v=1774428659&width=1920"
      },
   ];

   const nextSlide = () =>
      setSlideIndex((prev) => (prev + 1) % slideList.length);

   const prevSlide = () =>
      setSlideIndex((prev) => (prev - 1 + slideList.length) % slideList.length);

   return (
      <div>
         <section>
            <div className="relative px-4 md:px-6 lg:px-10 pt-13">
               <div className="h-[calc(100vh-60px)] w-full overflow-hidden">
                  <img
                     className="h-full w-full object-center object-cover"
                     src={slideList[slideIndex].img}
                     alt=""
                     loading="lazy"
                  />
               </div>

               <div className="text-white flex flex-col justify-center items-center gap-5 pt-14 absolute w-full h-full top-0 left-0">
                  <p className="uppercase text-[15px] font-medium">
                     formulation
                  </p>
                  <h1 className="text-5xl md:text-[56px] lg:text-[78px] text-center"
                  dangerouslySetInnerHTML={{ __html: slideList[slideIndex].heading }}>
                     
                  </h1>
                  <button className="text-sm font-medium text-black flex items-center gap-2 py-3.5 px-5 bg-[#e3f6a4] rounded-full">
                     <span>Shop Now</span>
                     <ChevronRight size={16} />
                  </button>
               </div>

               <div className="absolute bottom-0 left-0 text-white py-5 w-full flex items-center justify-center gap-3">
                  <div className="text-base">
                     <span>1</span> / <span>3</span>
                  </div>
                  <div className="w-35 h-1 bg-[#ffffff1a]"></div>
                  <div className="flex items-center">
                     <button onClick={prevSlide}>
                        <ChevronLeft />
                     </button>
                     <button onClick={nextSlide}>
                        <ChevronRight />
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Home;

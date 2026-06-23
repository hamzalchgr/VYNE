import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const Home = () => {
   const [slideIndex, setSlideIndex] = useState<number>(1);

   const bgRef = useRef<null>(null);
   const contentRef = useRef<null>(null);

   useGSAP(() => {
      gsap.from(bgRef.current, {
         opacity: 0,
         scale: 1.1,
         duration: 0.5,
      });

      gsap.from(contentRef.current, {
         opacity: 0,
         position: 100,
         duration: 0.5,
      });
   }, [slideIndex]);

   const slideList = [
      {
         id: '0001',
         heading: 'Whole body health <br /> starts <i>in the gut.</i>',
         img: 'https://pebble-wellina.myshopify.com/cdn/shop/files/hero-slide-1.webp?v=1774428659&width=1920',
      },
      {
         id: '0002',
         heading: 'Beauty powered <br /> by <i>balance.</i>',
         img: 'https://pebble-wellina.myshopify.com/cdn/shop/files/hero-slide-2.webp?v=1774428659&width=1920',
      },
      {
         id: '0003',
         heading: 'Fuel your strength <br /> from <i>the inside..</i>',
         img: 'https://pebble-wellina.myshopify.com/cdn/shop/files/hero-slide-3.webp?v=1774428660&width=1920',
      },
   ];

   const nextSlide = () =>
      setSlideIndex((prev) => (prev + 1) % slideList.length);

   const prevSlide = () =>
      setSlideIndex((prev) => (prev - 1 + slideList.length) % slideList.length);

   return (
      <div>
         <section>
            <div className="relative px-4 md:px-6 lg:px-10 pt-13 pb-4 md:pb-6 lg:pb-10 h-screen">
               <div className="h-full w-full overflow-hidden">
                  <img
                     ref={bgRef}
                     className="h-full w-full object-center object-cover"
                     src={slideList[slideIndex].img}
                     alt=""
                     loading="lazy"
                  />
               </div>

               <div
                  ref={contentRef}
                  className="text-white flex flex-col justify-center items-center gap-5 pt-14 absolute w-full h-full top-0 left-0"
               >
                  <p className="uppercase text-[15px] font-medium">
                     formulation
                  </p>
                  <h1
                     className="text-5xl md:text-[56px] lg:text-[78px] text-center"
                     dangerouslySetInnerHTML={{
                        __html: slideList[slideIndex].heading,
                     }}
                  ></h1>
                  <button className="text-sm font-medium text-black flex items-center gap-2 py-3.5 px-5 bg-[#e3f6a4] rounded-full">
                     <span>Shop Now</span>
                     <ChevronRight size={16} />
                  </button>
               </div>

               <div className="absolute bottom-4 md:bottom-6 lg:bottom-10 left-0 text-white py-5 w-full flex items-center justify-center gap-3">
                  <div className="text-base">
                     <span>{slideIndex + 1}</span> /{' '}
                     <span>{slideList.length}</span>
                  </div>
                  <div className="w-35 h-0.5 bg-[#ffffff1a] relative">
                     <div
                        className={clsx(
                           'absolute left-0 h-full bg-white transition-all duration-500'
                        )}
                        style={{
                           width: `${((slideIndex + 1) / slideList.length) * 100}%`,
                        }}
                     />
                  </div>
                  <div className="flex items-center gap-2">
                     <button
                        className="h-6 w-6 grid place-items-center cursor-pointer"
                        onClick={prevSlide}
                     >
                        <ChevronLeft />
                     </button>
                     <button
                        className="h-6 w-6 grid place-items-center cursor-pointer"
                        onClick={nextSlide}
                     >
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

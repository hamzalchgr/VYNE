import { Link, Outlet } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { MENU, TOP_LINKS } from '../../constants/navigation';
import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header = () => {
   const [navOpen, setNavOpen] = useState(false);
   const [isVisible, setIsVisible] = useState(false);

   const navRef = useRef(null);
   const navContainer = useRef(null);

   const openMenu = () => {
      setIsVisible(true);
      setNavOpen(true);
   };

   const closeMenu = () => {
      gsap.to(navContainer.current, {
         opacity: 0,
         duration: 0.3,
      });

      gsap.to(navRef.current, {
         opacity: 0,
         y: -100,
         duration: 0.3,
         onComplete: () => {
            setNavOpen(false);
            setIsVisible(false);
         },
      });
   };

   useGSAP(() => {
      if (!navOpen) return;

      gsap.fromTo(
         navContainer.current,
         { opacity: 0 },
         { opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(
         navRef.current,
         { opacity: 0, y: -100 },
         { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
   }, [navOpen])

   return (
      <>
         <header className="fixed top-0 w-full z-50 grid grid-cols-3 py-2 px-4 md:px-6 lg:px-10">
            <div className="flex items-center">
               <button
                  className="uppercase cursor-pointer h-8 w-8 grid place-items-center"
                  aria-label="open / close navigation menu"
                  aria-controls="nav-menu"
                  aria-expanded={navOpen}
                  onClick={() => navOpen ? closeMenu() : openMenu()}
               >
                  {navOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>

            <div className="text-2xl leading-none font-medium h-7 grid place-items-center">
               <Link to="/">VYNE</Link>
            </div>

            <div className="grid items-center">
               <ul className="flex gap-2 justify-end">
                  <li className="h-8 w-8 grid place-items-center">
                     <Link to="/account">
                        <User size={20} />
                     </Link>
                  </li>
                  <li className="h-8 w-8 grid place-items-center">
                     <Link to="/search">
                        <Search size={20} />
                     </Link>
                  </li>
                  <li className="h-8 w-8 grid place-items-center">
                     <Link to="/shoppingCart">
                        <ShoppingBag size={20} />
                     </Link>
                  </li>
               </ul>
            </div>

            {isVisible && (
               <div
                  id="nav-menu"
                  className="fixed z-40 h-full w-full top-12 left-0 bg-[#00000049]"
                  aria-label="navigation menu container"
                  ref={navContainer}
                  aria-hidden={!navOpen}
                  onClick={(e) => {
                     e.preventDefault();
                     setNavOpen(!navOpen);
                  }}
               >
                  <div
                     className="bg-white w-screen overflow-y-auto py-14 px-4 md:px-6 lg:px-10 flex flex-col md:flex-row gap-12"
                     ref={navRef}
                     onClick={(e) => {
                        e.stopPropagation();
                     }}
                  >
                     <ul className="flex flex-col gap-2 text-3xl">
                        {TOP_LINKS.map((link) => (
                           <li key={link.label}>
                              <Link to={link.slug}>{link.label}</Link>
                           </li>
                        ))}
                     </ul>

                     <ul className="flex flex-col gap-7 uppercase font-medium leading-5 tracking-wider">
                        {MENU.map((categ) => (
                           <li
                              key={categ.label}
                              className="flex flex-col gap-2"
                           >
                              <span className="text-[#0000008a]">
                                 {categ.label}
                              </span>
                              <ul className="flex flex-col gap-1">
                                 {categ.children.map((child) => (
                                    <li key={child.label}>
                                       <Link to={child.slug}>
                                          {child.label}
                                       </Link>
                                    </li>
                                 ))}
                              </ul>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            )}
         </header>
         <Outlet />
      </>
   );
};

export default Header;

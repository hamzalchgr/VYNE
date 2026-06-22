import { Link, Outlet } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { MENU, TOP_LINKS } from '../../constants/navigation';
import useAniamtionMenu from './useAniamtionMenu';

const Header = () => {
   const { navOpen, closeMenu, openMenu, isVisible, containerRef, navRef } =
      useAniamtionMenu();

   return (
      <>
         <header className="fixed top-0 w-full z-50 grid grid-cols-3 py-2 px-4 md:px-6 lg:px-10 bg-white">
            <div className="flex items-center">
               <button
                  className="uppercase cursor-pointer h-8 w-8 grid place-items-center"
                  aria-label="open / close navigation menu"
                  aria-controls="nav-menu"
                  aria-expanded={navOpen}
                  onClick={() => (navOpen ? closeMenu() : openMenu())}
               >
                  {navOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>

            <div className="font-instrument text-4xl leading-none font-medium grid place-items-center">
               <Link to="/">wellina</Link>
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
                  ref={containerRef}
                  aria-hidden={!navOpen}
                  onClick={() => {
                     closeMenu();
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

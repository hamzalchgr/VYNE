import { Link, Outlet } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { MENU, TOP_LINKS } from '../../constants/navigation';

const Header = () => {
   return (
      <>
         <header className="grid grid-cols-3 py-2 px-4 md:px-6 lg:px-10">
            <div className="flex items-center">
               <button className="uppercase cursor-pointer h-8 w-8 grid place-items-center">
                  <Menu size={20} />
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

            <div className="fixed h-full w-full top-12 left-0 bg-[#0000008a]">
               <div className="bg-gray-50 w-screen h-4/5 py-14 px-4 md:px-6 lg:px-10 flex gap-12">

                  <ul className="flex flex-col gap-2 text-3xl">
                     {TOP_LINKS.map(link => (
                        <li>
                           <Link to={link.slug} >{link.label}</Link>
                        </li>
                     ))}
                  </ul>

                  <ul className="flex flex-col gap-7 uppercase text-xs font-medium tracking-wider">
                     {
                        MENU.map(categ => (
                           <li className="flex flex-col gap-2">
                              <span className="text-[#0000008a]">{categ.label}</span>
                              <ul className="flex flex-col gap-1">
                                 {
                                    categ.children.map(child => (
                                       <li>
                                          <Link to={child.slug}>{child.label}</Link>
                                       </li>
                                    ))
                                 }
                              </ul>
                           </li>
                        ))
                     }
                  </ul>
               </div>
            </div>
         </header>
         <Outlet />
      </>
   );
};

export default Header;

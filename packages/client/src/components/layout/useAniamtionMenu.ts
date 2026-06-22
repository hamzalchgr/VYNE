import { useEffect, useRef, useState, type RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

type UseAnimatedMenuReturn = {
   navOpen: boolean;
   isVisible: boolean;
   containerRef: RefObject<HTMLDivElement | null>;
   navRef: RefObject<HTMLDivElement | null>;
   openMenu: () => void;
   closeMenu: () => void;
};

const useAniamtionMenu = (): UseAnimatedMenuReturn => {
   const [navOpen, setNavOpen] = useState<boolean>(false);
   const [isVisible, setIsVisible] = useState<boolean>(false);

   const navRef = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);

   const openMenu = (): void => {
      setIsVisible(true);
      setNavOpen(true);
   };

   const closeMenu = (): void => {
      gsap.to(containerRef.current, {
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
         containerRef.current,
         { opacity: 0 },
         { opacity: 1, duration: 0.3 }
      );

      gsap.fromTo(
         navRef.current,
         { opacity: 0, y: -100 },
         { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
   }, [navOpen]);

   useEffect(() => {
      const handleKey = (e: KeyboardEvent) => {
         if (e.key === 'Escape') closeMenu();
      };

      window.addEventListener('keydown', handleKey);
      return () => window.removeEventListener('keydown', handleKey);
   }, []);
   return { navOpen, closeMenu, openMenu, isVisible, containerRef, navRef };
};

export default useAniamtionMenu;

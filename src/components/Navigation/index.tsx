import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CgMenuRightAlt } from 'react-icons/cg';

interface INavigation {
  scroll: any;
}

export const Navigation = ({ scroll }: INavigation) => {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < 400) {
        setShow(true);
      } else {
        console.log(scroll);
        setShow(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
    return () => {};
  }, [show]);

  const variants = {
    initial: { opacity: 0 },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 0.2
      }
    },
    closed: { opacity: 0, y: '-100%' }
  };

  return (
    <motion.nav
      variants={variants}
      initial="initial"
      animate={show ? 'closed' : 'open'}
      className="fixed z-50 w-full bg-white bg-opacity-95 top-0 flex items-center justify-between border-b-[2px] border-black h-[5rem] lg:h-18"
    >
      <div className="relative flex items-center px-4 text-[2rem] text-black font-primary cursor-default h-full">
        <div className="block lg:hidden">
          <span>arcetros</span>
        </div>
        <div className="hidden lg:flex items-center gap-x-7">
          <span>a</span>
          <span>r</span>
          <span>c</span>
          <span>e</span>
          <span>t</span>
          <span>r</span>
          <span>o</span>
          <span>s</span>
        </div>
      </div>

      {/* Desktop Navigations */}
      <ul className="font-headline hidden lg:flex items-center text-black h-full">
        <li className="flex text-xl px-7 border-x-[2px] border-black h-full">
          <span
            className="flex m-auto"
            onClick={() => console.log(scroll.current)}
            aria-hidden
          >
            HOME
          </span>
        </li>
        <li className="flex text-xl px-7 border-r-[2px] border-black h-full">
          <span className="flex m-auto">ABOUT</span>
        </li>
        <li className="flex text-xl px-7 border-r-[2px] border-black h-full">
          <span className="flex m-auto">PROJECT</span>
        </li>
        <li className="flex text-xl px-7 h-full">
          <span className="flex m-auto">CONTACT</span>
        </li>
      </ul>

      {/* Mobile Navigations */}
      <div className="flex px-7 lg:hidden border-l border-black h-full">
        <CgMenuRightAlt className="m-auto w-8 h-8" />
      </div>
    </motion.nav>
  );
};

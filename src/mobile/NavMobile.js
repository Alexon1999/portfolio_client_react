import React, { useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';

import './mobile.css';

import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './useDimensions';
import MenuToggle from './MenuToggle';
import { Navigation } from './Navigation';

const sidebar = {
  open: (height = 1000) => ({
    // +  clip path:       taille            ||  x  || y
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    position: 'fixed',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    // + clip path: taille || x pos || y pos
    clipPath: 'circle(50px at 300px -50px)',
    position: 'absolute',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const NavMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflow = 'hidden';
    } else {
      window.document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <motion.nav
      className='nav-mobile'
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      // style={{ zIndex: isOpen ? 5 : -1 }}
      style={{
        position: isOpen ? 'fixed' : 'absolute',
        pointerEvents: isOpen ? 'all' : 'none',
      }}
      custom={height}
      ref={containerRef}>
      <motion.div className='background' variants={sidebar} />
      <Navigation toggleOpen={toggleOpen} />
      <MenuToggle
        isOpen={isOpen}
        toggle={() => {
          // if (isOpen) {
          //   containerRef.current.style.position = 'absolute';
          // } else {
          //   containerRef.current.style.position = 'fixed';
          // }
          toggleOpen();
        }}
      />
    </motion.nav>
  );
};

export default NavMobile;

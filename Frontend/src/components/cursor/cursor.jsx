import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });

    const moveCursor = (e) => {
      // 2. Feed mouse coordinates directly to GSAP
      xTo(e.clientX);
      yTo(e.clientY);

      gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-10 h-10 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
    />
  );
};

export default Cursor;
import gsap from "gsap";
import { useEffect, useRef } from "react";
import "./project.css";

const LoopText = () => {
  const trackRef = useRef(null);
  const arrowRefs = useRef([]);
  const directionRef = useRef(1);

  useEffect(() => {
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear",
    });

    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      const newDirection = current > lastScroll ? 1 : -1;
      lastScroll = current;

      if (newDirection !== directionRef.current) {
        directionRef.current = newDirection;

        // Change loop direction
        gsap.to(tween, {
          timeScale: newDirection,
          duration: 0.3,
          ease: "power2.out",
        });

        // Rotate arrows
        gsap.to(arrowRefs.current, {
          rotate: newDirection === 1 ? 180 : 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="loop-container">
      <div className="loop-track" ref={trackRef}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="loop-item uppercase" key={i}>
            <span>More ideas taking shape</span>
            <img
              ref={el => arrowRefs.current[i] = el}
              src="/arrow.svg"
              className="loop-arrow"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoopText;

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "./about.css";
import AboutText from "./aboutText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutTitleRef = useRef(null);
  const waveRef = useRef(null);
  
  const waveTl = useRef(null);

  useGSAP(() => {
    // 1. Title Animation
    gsap.from(aboutTitleRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutTitleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // 2. Wave Animation Setup
    gsap.set(waveRef.current, { transformOrigin: "70% 70%" });
    
    // Create the timeline and assign it to the ref
    waveTl.current = gsap.timeline({ paused: true, repeat: -1 })
      .to(waveRef.current, { rotate: 18, duration: 0.15 })
      .to(waveRef.current, { rotate: -14, duration: 0.15 })
      .to(waveRef.current, { rotate: 12, duration: 0.15 })
      .to(waveRef.current, { rotate: 0, duration: 0.2 });
      
  }, []); // Scope is optional here since we use refs directly

  // Event Handlers
  const handleMouseEnter = () => {
    waveTl.current?.restart();
  };

  const handleMouseLeave = () => {
    waveTl.current?.pause(0); // Pause and reset to 0 progress
  };

  return (
    <div id="about" className="about bg-[#111] w-full min-h-screen flex flex-col items-center gap-4">
      <h1 ref={aboutTitleRef} className="uppercase text-center md:text-[calc(10vh)] text-[calc(5vh)]">
        ABOUT
      </h1>

      <div className="flex flex-col items-center gap-5">
        <div className="image-container">
          <img src="/hi-myself.png" alt="" />
        </div>
        <div className="hi-wrapper">
          <svg className="border-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
            <rect x="1" y="1" width="98" height="38" rx="10" ry="10" />
          </svg>

          <div 
            className="hi-container" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Hi! I'm Melvin 
            <span ref={waveRef} className="inline-block">👋</span>
          </div>
        </div>
        <AboutText />
      </div>
    </div>
  );
};

export default About;
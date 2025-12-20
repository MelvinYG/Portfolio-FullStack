import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const lines = containerRef.current.querySelectorAll(".line");
    gsap.to(lines, {
      y: 50,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="about-text-container flex flex-col gap-4 text-white text-center md:text-left px-4 md:px-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold line text-center">
        I craft <span className="accent">digital products</span>
      </h1>
      <h2 className="text-3xl md:text-5xl font-semibold line text-center">
        and <span className="accent">experiences</span>
      </h2>
      <p className="text-md md:text-lg line mx-auto md:mx-0 pt-5 px-6">
        A <span className="accent">full-stack developer</span> and product-minded engineer based out of India.  
        I've built web platforms, system-level applications, and interactive UIs.  
        I focus on delivering <span className="accent">delightful, intuitive, and reliable experiences</span> for users.
      </p>
    </div>
  );
};

export default AboutText;
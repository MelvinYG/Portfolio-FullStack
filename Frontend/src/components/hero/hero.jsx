import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import String from "../string/string";

import './hero.css';
import { ScrollToPlugin } from "gsap/all";
import MotionPathPlugin from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {
  const svgRef = useRef(null);
  const heroRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(MotionPathPlugin);
      const h1First = document.querySelector('.h1First');
      const h1Second = document.querySelector('.h1Second');

      const h1FText = h1First.textContent;
      const h1SText = h1Second.textContent;

      var h1FClutter = "";
      var h1SClutter = "";

      h1FText.split('').forEach((elem) => {
        h1FClutter += `<span class='${elem}-class'>${elem === " " ? "&nbsp;" : elem}</span>`;
      });
      h1SText.split('').forEach((elem) => {
        h1SClutter += `<span>${elem === " " ? "&nbsp;" : elem}</span>`;
      });    

      h1First.innerHTML = h1FClutter;
      h1Second.innerHTML = h1SClutter;

      const tl = gsap.timeline();

      const paths = svgRef.current.querySelectorAll("path");
          paths.forEach((p) => {
              const length = p.getTotalLength();
              gsap.set(p, {
                  strokeDasharray: length,
                  strokeDashoffset: length,
              });
          });

      tl.from('.h1First>span', {
        y: -10,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
        stagger: 0.1
      });

      tl.from('.h1Second>span', {
        y: -10,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1
      });

      tl.to('.h1First', {
        onStart: () => {
          h1First.classList.add('gradient-text');
        },
        duration: 0.1
      }, "+=0.2");

      tl.to('.h1Second', {
        onStart: () => {
          h1Second.classList.add('gradient-text2');
        },
        duration: 0.1
      }, "+=1");

      tl.to('.h1First', {
        x: '-120%',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, "+=0.4");

      tl.to('.h1Second', {
        x: '120%',
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut'
      }, "<");

      tl.to('.signature-svg', {
        onStart: () => {
          document
            .querySelector('.signature-svg')
            .classList.add('signature-visible');
        },
        duration: 0.1
      });

      tl.to(
        svgRef.current.querySelectorAll("path"),
          {
            strokeDashoffset: 0,
            duration: 5,
            ease: "power1.out",
            stagger: 0.15,
          }
        , "+=0.1");
      }, heroRef);

      return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={heroRef} className="hero h-[calc(100vh)] flex flex-col justify-center uppercase text-[calc(10vw)] text-center">
        <h1 className="h1First">Welcome to</h1>
        <h1 className="h1Second">My Portfolio</h1>
        <svg ref={svgRef} viewBox="0 0 216 124" className="signature-svg">
          <path d="M 103.52 76.36 C96.48,81.02 91.40,79.29 92.19,72.50 C92.45,70.27 92.21,69.13 91.55,69.42 C78.76,74.99 67.75,73.14 71.30,66.02 C72.96,62.69 78.66,59.00 82.15,59.00 C87.94,59.00 84.27,64.35 77.52,65.75 C72.80,66.73 71.86,68.68 75.64,69.62 C78.91,70.45 88.34,68.66 91.43,66.64 C92.61,65.86 96.19,59.89 99.37,53.36 C106.04,39.71 111.73,30.00 113.07,30.00 C114.78,30.00 114.03,33.50 111.54,37.16 C108.45,41.70 98.31,61.88 96.42,67.24 C94.51,72.63 94.58,76.00 96.60,76.00 C101.27,76.00 114.00,66.43 114.00,62.92 C114.00,61.86 114.68,61.00 115.50,61.00 C116.58,61.00 117.00,62.11 117.00,65.00 C117.00,68.17 117.37,69.00 118.78,69.00 C122.05,69.00 125.00,66.08 125.00,62.85 C125.00,56.71 130.12,51.68 134.62,53.41 C136.92,54.29 135.68,59.68 132.38,63.12 C129.83,65.78 129.83,65.84 131.83,66.91 C136.59,69.46 144.51,67.51 147.87,62.96 C150.03,60.04 153.00,58.96 153.00,61.09 C153.00,61.69 152.10,63.33 151.00,64.73 C146.73,70.16 149.62,71.51 157.91,67.94 C161.19,66.53 163.69,64.48 165.83,61.44 C167.55,59.00 169.39,57.00 169.92,57.00 C171.67,57.00 172.00,58.75 170.49,60.01 C167.68,62.34 169.00,62.93 172.46,60.89 C177.97,57.64 180.30,58.57 181.55,64.50 C182.84,70.66 184.97,71.31 191.65,67.57 C196.55,64.83 198.00,64.45 198.00,65.90 C198.00,67.32 189.27,72.08 185.58,72.68 C182.89,73.12 181.96,72.78 180.63,70.89 C179.73,69.60 179.00,67.29 179.00,65.75 C179.00,64.19 178.34,62.68 177.52,62.37 C175.99,61.78 174.54,62.72 166.47,69.49 C162.43,72.88 161.56,73.25 160.73,71.94 C159.86,70.55 159.23,70.57 154.66,72.11 C149.29,73.93 146.00,73.31 146.00,70.46 C146.00,68.72 145.64,68.69 140.65,70.08 C137.86,70.85 135.48,70.83 132.05,70.01 C127.80,68.99 126.86,69.10 123.08,71.07 L 118.86 73.27 L 112.81 68.80 L 110.16 71.26 C108.70,72.61 105.71,74.91 103.52,76.36 ZM 25.52 75.46 C21.50,86.70 20.25,88.91 18.76,87.42 C18.07,86.73 23.07,71.87 28.96,57.12 C34.41,43.47 35.16,42.00 36.66,42.00 C37.67,42.00 38.00,43.95 38.00,49.78 C38.00,58.07 39.56,62.00 42.86,62.00 C47.95,62.00 58.51,52.52 68.21,39.25 C71.52,34.71 74.86,31.00 75.62,31.00 C77.51,31.00 77.46,31.24 73.43,42.00 C71.47,47.22 67.24,58.70 64.03,67.50 C57.69,84.85 57.04,86.82 56.05,87.00 C55.93,87.02 55.80,87.01 55.65,87.01 C55.57,87.00 55.48,87.00 55.39,87.00 C54.63,87.00 54.00,86.66 54.00,86.24 C54.00,85.62 59.90,68.91 66.58,50.62 C67.36,48.49 68.00,46.53 68.00,46.27 C68.00,46.01 64.91,49.11 61.13,53.16 C48.14,67.06 37.55,68.96 35.47,57.75 C35.09,55.69 34.47,54.00 34.10,54.00 C33.35,54.00 31.78,57.94 25.52,75.46 ZM 159.00 54.28 C159.00,55.05 158.20,56.41 157.23,57.29 C155.09,59.23 152.65,58.08 153.16,55.38 C153.60,53.08 159.00,52.06 159.00,54.28 Z" fill="none" stroke="white" strokeWidth="3" />
        </svg>
      </div>
      <div className="hidden lg:block">
        <String />
      </div>
    </>
  )
};

export default Hero;

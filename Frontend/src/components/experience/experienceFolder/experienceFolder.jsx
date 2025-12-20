import { useRef } from "react";
import gsap from "gsap";
import ExperienceCard from "../experienceCard/experienceCard";

const ExperienceFolder = ({ experiences }) => {
  const lidRef = useRef(null);
  const cardsRef = useRef([]);

  const openFolder = () => {
    gsap.killTweensOf(cardsRef.current);
    gsap.killTweensOf(lidRef.current);
    gsap.to(lidRef.current, {
      rotateX: -55,
      rotateY: -20,
      transformOrigin: "bottom center",
      duration: 0.6,
      ease: "power3.out",
    });
        const total = experiences.length;
        const center = total / 2 - 0.5;

        const vw = window.innerWidth;
        const maxSpread = Math.min(vw * 0.8, 1000); // cap for large screens
        const spacing = maxSpread / (total - 1);   // dynamic X distance
        const curveStrength = Math.min(90, vw * 0.08);
        cardsRef.current.forEach((card, i) => {
                const d = i - center;

                gsap.to(card, {
                        x: d * spacing,
                        y: -250 + d * d * curveStrength * 0.15,
                        rotate: d * 8,
                        opacity: 1,
                        delay: i * 0.06,
                        duration: 0.7,
                        ease: "power3.out",
                });
        });
  };

  const closeFolder = () => {
    gsap.killTweensOf(cardsRef.current);
    gsap.killTweensOf(lidRef.current);
    
    gsap.to(lidRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    cardsRef.current.forEach((card) => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    });
  };

  return (
    <div
      className="relative flex justify-center items-center h-[600px]"
      onMouseEnter={openFolder}
      onMouseLeave={closeFolder}
    >
      {/* Cards */}
      {experiences.map((exp, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className="absolute opacity-0"
        >
          <ExperienceCard data={exp} />
        </div>
      ))}

      {/* Folder */}
      <div className="relative w-[280px] h-[240px] cursor-pointer">
        {/* Lid */}
        <div className="absolute top-5 w-full h-[220px] rounded-t-xl rounded-b-3xl origin-bottom">
                <div className="lid-top w-1/2 h-[25px] rounded-t-xl bg-blue-400"></div>
                <div className="w-full h-[195px] bg-blue-400 rounded-b-3xl rounded-tr-xl"></div>
        </div>

        {/* Pages in between */}

        <div className="page-1 absolute top-14 w-full h-[180px] bg-white rounded-t-xl rounded-b-3xl border border-gray-400 z-25"></div>
        <div className="page-1 absolute top-20 w-full h-[160px] bg-white rounded-t-xl rounded-b-3xl border border-gray-400 z-30"></div>

        {/* Base */}
        <div ref={lidRef} className="absolute bottom-0 w-full h-[150px] rounded-xl flex items-start flex-col justify-start text-white tracking-wide base-lid z-50">
          {/* <div className="base-lid-top w-1/2 h-[25px] rounded-t-xl bg-blue-500"></div> */}
          <div className="base-lid-bottom text-center rounded-tr-xl bg-blue-500 h-[150px] w-full flex justify-center items-end py-10 text-gray-300 font-bold">
                2024 — Present
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceFolder;
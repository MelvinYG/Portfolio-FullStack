import { useEffect, useRef, useState } from "react";
import ExperienceTitle from "./experienceTitle/experienceTitle";
import ExperienceCard from "./experienceCard/experienceCard"; 
import data from '../../data/experience.json';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]); 
  const expTitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    setExperienceData(data);
  }, []);

  useGSAP(() => {
    gsap.from(expTitleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: expTitleRef.current,
        start: "top 70%", // Adjusted to trigger earlier
        toggleActions: "play none none none",
        // Remove 'once: true' if you want animation on every scroll in/out
      }
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "restart pause reverse pause",
        }
      });
    });
  }, [experienceData]);

  return (
    <div className="min-h-screen bg-[#111] text-white pt-4">
      <div className="hidden md:block">
        <ExperienceTitle />
      </div>
      <div className="block md:hidden">
        {/* Fixed font size by adding missing parenthesis in calc */}
        <h1 
          ref={expTitleRef} 
          className="uppercase text-center md:text-[calc(10vh)] text-[calc(5vh+1rem)] mt-4"
        >
          EXPERIENCE
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center md:mt-20 mt-10 gap-5">
        {experienceData.map((expData, index) => (
          <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
            <ExperienceCard data={expData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
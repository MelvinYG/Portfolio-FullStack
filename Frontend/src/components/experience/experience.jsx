import { useEffect, useRef, useState } from "react";
import ExperienceTitle from "./experienceTitle/experienceTitle";
import data from "../../data/experience.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceFolder from "./experienceFolder/experienceFolder";
import ExperienceCardMobile from "./experienceCard/experienceCardMobile"; 
import useIsDesktop from "../useIsDesktop";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const isDesktop = useIsDesktop(980);
  const [experienceData, setExperienceData] = useState([]);
  const expTitleRef = useRef(null);
  const folderRef = useRef(null);
  const mobileCardsRef = useRef([]);

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
        start: "top 70%",
      },
    });

    gsap.from(folderRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: folderRef.current,
        start: "top 80%",
      },
    });

    mobileCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play pause play pause",
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white py-10">
      <div className="hidden md:block">
        <ExperienceTitle />
      </div>

      <div className="block md:hidden">
        <h1
          ref={expTitleRef}
          className="uppercase text-center text-[calc(5vh+1rem)] mt-4"
        >
          EXPERIENCE
        </h1>
      </div>     
      {
        isDesktop ? 
          <div ref={folderRef} className="flex justify-center items-center mt-24">
            <ExperienceFolder year="2024 - Present" experiences={experienceData}/>
          </div>
          :
          <div className="mobile-exp-cards flex flex-col justify-center items-center md:mt-20 mt-10 gap-5">
            {experienceData.map((expData, index) => (
              <div key={index} ref={(el) => (mobileCardsRef.current[index] = el)}>
                <ExperienceCardMobile data={expData} />
              </div>
            ))}
          </div> 
        }
    </div>
  );
};

export default Experience;
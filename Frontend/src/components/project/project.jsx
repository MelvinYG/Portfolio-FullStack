import { useLayoutEffect, useRef, useState } from "react";
import "./project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projData from '../../data/projectData.json';
import LoopText from "./loopText";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ setPreviewImage }) => {
  const projectRef = useRef(null);
  const [projectData, setProjectData] = useState([]);

  useLayoutEffect(() => {
    const title = projectRef.current;
    setProjectData(projData);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        {
          scaleX: 1,
          scaleY: 1,
        },
        {
          scaleX: 1.8, // 👈 controls width fill
          scaleY: 1.8, // slight height growth
          ease: "none",
          scrollTrigger: {
            trigger: title,
            start: "center center",
            end: "+=500",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [projData]);

  return (
    <section id='project' className="project-section">
      <h2 ref={projectRef} className="project-header">
        PROJECTS
      </h2>

      <div className="project-data pt-20 pb-4">
        {projectData.map((data, index) => (
            <div className="elem" key={index} onMouseEnter={() => setPreviewImage(data.image)} onMouseLeave={() => setPreviewImage(null)} >
                <div className="overlay"></div>
                <h2>{data.title}</h2>
            </div>
        ))}
      </div>
      
      <LoopText />
    </section>
  );
};

export default Project;
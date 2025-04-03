import { useEffect, useState } from "react";
import ExperienceTitle from "./experienceTitle/experienceTitle";
import ExperienceCard from "./experienceCard/experienceCard"; 
import data from '../../data/experience.json';

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]); 

  useEffect(() => {
    // fetch('url')
    //   .then(res => res.json())
    //   .then((data) => setExperienceData(data))
    //   .catch((err) => console.error("Error fetching experience data:", err));
    setExperienceData(data);
  }, []);

  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="hidden md:block">
      <ExperienceTitle />
      </div>
      <div className="flex flex-col justify-center items-center mt-20 gap-5">
        {experienceData.map((expData, index) => (
          <ExperienceCard key={index} data={expData} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
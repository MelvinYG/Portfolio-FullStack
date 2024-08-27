import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ExperienceTitle = () => {
    useGSAP(() => {
        gsap.to('.exp-title h1', {
            x: "-90%",
            scrollTrigger: {
                trigger: ".exp-title",
                start: "top 10%",
                end: "top -100%",
                scrub: 2,
                pin: true,
            }
        });
    });

    return (
        <div className="exp-title uppercase h-[600px] bg-blue-300">
            <h1 className="text-[450px] px-20">Experience</h1>
        </div>
    );
};

export default ExperienceTitle;

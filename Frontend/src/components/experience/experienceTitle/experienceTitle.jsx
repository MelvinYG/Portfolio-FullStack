import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './experienceTitle.css';

gsap.registerPlugin(ScrollTrigger);

const ExperienceTitle = () => {
    let windowWidth = window.innerWidth;
    useGSAP(() => {
        let titleWidth = document.querySelector('.exp-title h1').scrollWidth;
        titleWidth = Math.min(0.9*titleWidth, 2000);
        let transX = -1*titleWidth;
        gsap.to('.exp-title h1', {
            x: transX,
            scrollTrigger: {
                trigger: ".exp-title",
                start: "top 10%",
                end: "top -100%",
                scrub: 2,
                pin: true,
            }
        },[windowWidth]);
    });

    return (
        <div className="exp-title uppercase h-[calc(70vh)]">
            <h1 className="text-[calc(50vh)] px-20">Experience</h1>
        </div>
    );
};

export default ExperienceTitle;

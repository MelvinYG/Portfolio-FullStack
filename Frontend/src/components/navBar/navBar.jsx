import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import './navBar.css';

const NavBar = () => {

    const navRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(navRef.current, {
            y: -20,
            opacity: 0,
            delay: 0.5,
            duration: 0.75
        });
        tl.from(".menu > div",{
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        });
    })

  return (
    <div ref={navRef} className="h-[100px] flex items-center justify-between px-20 py-10">
      <div className="logo font-bold text-xl">Melvin&apos;s Portfolio</div>
      <div className="menu flex justify-center items-center gap-4">
        <div className="about">About</div>
        <div className="project">Projects</div>
        <div className="contact">Contact Me</div>
      </div>
    </div>
  )
};

export default NavBar;

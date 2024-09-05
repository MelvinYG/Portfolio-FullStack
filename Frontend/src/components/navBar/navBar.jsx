import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef} from "react";
import './navBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const navRef = useRef(null);

  const handleSideMenu = () => {
    let sideMenu = document.querySelector('.side-menu');
    if(sideMenu.classList.contains('active')) sideMenu.classList.remove('active');
    else sideMenu.classList.add('active');
  }

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
  },[]);

  return (
    <div className="h-[100px] navBar">
      <div ref={navRef} className="flex items-center justify-between px-[calc(10vw)] py-10">
        <div className="logo font-bold text-xl">Melvin&apos;s Portfolio</div>
        <div className="menu flex justify-center items-center gap-4">
          <div className="about">About</div>
          <div className="project">Projects</div>
          <div className="contact">Contact Me</div>
        </div>
        <div className="menu-mobile">
          <MenuIcon className="menu-icon" onClick={() => handleSideMenu()}/>
           
          <div className="side-menu">
            <CloseIcon onClick={() => handleSideMenu()} className="close-icon"/>
            <div className="about">About</div>
            <div className="project">Projects</div>
            <div className="contact">Contact Me</div>
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default NavBar;

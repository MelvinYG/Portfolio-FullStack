import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import './navBar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';

const NavBar = () => {
  const navRef = useRef(null);
  const sideMenuRef = useRef(null);
  const audioRef = useRef(null);
  const [musicOff, setMusicOff] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play(); // Attempt to play
      } catch (error) {
        console.log("Autoplay blocked, waiting for user interaction.");
      }
    };
    playAudio();
  }, []);

  const handleSideMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.classList.toggle("active");
    }
  };

  const handleMusic = () => {
    setMusicOff((prev) => !prev);
    if (audioRef.current) {
      if (musicOff) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(navRef.current, {
      y: -20,
      opacity: 0,
      delay: 0.5,
      duration: 0.75,
    });
    tl.from(".menu > div", {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="h-[100px] navBar">
      <div ref={navRef} className="flex items-center justify-between px-[10vw] py-10">
        <div className="logo font-bold text-xl">Melvin&apos;s Portfolio</div>
        <div className="menu flex justify-center items-center gap-4">
          <div className="about">About</div>
          <div className="project">Projects</div>
          <div className="contact">Contact Me</div>
          <div className="musicBtns" onClick={handleMusic}>
              {musicOff ? <MusicOffIcon /> : <MusicNoteIcon />}
            </div>
        </div>
        <div className="menu-mobile">
          <MenuIcon className="menu-icon" onClick={handleSideMenu} />

          <div ref={sideMenuRef} className="side-menu">
            <CloseIcon onClick={handleSideMenu} className="close-icon" />
            <div className="about">About</div>
            <div className="project">Projects</div>
            <div className="contact">Contact Me</div>
            <div className="musicBtns" onClick={handleMusic}>
              {musicOff ? <MusicOffIcon /> : <MusicNoteIcon />}
              <audio ref={audioRef} src="src/assets/instrument.mp3" loop autoPlay/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
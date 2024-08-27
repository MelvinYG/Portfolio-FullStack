import { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {

  useEffect(() => {
    const h1First = document.querySelector('.h1First');
    const h1Second = document.querySelector('.h1Second');

    const h1FText = h1First.textContent;
    const h1SText = h1Second.textContent;

    var h1FClutter = "";
    var h1SClutter = "";

    h1FText.split('').forEach((elem) => {
      h1FClutter += `<span>${elem}</span>`;
    });
    h1SText.split('').forEach((elem) => {
      h1SClutter += `<span>${elem}</span>`;
    });

    h1First.innerHTML = h1FClutter;
    h1Second.innerHTML = h1SClutter;

    const tl = gsap.timeline();
    tl.from('.h1First>span', {
      y: -10,
      opacity: 0,
      delay: 0.5,
      duration: 0.7,
      stagger: 0.2
    });
    tl.from('.h1Second>span',{
      y: -10,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2
    })
  }, []);

  return (
    <div className="hero h-screen flex flex-col justify-center uppercase text-[160px] text-center border-b border-[#eee]">
      <h1 className="h1First">Welcome to</h1>
      <h1 className="h1Second">My Portfolio</h1>
    </div>
  )
};

export default Hero;

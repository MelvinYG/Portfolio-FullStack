import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";

const App = () => {

  useGSAP(() => {
    gsap.to('.box',{
      x: 500,
      delay: 2,
      duration: 4
    })
  })

  return (
    <div className="w-full min-h-screen bg-[#111] overflow-x-hidden">
      <NavBar/>
      <Hero/>
    </div>
  )
};

export default App;

import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Project from "./components/project/project";
import './App.css';
import { useState } from "react";
import Footer from "./components/footer/footer";

const App = () => {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <div className="w-full min-h-screen bg-[#111] overflow-x-hidden">
      <div className={`project-image-viewer ${previewImage ? "visible" : ""}`}
        style={{
          backgroundImage: previewImage
            ? `url(${previewImage})`
            : "none",
        }}></div>
      <NavBar/>
      <Hero/>
      <About/>
      <Experience />
      {/* Project section */}
      <Project setPreviewImage={setPreviewImage}/>
      <Footer />  
    </div>
  )
};
export default App;

import NavBar from "./components/navBar/navBar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import String from "./components/string/string";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#111] overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <String/>
      <About/>
      <Experience />
    </div>
  )
};

export default App;

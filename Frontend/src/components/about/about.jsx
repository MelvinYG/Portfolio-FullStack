const About = () => {
  return (
    <div className="bg-[#111] w-full h-screen border-b border-[#eee] flex flex-col items-center gap-4">
      <h1 className="uppercase text-center md:text-[calc(10vh)] text-[calc(5vh)]">About</h1>

      <div className="about-card flex md:flex-row flex-col justify-center w-[calc(70vw)] md:h-[calc(50vh)] h-[calc(90vh)] border border-[#eeeeee50] rounded-lg">
        <div className="about-details px-6 py-4 order-2 md:order-1 flex flex-col items-center md:w-[70%]">
          <h2 className="text-[28px] mt-4">👋 Hey I&apos;m Melvin</h2>
          <p className="text-center mt-8">
          I'm a final year student of Indian Institute of Technology Patna, IIT Patna and based out from Kerala, India. I'm a passionate full-stack developer with a love for building seamless digital experiences. 
            <br />
          🚀 With experience in WasmEdge, LibreOffice, Shopify apps, and energy management systems, I enjoy solving complex problems and pushing the boundaries of technology.
            <br />
          💡 Always learning, always innovating—let's build something amazing together!
        </p>
        </div>
        <div className="profile-pic  lg:w-1/2 md:w-full w-[100%] order-1 md:order-2 flex items-center justify-center">
          <div className="lg:w-[60%] w-[70%]">
            <img src="src/assets/image.png" alt="" className="h-full w-full object-cover " />
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;

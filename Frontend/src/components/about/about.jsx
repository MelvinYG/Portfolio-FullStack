const About = () => {
  return (
    <div className="bg-[#111] w-full h-screen border-b border-[#eee] flex flex-col items-center gap-4">
      <h1 className="uppercase text-center text-[calc(10vh)]">About</h1>

      <div className="about-card flex justify-center w-[calc(70vw)] h-[calc(50vh)] border border-[#eeeeee50] rounded-lg">
        <div className="about-details px-6 py-4">
          <h2 className="text-[24px]">Hey I&apos;m Melvin</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, accusamus eligendi unde dolorum reiciendis sint odio numquam incidunt temporibus nisi.</p>
        </div>
        <div className="profile-pic w-1/2 rounded-r-lg">
          <img src="./profile.jpeg" alt="" className="h-full w-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  )
};

export default About;

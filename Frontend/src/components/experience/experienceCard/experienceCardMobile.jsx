const ExperienceCardMobile = ({ data }) => {
  return (
    <div className="experience-card border-2 border-white lg:w-[60vw] w-[80vw] lg:h-[250px] h-[350px] p-4 flex flex-col md:flex-row gap-4 items-center bg-gray-800 text-white rounded-lg shadow-lg">
      {/* Left side - Company Logo */}
      <div className="exp-left flex justify-center items-center">
        <div className="exp-company-logo-container">
          <img 
            src={data["company-logo"] || ""} 
            className="w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-auto object-contain"
            alt="Company Logo" 
          />
        </div>
      </div>

      {/* Right side - Company Details */}
      <div className="exp-right flex-1 text-center md:text-left">
        <div className="company-details">
          <div className="exp-company-title text-lg font-bold">{data["company-name"]}</div>
          <div className="exp-role text-md text-gray-300">{data["company-title"]}</div>
        </div>
        <div className="exp-duration text-sm text-gray-400">{data["exp-duration"]}</div>
        <div className="exp-bulletins mt-2 text-sm">{data["exp-bulletin"]}</div>
        <div className="exp-handles mt-2 text-sm italic">{data["exp-handles"]}</div>
      </div>
    </div>
  );
};

export default ExperienceCardMobile;
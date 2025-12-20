const ExperienceCard = ({ data }) => {
  return (
    <div
      className="w-[260px] h-[200px]
                 bg-gradient-to-b from-white to-yellow-50
                 rounded-2xl p-4 shadow-xl
                 text-gray-800 overflow-hidden exp-card"
    >
      <h3 className="text-blue-600 font-bold text-lg">
        {data["company-name"]}
      </h3>

      <p className="text-sm text-gray-500">
        {data["company-title"]} | {data["exp-duration"]}
      </p>

      <div className="mt-3 space-y-2 text-sm">
          <div className="flex gap-2">
            <span className="text-blue-500">✦</span>
            <span>{data["exp-bulletin"]}</span>
          </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
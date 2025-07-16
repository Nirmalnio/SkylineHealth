import React from "react";

const JournalCard = ({ title, category, imageUrl }) => {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-md bg-white">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-60 object-cover" />
        <span className="absolute top-4 right-4 bg-[#52bed6] text-white text-sm px-4 py-1 rounded-full font-semibold shadow-md">
          {category}
        </span>
      </div>

      <div className="flex flex-col justify-between flex-grow p-5">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div>
          <a
            href="#"
            className="text-[#52bed6] font-semibold flex items-center gap-2"
          >
            Read More <span className="text-xl leading-none">➜</span>
          </a>
        </div>
      </div>
    </div>
  );
};


export default JournalCard;

import React from "react";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="mt-3 text-sm text-gray-500">{text}</p>
    </div>
  );
};

export default Loading;

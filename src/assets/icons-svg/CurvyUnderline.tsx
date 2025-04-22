import React from 'react';

const CurvyUnderline = () => {
  return (
    <svg
      className="w-full h-6 text-[#FFFFFF73]"
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="0,10 5,0 10,10 15,0 20,10 25,0 30,10 35,0 40,10 45,0 50,10 55"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
};

export default CurvyUnderline;

import React from 'react'

const StartRecording = () => {
  return (
    <button
      // style={{
      //   background:
      //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
      // }}
      style={{ boxShadow: "8px 8px 4px #0D103C" }}
      className="bg-[#fff] h-[75px] min-w-[320px]:w-[280px] sm:w-[380px] font-roboto font-bold text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
    >
      Start Recording
    </button>
  );
}

export default StartRecording
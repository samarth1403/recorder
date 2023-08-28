import React, { useEffect, useRef, useState } from "react";
import {useSelector} from 'react-redux';

const CameraStream = () => {
  const videoReference = useRef(null);
  const [startWebCam , setStartWebCam] = useState(false);
  const {cameraAccess} = useSelector((state)=>{
    return state.user;
  });

  const startWebcamStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoReference.current.srcObject = stream;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
      if(cameraAccess){
        setStartWebCam(true);
        startWebcamStream();
      }
  },[cameraAccess]);

  const handleStopWebCam = () => {
    if(cameraAccess && startWebCam){
        videoReference.current.srcObject = null;
        setStartWebCam(false);
    }
    if(cameraAccess && !startWebCam){
        startWebcamStream();
        setStartWebCam(true);
    }
  }



  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      {cameraAccess && (
        <p className="font-roboto font-bold text-xl text-[#fff] text-center my-4">
          WebCam Preview
        </p>
      )}
      {startWebCam && cameraAccess && (
        <div className="min-[320px]:w-[300px] sm:w-[400px] rounded-[20px] my-4">
          <video ref={videoReference} autoPlay playsInline controls muted/>
        </div>
      )}
      {cameraAccess && (
        <button
          className="bg-[#fff] h-[75px] min-[320px]:w-[200px] sm:w-[240px] font-roboto font-bold text-[#0D103C] text-xl rounded-[20px]
        "
          onClick={handleStopWebCam}
        >
          {startWebCam ? "Stop WebCam" : "Start WebCam"}
        </button>
      )}
    </div>
  );
};

export default CameraStream;

import React, { useEffect, useRef, useState } from "react";
import {useSelector} from 'react-redux';
import Button from "../ReusableComponents/Button";

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
        <Button
          
          disabled={true}
        >
          WebCam Preview
        </Button>
      )}
      {startWebCam && cameraAccess && (
        <div className="min-[320px]:w-[300px] sm:w-[360px] rounded-[20px] my-4">
          <video ref={videoReference} autoPlay playsInline controls muted />
        </div>
      )}
      {cameraAccess && (
        <button
          
          className="bg-[#fff] h-[50px] min-[320px]:w-[180px] sm:w-[180px] font-roboto font-bold text-xl rounded-[10px] px-4 mx-4 mt-4 mb-4
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

import React,{useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import Dummy from "./dummycode";

const HomePage = () => {
  const [cameraAccess , setCameraAccess] = useState(false);
  const [audioAccess , setAudioAccess] = useState(false);
  const [stream , setStream] = useState(null);
  const videoRef = useRef(null);

  const handleClickCameraAccess = async () => {
    try {
      const camStream = await navigator.mediaDevices.getUserMedia({ video : true });
      setStream(camStream);
      setCameraAccess(true);
      toast.success("Camera Access is Allowed");
    } catch (error) {
      toast.error("Permission Denied");
    }
  };

  const handleClickAudioAccess = async() => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio : true });
      setAudioAccess(true); 
      toast.success("Audio Access is Allowed");
    } catch (error) {
       toast.error("Permission Denied");
    }
  }


  return (
    <div className="flex flex-row">
      <div className="flex flex-col flex-no-wrap justify-center items-start">
        <button
          // style={{
          //   background:
          //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          onClick={handleClickCameraAccess}
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] h-[75px] min-w-[320px]:w-[280px] sm:w-[400px] md:w-[600px] font-roboto font-bold text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
        >
          {cameraAccess ? "Camera Access is Allowed" : "Allow to Access Camera"}
        </button>

        <button
          // style={{
          //   background:
          //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
          // }}
          onClick={handleClickAudioAccess}
          style={{ boxShadow: "8px 8px 4px #0D103C" }}
          className="bg-[#fff] h-[75px] min-w-[320px]:w-[280px] sm:w-[400px] md:w-[600px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
        >
          {audioAccess ? "Audio Access is Allowed " : "Allow to Access Audio"}
        </button>
        {cameraAccess && (
          <Link to="/record">
            <button
              // style={{
              //   background:
              //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
              // }}
              style={{ boxShadow: "8px 8px 4px #0D103C" }}
              className="bg-[#fff] h-[75px] min-w-[320px]:w-[280px] sm:w-[400px] md:w-[600px] font-roboto font-bold text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
            >
              Start Recording
            </button>
          </Link>
        )}
      </div>
      {stream ? (
        <div className="w-[60px] h-[60px]">
          <video autoPlay ref={videoRef.current} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default HomePage
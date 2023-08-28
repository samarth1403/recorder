import React,{useState} from 'react';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { giveAudioAccess, giveCameraAccess } from '../../features/user/userSlice';

const Access = () => {

     const {cameraAccess , audioAccess} = useSelector((state)=>{
        return state.user;
     });
     const dispatch = useDispatch();

     const handleClickCameraAccess = async () => {
       try {
         const camStream = await navigator.mediaDevices.getUserMedia({
           video: true,
         });
        // setStream(camStream);
         toast.success("Camera Access is Allowed");
         dispatch(giveCameraAccess(true));
       } catch (error) {
         toast.error("Permission Denied");
         dispatch(giveCameraAccess(false));
       }
     };

     const handleClickAudioAccess = async () => {
       try {
         await navigator.mediaDevices.getUserMedia({ audio: true });
         toast.success("Audio Access is Allowed");
         dispatch(giveAudioAccess(true));
       } catch (error) {
         toast.error("Permission Denied");
         dispatch(giveAudioAccess(false));
       }
     };

  return (
    <div>
      <div className="flex flex-col flex-no-wrap justify-center items-start">
        {!cameraAccess && (
          <button
            // style={{
            //   background:
            //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            onClick={handleClickCameraAccess}
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] h-[75px] min-w-[320px]:w-[280px] sm:w-[380px] font-roboto font-bold text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
          >
            {cameraAccess
              ? "Camera Access is Allowed"
              : "Allow to Access Camera"}
          </button>
        )}

        {!audioAccess && (
          <button
            // style={{
            //   background:
            //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            onClick={handleClickAudioAccess}
            style={{ boxShadow: "8px 8px 4px #0D103C" }}
            className="bg-[#fff] h-[75px] min-[320px]:w-[280px] sm:w-[380px] font-roboto font-bold  text-[#0D103C] text-2xl rounded-[20px] px-4 mx-4 mt-4 mb-8"
          >
            {audioAccess ? "Audio Access is Allowed " : "Allow to Access Audio"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Access
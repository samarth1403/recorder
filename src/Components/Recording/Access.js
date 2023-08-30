import React,{useState} from 'react';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from 'react-redux';
import { giveAudioAccess, giveCameraAccess } from '../../features/user/userSlice';
import Button from '../ReusableComponents/Button';

const Access = () => {

     const {
       cameraAccess,
       audioAccess,
       isRecordingStarted,
       isRecordingStoped,
     } = useSelector((state) => {
       return state.user;
     });
     const dispatch = useDispatch();

     console.log("isRecordingStarted",isRecordingStarted);
     console.log("isRecordingStoped",isRecordingStoped);

     const handleClickCameraAccess = async () => {
       try {
         const camStream = await navigator.mediaDevices.getUserMedia({
           video: true,
         });
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
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        {!isRecordingStarted && !isRecordingStoped && (
          <p className="leading-snug ont-roboto font-bold text-center items-center text-[#FEE77A] text-2xl my-4">
            Record Your Screen & Dowload the Recorded Video
          </p>
        )}

        {!cameraAccess && (
          <Button
            // style={{
            //   background:
            //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            onClick={handleClickCameraAccess}
            style={{
              background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
            }}
          >
            {cameraAccess
              ? "Camera Access is Allowed"
              : "Allow to Access Camera"}
          </Button>
        )}
        {!audioAccess && (
          <Button
            // style={{
            //   background:
            //     "linear-gradient(90deg, #4DD4FF 0%, #F5F5F5 100%)",
            // }}
            onClick={handleClickAudioAccess}
            style={{
              background: "linear-gradient(90deg, #53FFB8 0%, #ACE7FF 100%)",
            }}
          >
            {audioAccess ? "Audio Access is Allowed " : "Allow to Access Audio"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Access
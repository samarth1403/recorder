import React from 'react';
import {ReactMediaRecorder , useReactMediaRecorder } from 'react-media-recorder';
import { useDispatch , useSelector } from 'react-redux';
import { startNewRecording, stopNewRecording } from '../../features/user/userSlice';
import Button from '../ReusableComponents/Button';

const StartRecording = () => {
  const { startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true, audio: true });

    const dispatch = useDispatch();
    const {isRecordingStarted , cameraAccess , isRecordingStoped} = useSelector((state)=>{
      return state.user;
    })

    const handleStartRecording = () => {
      startRecording();
      dispatch(startNewRecording(true));
      dispatch(stopNewRecording(false));
    }
    const handleStopRecording = () => {
      stopRecording();
      dispatch(startNewRecording(false));
      dispatch(stopNewRecording(true));
    }

    const handleDownloadVideo = () => {
      if (mediaBlobUrl) {
        const link = document.createElement("a");
        link.href = mediaBlobUrl;
        link.download = "recordedVideo.webm"; 
        link.click();
      }
    }
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      {cameraAccess && (
        <Button
          onClick={handleStartRecording}
          style={{
            background: "linear-gradient(90deg, #FCFF7E 0%, #FF9090 100%)",
          }}
        >
          {isRecordingStarted ? "Recording Started" : "Start Recording"}
        </Button>
      )}
      {isRecordingStarted && !isRecordingStoped && (
        <Button
          onClick={handleStopRecording}
          style={{
            background: "linear-gradient(90deg, #FCFF7E 0%, #FF9090 100%)",
          }}
        >
          Stop Recording
        </Button>
      )}

      {mediaBlobUrl && !isRecordingStarted && (
        <>
          <div className="min-[320px]:w-[300px] sm:w-[360px] md:w-[500px] my-4">
            <video src={mediaBlobUrl} autoPlay loop controls></video>
          </div>
          <Button
            onClick={handleDownloadVideo}
            style={{
              background: "linear-gradient(90deg, #FCFF7E 0%, #FF9090 100%)",
            }}
          >
            Download Video
          </Button>
        </>
      )}
    </div>
  );
}

export default StartRecording
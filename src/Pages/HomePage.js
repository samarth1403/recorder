import React,{useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import Access from '../Components/Recording/Access';
import StartRecording from '../Components/Recording/StartRecording';
import WebCam from '../Components/Recording/WebCam';
import Dummy from "./dummycode";

const HomePage = () => {
 
  const [stream , setStream] = useState(null);
  const videoRef = useRef(null);

  


  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div>
        <Access />
        <StartRecording/>
      </div>
      <WebCam />
    </div>
  );
}

export default HomePage
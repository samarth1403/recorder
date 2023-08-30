import React,{useState,useRef} from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import Access from '../Components/Recording/Access';
import StartRecording from '../Components/Recording/StartRecording';
import WebCam from '../Components/Recording/WebCam';
import Dummy from "./dummycode";
import {PrivateRoute} from "../Routing/PrivateRoute";

const HomePage = () => {
 
  const [stream , setStream] = useState(null);
  const videoRef = useRef(null);

  


  return (
    <div className="flex flex-row flex-wrap justify-center items-start my-4">
      <div className="flex flex-col flex-no-wrap justify-center items-center px-6">
        <Access />
        <PrivateRoute>
          <StartRecording />
        </PrivateRoute>
      </div>
      <div className="px-6">
        <WebCam />
      </div>
    </div>
  );
}

export default HomePage
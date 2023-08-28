import React, { useState } from "react";

const Dummy = () => {


  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  const requestWebcamAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>Webcam Access Example</h1>
      {stream ? (
        <div>
          <video
            autoPlay
            ref={(videoElement) => (videoElement.srcObject = stream)}
          />
          <button
            onClick={() => stream.getTracks().forEach((track) => track.stop())}
          >
            Stop Webcam
          </button>
        </div>
      ) : (
        <div>
          <p>
            {error
              ? `Error: ${error.message}`
              : "Click the button to access webcam"}
          </p>
          <button onClick={requestWebcamAccess}>Access Webcam</button>
        </div>
      )}
    </div>
  );
}

export default Dummy;

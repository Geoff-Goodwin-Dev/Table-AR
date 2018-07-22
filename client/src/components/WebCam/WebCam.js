import React, {Component} from "react";

class WebCam extends Component {
  componentDidMount() {
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia || navigator.mediaDevices.oGetUserMedia;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      })
      .then((stream) => {
        video.srcObject = stream;
      })
      .catch((error) => {
        console.log('error', error);
      });
    }
  };

  render() {
    return (
      <video
        playsInline
        muted
        loop
        autoPlay
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%)",
          width: "100%",
          zIndex: -6,
        }}
      />
    )
  };
}

export default WebCam;
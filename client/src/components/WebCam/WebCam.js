import React, {Component} from "react";

class WebCam extends Component {
  state = {
    videoSrc: null
  };

  componentDidMount() {
    // navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    // if (navigator.getUserMedia) {
    //   navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    // }
    const video = document.querySelector('video');
    navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia || navigator.mediaDevices.oGetUserMedia;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: true,
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

  //
  //
  //
  // handleVideo = (stream) => {
  //   // Update the state, triggering the component to re-render with the correct stream
  //   this.setState({videoSrc: window.URL.createObjectURL(stream)});
  //   console.log('video feed initiated');
  //   const video = document.querySelector('video');
  //   const promise = video.play();
  //   // promise won’t be defined in browsers that don't support promisified play()
  //   if (promise === undefined) {
  //     console.log('Promisified video play() not supported');
  //   } else {
  //     promise.then(() => {
  //       console.log('Video playback successfully initiated, returning a promise');
  //     }).catch((error) => {
  //       console.log('Error initiating video playback: ', error);
  //     });
  //   }
  // };
  //
  // videoError = () => {
  //   console.log('video error encountered');
  // };

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
import React, {Component} from "react";

class WebCam extends Component {
  componentDidMount() {
    const videoL = document.querySelector('#videoL');
    const videoR = document.querySelector('#videoR');
    navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia || navigator.mediaDevices.oGetUserMedia;
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      })
      .then((stream) => {
        videoL.srcObject = stream;
        videoR.srcObject = stream;
      })
      .catch((error) => {
        console.log('error', error);
      });
    }
  };

  render() {

    return (
      <div id='videoBackgroundContainer'>
        <video
          id='videoL'
          playsInline
          muted
          loop
          autoPlay
          style={
            (!this.props.inVrMode) ? ({
              position: 'absolute',
              left: 0,
              width: '100%',
              zIndex: -6
            }) : ({
              position: 'absolute',
              left: 0,
              width: '50%',
              zIndex: -6
            })
          }
        />
        <video
          id='videoR'
          playsInline
          muted
          loop
          autoPlay
          style={
            (!this.props.inVrMode) ? ({
              display: 'none'
            }) : ({
              position: 'absolute',
              left: '50%',
              width: '50%',
              zIndex: -6
            })
          }
        />
      </div>
    )
  };
}

export default WebCam;
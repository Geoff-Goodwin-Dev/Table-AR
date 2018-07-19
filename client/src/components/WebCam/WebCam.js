import React, {Component} from "react";

class WebCam extends Component {
  state = {
    videoSrc: null
  };

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true}, this.handleVideo, this.videoError);
    }
  };

  handleVideo = (stream) => {
    // Update the state, triggering the component to re-render with the correct stream
    this.setState({videoSrc: window.URL.createObjectURL(stream)});
    console.log('video feed initiated');
  };

  videoError = () => {
    console.log('video error encountered');
  };

  render() {
    return (
        <video
          src={this.state.videoSrc}
          autoPlay="true"
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
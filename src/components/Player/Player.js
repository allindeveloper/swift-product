import React from "react";
import ReactPlayer from "react-player/lazy";
import "./player.scss";
const Player = ({ id, width, height }) => {
  return (
    <div id={id}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width={width}
        heigth={height}
        
      />
    </div>
  );
};
export default Player;

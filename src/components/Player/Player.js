import React from "react";
import ReactPlayer from "react-player/lazy";
import "./player.scss";
const Player = ({ id, width, height ,url,fallback,onReady,onError}) => {
  return (
    <div id={id}className='player-wrapper'>
      <ReactPlayer
        className="react-player"
        url={url}
        width={width}
        heigth={height}
        controls={true}
        fallback={fallback}
        onReady={onReady}
        onError={onError}
        allowFullScreen
      />
    </div>
  );
};
export default Player;

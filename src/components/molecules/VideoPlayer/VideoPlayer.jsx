import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import './VideoPlayer.css'

const VideoPlayer = ({videoLink, clickBtn}) => {
  return (
    <div className='video_play_div '>
    <div className='video_play_div_box'>
        <button className='video_play_div_close' onClick={clickBtn}><AiOutlineClose/></button>

        <iframe src={videoLink}
        allowFullScreen
        className="VideoPlayer"
        controls/>

    </div>
</div>
  );
};

export default VideoPlayer;

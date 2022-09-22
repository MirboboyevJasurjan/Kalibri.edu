import React from 'react';
import imgsctach from '../../images/scratch-1-1.png';
import './VideoOne.css'
import { BsFillPlayFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function VideoOne(props) {
    function ToTop(){
        window.scrollTo(0,0)
      }
    return (
        <>
            <section className="video-two">
                <div className="container">
                    <img src={imgsctach} alt="" className="video-two__scratch" />
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="video-two__content">
                                <div className="video-two__title">
                                Kipso one & only  <br /> mission is to extend <br /> your knowledge base
                                </div>
                                <Link to="/courses" onClick={ToTop} className="thm-btn">Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-lg-end justify-content-sm-start">
                            <div className="my-auto">
                                <div className="video-two__popup" tabindex="0" role="button">
                                    <BsFillPlayFill className='video_play-icon'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VideoOne;
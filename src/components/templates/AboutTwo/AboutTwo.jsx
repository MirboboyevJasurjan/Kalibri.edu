
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import about1 from "../../images/about2.jpg";
import { GiGiftOfKnowledge } from 'react-icons/gi';
import { FaBookReader } from 'react-icons/fa';
import './AboutTwo.css'
import { Link } from "react-router-dom";

export default function AboutTwo() {
  // constructor() {
  //   super();
  //   this.state = {
  //     startCounter: false
  //   };
  // }

  const [startCounter, setState] = useState(false)

  function onVisibilityChange(isVisible) {
    if (isVisible) {
      setState(true)
    }
  }
  // onVisibilityChange = (isVisible) => {
  //   if (isVisible) {
  //     this.setState({ startCounter: true });
  //   }
  // };
  function ToTop(){
    window.scrollTo(0,0)
  }


  return (
    <section className="about-two">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__content">
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  'Kalibri Education' <br />
                  online akademiyasi
                </h2>
              </div>
              <p className="about-two__text">
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humour or randomised words which don't look.
              </p>
              <div className="about-two__single-wrap d-flex">
                <div className="about-two__single">
                  <div className="about-two__single-icon">
                    <i><FaBookReader /></i>
                  </div>
                  <div className="about-two__single-content">
                    <p className="about-two__single-text">
                      Start learning from our experts
                    </p>
                  </div>
                </div>
                <div className="about-two__single">
                  <div className="about-two__single-icon">
                    <i><GiGiftOfKnowledge /></i>
                  </div>
                  <div className="about-two__single-content">
                    <p className="about-two__single-text">
                      Enhance your skills with us now
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/courses" onClick={ToTop} className="thm-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
            <div className="about-two__image">
              <span className="about-two__image-dots"></span>
              <img src={about1} alt="" />
              <div className="about-two__count">
                <div className="about-two__count-text">
                  Trusted by
                  <span className="counter">
                    <VisibilitySensor
                      onChange={onVisibilityChange}
                      offset={{ top: 10 }}
                      delayedCall
                    >
                      <CountUp end={"1000"} duration={3} />

                    </VisibilitySensor>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

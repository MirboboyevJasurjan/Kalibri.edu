import React, { Component } from "react";
import cta1 from "../../images/benifites.jpg";
import './CallToAction.css'
import { GrResources } from 'react-icons/gr';
import { Link } from "react-router-dom";
function ToTop(){
  window.scrollTo(0,0)
}
class CallToActionThree extends Component {

  render() {
    return (
      <section className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={cta1} className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                  'Kalibri Education' <br /> bilan o'rganishning afzalliklari
                  </h2>
                </div>
                <p className="cta-three__text">
                  There cursus massa at urnaaculis estie. Sed aliquamellus vitae
                  ultrs condmentum leo massa mollis estiegittis miristum nulla
                  sed medy fringilla vitae.
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <GrResources className="kipso_icons" />
                    <p className="cta-three__single-text">
                      Professional Courses
                    </p>
                  </div>
                  <div className="cta-three__single">
                  <GrResources className="kipso_icons" />
                    <p className="cta-three__single-text">Live Learning</p>
                  </div>

                  <div className="cta-three__single">
                  <GrResources className="kipso_icons" />
                    <p className="cta-three__single-text">Expert Teachers</p>
                  </div>
                </div>
                <Link to="/courses" onClick={ToTop} href="#none" className="thm-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToActionThree;

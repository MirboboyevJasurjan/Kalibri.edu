import React from "react";
import {FcManager} from 'react-icons/fc';
import {GrStatusPlaceholderSmall} from 'react-icons/gr';
import {MdPermContactCalendar} from 'react-icons/md'
import "./contact.css"

const Contact = () => {
  return (
    <div>
      <section className="contact-info-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-manager">
                    <FcManager />
                  </i>
                </div>
                <h2 className="contact-info-one__title">About Us </h2>
                <p className="contact-info-one__text">
                  Lorem ipsum is simply free text <br /> available in the market
                  to use <br />
                  deliver satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-placeholder">
                    <GrStatusPlaceholderSmall />
                  </i>
                </div>
                <h2 className="contact-info-one__title">Our Address</h2>
                <p className="contact-info-one__text">
                  855 Road Broklyn Street, <br />
                  600 New York, United States of <br /> America
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-info-one__single">
                <div className="contact-info-one__icon">
                  <i className="kipso-icon-contact">
                    <MdPermContactCalendar />
                  </i>
                </div>
                <h2 className="contact-info-one__title">Contact Info</h2>
                <p className="contact-info-one__text">
                  needhelp@kipso.com <br />
                  444 888 0000 <br /> &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="yandex_map">
        <iframe src="https://yandex.uz/map-widget/v1/-/CCUBuOQe9C" width="560" height="400" frameborder="1" allowfullscreen="true" className="yandex_map-full"></iframe></div>
    </div>
  );
};  

export default Contact; 

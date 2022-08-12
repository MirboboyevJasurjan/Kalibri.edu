import React from "react";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import footer1 from "../../images/galarey/galarey1.jpg";
import footer2 from "../../images/galarey/galarey2.jpg";
import footer3 from "../../images/galarey/galarey3.jpg";
import footer4 from "../../images/galarey/galarey4.jpg";
import footer5 from "../../images/galarey/galarey5.jpg";
import footer6 from "../../images/galarey/galarey6.jpg";
import './Footer.css'

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Courses</h2>
                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                      <h2>
                        <a href="course-details.html">
                          Introduction Web Design
                        </a>
                      </h2>
                      <p>Mike Hardson</p>
                    </li>
                    <li>
                      <h2>
                        <a href="course-details.html">
                          {" "}
                          Learning MBA Management{" "}
                        </a>
                      </h2>
                      <p>Jessica Brown</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">About</a>
                      </li>
                      <li>
                        <a href="#none">Overview</a>
                      </li>
                      <li>
                        <a href="#none">Teachers</a>
                      </li>
                      <li>
                        <a href="#none">Join Us</a>
                      </li>
                      <li>
                        <a href="#none">Our News</a>
                      </li>
                    </ul>

                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#none">Help </a>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <a href="#none">Register Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__gallery">
                  <h2 className="footer-widget__title footer__title__gallery">Gallery</h2>
                  <ul className="list-unstyled footer-widget__gallery-list">
                    <li>
                      <a href="#none">
                        <img src={footer1} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer2} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer3} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer4} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer5} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#none">
                        <img src={footer6} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                    Phasellus vehic sagittis euismod.
                  </p>
                  <div className="footer-widget__btn-block">
                    <Link to="/contact" className="thm-btn thm-btn-n">Contact</Link>
                    <Link to="" className="thm-btn thm-btn-n">Purchase</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container ">
            <p className="site-footer__copy">
              <span> &copy; Copyright 2020 by </span><a href="#none" className="layerdrops">QWERTY Al-FAJR </a>
            </p>
            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                onKeyDown={scrollTop}
                role="button"
                tabIndex={0}
                className="scroll-to-target site-footer__scroll-top"
              >
                <span className="FaArrowUp"><FaArrowUp /></span>
              </div>

              <a href="#none">
                <FaTwitter />
              </a>
              <a href="#none">
                <FaFacebook />
              </a>
              <a href="#none">
                <FaPinterest />
              </a>
              <a href="#none">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

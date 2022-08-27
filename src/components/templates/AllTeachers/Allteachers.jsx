import React from "react";
import { Link } from "react-router-dom";
import "./Allteachers.css";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import abdurahmon from "../../images/abdurahmon.jpg";
import jamshid from "../../images/jamshid.jpg";
import islom from "../../images/islom.jpg";
import Shukrullo from "../../images/shukrullo.jpg";
import ahmadjon from "../../images/ahmadjon.jpg";
import farhod from "../../images/farhod.jpg";

const Teachers = () => {
  const createTeacher = (avatar, name, job, about, socials) => {
    return { avatar, name, job, about, socials };
  };

  const teachers = [
    createTeacher(
      abdurahmon,
      "Sulaymonov Abdurahmon",
      "Frontend Developer",
      "JS, React",
      ["", "", ""]
    ),
    createTeacher(
      jamshid,
      "Jamshid Qayumov",
      "Frontend Developer",
      "JS, React, VUE ",
      ["", "", ""]
    ),
    createTeacher(
      islom,
      "Islom Jalolov",
      " SMM mentor ",
      "Instagram, Photoshop, Capcat ",
      ["", "", ""]
    ),
    createTeacher(
      Shukrullo,
      "Shukrullo Komiljonov",
      "Backend Developer",
      "NodeJs, Python ",
      ["", "", ""]
    ),
    createTeacher(
      ahmadjon,
      "Ahmadjon",
      "VFX designer",
      "After Effect, Premiere Pro  ",
      ["", "", ""]
    ),
    createTeacher(
      farhod,
      "Farhod",
      "Grafik Designer",
      "Photoshop, Figma",
      ["", "", ""]
    ),
  ];

  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="row">
          {teachers.map((e, i) => {
            return (
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={e.avatar} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teachersdetalis">{e.name}</Link>
                </h2>
                <p className="team-one__designation">{e.name}</p>
                <p className="team-one__text">
                  {e.about}
                </p>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                    <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                    <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>

          </div>
          )})}
          {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team2} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Christina Newman</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team3} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Gilbert Daniels</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team4} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Austin Caldwell</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team5} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Phoebe Park</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team6} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Matilda Hawkins</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team7} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Lizzie Butler</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={team8} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <Link to="/teacher-details">Trevor Turner</Link>
                </h2>
                <p className="team-one__designation">Teacher</p>
                <p className="team-one__text">
                  There are many varia of passages of lorem.
                </p>
              </div>
             <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                  <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                  <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                  <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                  <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Teachers;

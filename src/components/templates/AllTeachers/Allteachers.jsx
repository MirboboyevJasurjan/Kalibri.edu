import React from "react";
import { Link } from "react-router-dom";
import "./Allteachers.css";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import abdurahmon from "../../images/abdurahmon.jpg";
import jamshid from "../../images/jamshid.jpg";
import islom from "../../images/islom.jpg";
import Shukrullo from "../../images/shukrullo.jpg";
import ahmadjon from "../../images/ahmadjon.jpg";
import farhod from "../../images/farhod.jpg";

const Teachers = () => {
  const createTeacher = (id,avatar, name, job, about, socials) => {
    return { id, avatar, name, job, about, socials };
  };
  function ToTop(){
    window.scrollTo(0,0)
  }

  const teachers = [
    createTeacher(
      "teacher1",
      abdurahmon,
      "Sulaymonov Abdurahmon",
      "Frontend Developer",
      "JS, React",
      ["", "", ""]
    ),
    createTeacher(
      "teacher2",
      jamshid,
      "Jamshid Qayumov",
      "Frontend Developer",
      "JS, React, VUE ",
      ["", "", ""]
    ),
    createTeacher(
      "teacher3",
      islom,
      "Islom Jalolov",
      " SMM mentor ",
      "Instagram, Photoshop, Capcat ",
      ["", "", ""]
    ),
    createTeacher(
      "teacher4",
      Shukrullo,
      "Shukrullo Komiljonov",
      "Backend Developer",
      "NodeJs, Python ",
      ["", "", ""]
    ),
    createTeacher(
      "teacher5",
      ahmadjon,
      "Ahmadjon",
      "VFX designer",
      "After Effect, Premiere Pro  ",
      ["", "", ""]
    ),
    createTeacher(
      "teacher6",
      farhod,
      "Farhod",
      "Grafik Designer",
      "Photoshop, Figma",
      ["", "", ""]
    ),
    createTeacher(
      "teacher6",
      "https://avatars.githubusercontent.com/u/49445519?v=4",
      "Sulaymon",
      "Mobile DEV",
      "Flutter",
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
                  <Link to={`/teachersdetalis/${e.id}`} onClick={ToTop}>{e.name}</Link>
                </h2>
                <p className="team-one__designation">{e.job}</p>
                <p className="team-one__text">
                  {e.about}
                </p>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <i className="fab fa-twitter">
                    <FaTelegram />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-square">
                    <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-pinterest-p">
                    <FaYoutube />
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
  
        </div>
      </div>
    </section>
  );
};

export default Teachers;

import React from "react";
import { Link } from "react-router-dom";
import "./Allteachers.css";
import {
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import team1 from "../../images/team-1-1.jpg";
import team2 from "../../images/team-1-2.jpg";
import team3 from "../../images/team-1-3.jpg";
import team4 from "../../images/team-1-4.jpg";
import team5 from "../../images/team-1-1.jpg";
import team6 from "../../images/team-1-2.jpg";
import team7 from "../../images/team-1-3.jpg";
import team8 from "../../images/team-1-4.jpg";

const Teachers = () => {
  const createTeacher = (avatar, name, job, about, socials) => {
    return { avatar, name, job, about, socials };
  };

  const teachers = [
    createTeacher(
      team1,
      "Nurlan Karshiev",
      "Frontend Developer",
      "Lorem Ipsum Dolor !",
      ["", "", ""]
    ),
    createTeacher(
      team4,
      "Jamshid Qayumov",
      "Frontend Developer",
      "Lorem Ipsum Dolor !",
      ["", "", ""]
    ),
    createTeacher(
      team1,
      "Islom Jalolov",
      " SMM mentor ",
      "Lorem Ipsum Dolor !",
      ["", "", ""]
    ),
    createTeacher(
      team4,
      "Shukrullo Komiljonov",
      "Backend Developer",
      "Lorem Ipsum Dolor !",
      ["", "", ""]
    ),
    createTeacher(
      team1,
      "Ahmadjon",
      "VFX designer",
      "Lorem Ipsum Dolor !",
      ["", "", ""]
    ),
    createTeacher(
      team4,
      "Farhod",
      "Photo Designer",
      "Lorem Ipsum Dolor !",
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

import React, {useEffect, useState} from "react";
import "./Teacherdetails.css";
import certificate1 from "../../images/certificate-1-1.png";
import certificate2 from "../../images/certificate-1-2.png";
import teamd1 from "../../images/team-d-1.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import jamshid from "../../images/jamshid.jpg";
import axios from "axios";
import Teachers from "../AllTeachers/Allteachers";


const TeachersDetalis = () => {
  const [teacherInfo, setTeacherInfo] = useState([])
  const teacher_id = window.location.pathname.split("/").slice(-1);

    
  useEffect(() => {
    const getTeacherInfo = async () => {
      const res = await axios.get(
        `https://6309e6f632499100327d641a.mockapi.io/teachers/${teacher_id}`
        );
            
        setTeacherInfo(res.data);
        console.log(res)
     };
     getTeacherInfo();
  }, []);
  return (
    <section className="team-details">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="team-details__content">
              <h2 className="team-details__title">{teacherInfo.title}</h2>
              <p className="team-details__text">
                {teacherInfo.text}
              </p>
              <h3 className="team-details__subtitle">Certificate</h3>
              <ul className="list-unstyled team-details__certificate-list">
                <li>
                  <img src={certificate1} alt="" />
                </li>
                <li>
                  <img src={certificate2} alt="" />
                </li>
              </ul>

              <div className="progress-one__wrap">
                <div className="progress-one__single">
                  <div className="progress-one__top">
                    <h3 className="progress-one__title">English</h3>
                    <h3 className="progress-one__percent">
                      <span className="counter">98</span>%
                    </h3>
                  </div>
                  <div className="progress-one__bar">
                    <span
                      style={{ width: `98%` }}
                      className="wow slideInLeft"
                    ></span>
                  </div>
                </div>
                <div className="progress-one__single">
                  <div className="progress-one__top">
                    <h3 className="progress-one__title">French</h3>
                    <h3 className="progress-one__percent">
                      <span className="counter">64</span>%
                    </h3>
                  </div>
                  <div className="progress-one__bar">
                    <span
                      style={{ width: `64%` }}
                      className="wow slideInLeft"
                    ></span>
                  </div>
                </div>
                <div className="progress-one__single">
                  <div className="progress-one__top">
                    <h3 className="progress-one__title">Spanish</h3>
                    <h3 className="progress-one__percent">
                      <span className="counter">34</span>%
                    </h3>
                  </div>
                  <div className="progress-one__bar">
                    <span
                      style={{ width: `34%` }}
                      className="wow slideInLeft"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="team-one__single">
              <div className="team-one__image">
                <img src={teacherInfo.avatar} alt="" />
              </div>
              <div className="team-one__content">
                <h2 className="team-one__name">
                  <a href="/team-details">{teacherInfo.name}</a>
                </h2>
                <p className="team-one__designation">{teacherInfo.jobName}</p>
              </div>
              <div className="team-one__social">
                <a href="#none">
                  <BsTelegram />
                </a>
                <a href="#none">
                  <BsFacebook />
                </a>
                <a href="#none">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersDetalis;

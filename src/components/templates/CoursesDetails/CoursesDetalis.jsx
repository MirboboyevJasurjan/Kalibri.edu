import React, {useEffect, useState} from "react";
import axios from 'react-axios'
import team1 from "../../images/team-1-1.jpg";
import team2 from "../../images/team-1-2.jpg";
import courseD1 from "../../images/courses-details.jpg";
import lcImage1 from "../../images/team-1-4.jpg";
import lcImage2 from "../../images/team-1-2.jpg";
import lcImage3 from "../../images/team-1-3.jpg";
import './coursesdetails.css'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiFillFolderOpen } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BsPlayCircle } from 'react-icons/bs';
import { BsFlag } from 'react-icons/bs';
import { BsBell } from 'react-icons/bs';
import Course from "../Course/Course";

const CourseDetails = (props) => {
  const [courseInfo, setCourseInfo] = useState([])
  const id = window.location.pathname.split("/").slice(-1);

    
  useEffect(() => {
    const getCourseInfo = async () => {
      const response = await axios.get(
        `https://6309e6f632499100327d641a.mockapi.io/course/${id}`
        );
            
        setCourseInfo(response.data);
     };
    getCourseInfo();
  }, []);
  return (
    <section className="course-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="course-details__content">
              <p className="course-details__author">
                <img src={team1} alt="" />
                by <a href="#none">Addie Walters{courseInfo.teacher}</a>
              </p>

              <div className="course-details__top">
                <div className="course-details__top-left">
                  <h2 className="course-details__title">
                  Tahrirlash mahoratini oshiring
                  </h2>
                </div>
                <div className="course-details__top-right">
                  <a href="#none" className="course-one__category">
                    Marketing
                  </a>
                </div>
              </div>
              <div className="course-one__image">
                <img src={courseD1} alt="" />
                <i className="far fa-heart"></i>
              </div>
              <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                <li>
                  <a
                    className="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >
                    Umumiy koʻrinish
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    role="tab"
                    data-toggle="tab"
                    href="#curriculum"
                  >
                   O'quv dasturi

                  </a>
                </li>
                <li>
                  <a className="" role="tab" data-toggle="tab" href="#review">
                  Sharhlar
                  </a>
                </li>
              </ul>
              <div className="tab-content course-details__tab-content ">
                <div
                  className="tab-pane show   animated fadeInUp"
                  role="tabpanel"
                  id="overview"
                >
                  <p className="course-details__tab-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo molestias neque harum consectetur! Ipsam soluta quod sed dicta ut temporibus culpa ducimus? Atque corporis excepturi commodi minus quidem! Tenetur, numquam quia voluptatem impedit animi consectetur laudantium rem harum, quod rerum, inventore facilis nobis! Natus provident alias repellat, explicabo porro nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad magnam ratione cum nihil atque maxime voluptate minima nostrum eos maiores hic, alias laborum, similique numquam voluptas iure fugiat tempore, incidunt nam vel voluptatem. Praesentium repellendus quibusdam distinctio sit alias fuga voluptas dignissimos ea tempora dicta et, debitis autem recusandae adipisci minus sint odio corrupti ipsa placeat? Id illo eius accusantium iusto, blanditiis odio aperiam earum soluta. Et odit aperiam enim. Libero nihil aperiam ab sit adipisci itaque porro earum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vel fuga eius placeat odit ex vero ipsum suscipit, id
                  </p>
                  <br />
                  <ul className="list-unstyled course-details__overview-list">
                    <li>It has survived not only five centuries</li>
                    <li>Lorem Ipsum is simply dummy text of the new design</li>
                    <li>Printng and type setting ipsum</li>
                    <li>Take a look at our round up of the best shows</li>
                  </ul>
                </div>
                <div
                  className="tab-pane active animated fadeInUp"
                  role="tabpanel"
                  id="curriculum"
                >
                  <h3 className="course-details__tab-title">
                  Boshlang'ich daraja kursi
                  </h3>
                  <br />
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Tahririyatga kirish</a>{" "}
                        <span>Ko‘rib chiqish</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        16 daqiqa
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Tahrirlashning umumiy ko'rinishi</a>{" "}
                        <span>Ko‘rib chiqish</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        10 daqiqa
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Asosiy tahrirlash texnologiyasi</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Viktorina</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                      6 ta savol
                      </div>
                    </li>
                  </ul>
                  <br />
                  <br />
                  <h3 className="course-details__tab-title">
                  Oraliq daraja
                  </h3>
                  <br />
                  <p className="course-details__tab-text">
                    Aelltes port lacus quis enim var sed efficitur turpis gilla
                    sed sit Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since.
                  </p>
                  <br />
                  <ul className="course-details__curriculum-list list-unstyled">
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon video-icon">
                          <i className="fas fa-play"></i>
                        </div>
                        <a href="#none">Tahririyatga kirish</a>
                        <span>Ko‘rib chiqish</span>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        16 daqiqa
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon file-icon">
                          <i className="fas fa-folder"></i>
                        </div>
                        <a href="#none">Asosiy tahrirlash texnologiyasi</a>
                      </div>
                    </li>
                    <li>
                      <div className="course-details__curriculum-list-left">
                        <div className="course-details__meta-icon quiz-icon">
                          <i className="fas fa-comment"></i>
                        </div>
                        <a href="#none">Viktorina</a>
                      </div>
                      <div className="course-details__curriculum-list-right">
                        6 ta savol
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane  animated fadeInUp"
                  role="tabpanel"
                  id="review"
                >
                  <div className="row">
                    <div className="col-xl-7 d-flex">
                      <div className="course-details__progress my-auto">
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                            A'lo
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `95%` }}></span>
                          </div>
                          <p className="course-details__progress-count">5</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                          Juda yaxshi
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `65%` }}></span>
                          </div>
                          <p className="course-details__progress-count">2</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                          O'rtacha
                          </p>
                          <div className="course-details__progress-bar">
                            <span style={{ width: `33%` }}></span>
                          </div>
                          <p className="course-details__progress-count">1</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">Poor</p>
                          <div className="course-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="course-details__progress-count">0</p>
                        </div>
                        <div className="course-details__progress-item">
                          <p className="course-details__progress-text">
                          Qo'rqinchli
                          </p>
                          <div className="course-details__progress-bar">
                            <span
                              style={{ width: `0%` }}
                              className="no-bubble"
                            ></span>
                          </div>
                          <p className="course-details__progress-count">0</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                      <div className="course-details__review-box">
                        <p className="course-details__review-count">4.6</p>
                        <div className="course-details__review-stars">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star-half"></i>
                        </div>
                        <p className="course-details__review-text">
                        30 ta sharh
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="course-details__comment">
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src={team1} alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Steven Meyer
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="course-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="course-details__comment-single">
                      <div className="course-details__comment-top">
                        <div className="course-details__comment-img">
                          <img src={team2} alt="" />
                        </div>
                        <div className="course-details__comment-right">
                          <h2 className="course-details__comment-name">
                            Lina Kelley
                          </h2>
                          <div className="course-details__comment-meta">
                            <p className="course-details__comment-date">
                              26 July, 2019
                            </p>
                            <div className="course-details__comment-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star star-disabled"></i>
                              <i className="fa fa-star star-disabled"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="course-details__comment-text">
                        Lorem ipsum is simply free text used by copytyping
                        refreshing. Neque porro est qui dolorem ipsum quia quaed
                        inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <form action="#" className="course-details__comment-form">
                    <h2 className="course-details__title">Sharh qo'shing</h2>
                    <p className="course-details__comment-form-text">
                      Ushbu kursni baholaysizmi??{" "}
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                      <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star"></i>
                      </a>
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email Address" />
                      </div>
                      <div className="col-lg-12">
                        <textarea placeholder="Write Message"></textarea>
                        <button
                          type="submit"
                          className="thm-btn course-details__comment-form-btn"
                        >
                          Sharh qoldiring
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-details__price">
              <p className="course-details__price-text">Kurs narxi</p>
              <p className="course-details__price-amount">$18.00</p>
              <a href="#none" className="thm-btn course-details__price-btn">
              Ushbu kursni sotib oling
              </a>
            </div>

            <div className="course-details__meta">
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <AiOutlineClockCircle />
                </span>
                Davomiyligi: <span>10 soat</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <AiFillFolderOpen />
                </span>
                Ma'ruzalar: <span>6</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <BsPersonCircle />
                </span>
                O'quvchilar: <span>Max 4</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <BsPlayCircle />
                </span>
                Darsliklar: <span>8 soat</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <BsFlag />
                </span>
                Malaka darajasi: <span>Murakkab</span>
              </a>
              <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                  <BsBell />
                </span>
                Til: <span>Uzbek</span>
              </a>
            </div>
            <div className="course-details__list">
              <h2 className="course-details__list-title">Yangi Kurslar</h2>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage1} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Sulaymonov Abdurahmon</span>
                  </a>
                  <h3>
                    <a href="#none">Marketing strategies</a>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage2} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Qayumov Jamshid</span>
                  </a>
                  <h3>
                    <a href="#none">Marketing strategies</a>
                  </h3>
                </div>
              </div>
              <div className="course-details__list-item">
                <div className="course-details__list-img">
                  <img src={lcImage3} alt="" />
                </div>
                <div className="course-details__list-content">
                  <a className="course-details__list-author" href="#none">
                    by <span>Komiljonov Shukrullo</span>
                  </a>
                  <h3>
                    <a href="#none">Marketing strategies</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;

import React from "react";
import {Link} from 'react-router-dom';
import {BsFilePlus} from 'react-icons/bs';
import {AiOutlineCalendar, AiOutlineUser} from 'react-icons/ai';
import {FaComments} from 'react-icons/fa';
import './news.css';
import newsimg1 from '../../images/newimgs/newimg1.jpg'
import newsimg2 from '../../images/newimgs/newimg2.jpg'
import newsimg3 from '../../images/newimgs/newimg3.jpg'
import newsimg4 from '../../images/newimgs/newimg4.jpg'
import newsimg5 from '../../images/newimgs/newimg5.jpg'
import newsimg6 from '../../images/newimgs/newimg6.jpg'

const News = () => {
  return (
    <section className="blog-one  blog-one__home-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg1} alt="" />
                <Link to="/newsdetalis"  className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol">
                    <BsFilePlus />
                  </i>
                </Link>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiOutlineCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <Link href="news-details.html">
                    Summer high school journalism camp
                  </Link>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <Link to="/newsdetalis"   className="blog-one__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg2} alt="" />
                <Link to="/newsdetalis"  className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol">
                    <BsFilePlus />
                  </i>
                </Link>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiOutlineCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <Link href="news-details.html">
                    Summer high school journalism camp
                  </Link>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <Link to="/newsdetalis"   className="blog-one__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg3} alt="" />
                <Link to="/newsdetalis"  className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol">
                    <BsFilePlus />
                  </i>
                </Link>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiOutlineCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <Link href="news-details.html">
                    Summer high school journalism camp
                  </Link>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <Link to="/newsdetalis"   className="blog-one__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg4} alt="" />
                <Link to="/newsdetalis"  className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol">
                    <BsFilePlus />
                  </i>
                </Link>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiOutlineCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <Link href="news-details.html">
                    Summer high school journalism camp
                  </Link>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <Link to="/newsdetalis"   className="blog-one__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg5} alt="" />
                <Link to="/newsdetalis"  className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol">
                    <BsFilePlus />
                  </i>
                </Link>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiOutlineCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <Link href="news-details.html">
                    Summer high school journalism camp
                  </Link>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <Link to="/newsdetalis"   className="blog-one__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg6} alt="" />
                <Link to="/newsdetalis"  className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol">
                    <BsFilePlus />
                  </i>
                </Link>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#none"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiOutlineCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#none"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#none"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <Link href="news-details.html">
                    Summer high school journalism camp
                  </Link>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <Link to="/newsdetalis"   className="blog-one__link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
                
       
          </div>
      </div>
    </section>
  );
};

export default News;

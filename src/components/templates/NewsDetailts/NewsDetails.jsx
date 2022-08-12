import React from "react";
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaInstagram, FaPinterest, FaTwitter, FaFacebook } from "react-icons/fa";
import './newsdetails.css';
import newsimg4 from '../../images/newimgs/newimg2.jpg'

const NewsDetails = () => {
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsimg4} alt="" />
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted On Jan 19"
                  >
                    <i className="fa fa-calendar-alt">
                      <AiFillCalendar />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="No Comments"
                  >
                    <i className="fa fa-comments">
                      <FaComments />
                    </i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    href="#none"
                    data-original-title="Posted By Admin"
                  >
                    <i className="fa fa-user">
                      <AiOutlineUser />
                    </i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  Are you ready to become a best student
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="blog-one__text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of lorem ipsum amet finibus eros. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting.
                </p>
                <p className="blog-one__text">
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of lorem ipsum.
                </p>
              </div>
            </div>
            <div className="share-block">
              <div className="left-block">
                <p>
                  Tags: <a href="#none">Business,</a>{" "}
                  <a href="#none">Agency,</a> <a href="#none">Technology</a>
                </p>
              </div>
              <div className="social-block">
                <a href="#none">
                  <i className="fab fa-twitter">
                    <FaTwitter />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-f">
                    <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                    <FaPinterest />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-dribbble">
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;

import React,{useEffect, useState} from "react";
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";
import { FaComments, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaInstagram, FaPinterest, FaTwitter, FaFacebook } from "react-icons/fa";
import axios from "axios";
import './newsdetails.css';
import newsimg4 from '../../images/newimgs/newimg2.jpg'

const NewsDetails = ({img, details, blogOneText, id}) => {
  const [newsInfo, setNewsInfo] = useState([])
  const news_id = window.location.pathname.split("/").slice(-1);

    
  useEffect(() => {
    const getNewsInfo = async () => {
      const res = await axios.get(
        `https://6309e6f632499100327d641a.mockapi.io/news/${news_id}`
        );
            
        setNewsInfo(res.data);
        console.log(res)
     };
     getNewsInfo();
  }, []);
  return (
    <section className="blog-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img src={newsInfo.img} alt="" />
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
                  {newsInfo.title}
                </h2>
                <p className="blog-one__text">
                  {newsInfo.text1}
                </p>
                <p className="blog-one__text">
                  {newsInfo.text2}
                </p>
                <p className="blog-one__text">
                  {newsInfo.text3}
                </p>
              </div>
            </div>
            <div className="share-block">
              <div className="left-block">
                <p>
                  Tags: <a href="#none">{newsInfo.tags},</a>{" "}
                  <a href="#none">{newsInfo.tags},</a> <a href="#none">{newsInfo.tags}</a>
                </p>
              </div>
              <div className="social-block">
                <a href="#none">
                  <i className="fab fa-twitter">
                    <FaTelegram />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-facebook-f">
                    <FaFacebook />
                  </i>
                </a>
                <a href="#none">
                  <i className="fab fa-instagram">
                    <FaYoutube />
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

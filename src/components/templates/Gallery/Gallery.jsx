import React from "react";
import "./gallery.css";
import { AiOutlinePlus } from "react-icons/ai";
import galarey1 from "../../images/galarey/galarey1.jpg";
import galarey2 from "../../images/galarey/galarey2.jpg";
import galarey3 from "../../images/galarey/galarey3.jpg";
import galarey4 from "../../images/galarey/galarey4.jpg";
import galarey5 from "../../images/galarey/galarey5.jpg";
import galarey6 from "../../images/galarey/galarey6.jpg";
import galarey7 from "../../images/galarey/galarey7.jpg";
import galarey8 from "../../images/galarey/galarey8.jpg";
import galarey9 from "../../images/galarey/galarey9.jpg";

const Gallery = () => {
  return (
    <section className="gallery-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey1} alt="" />
              <a href={galarey1} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey2} alt="" />
              <a href={galarey2} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey3} alt="" />
              <a href={galarey3} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey4} alt="" />
              <a href={galarey4} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey5} alt="" />
              <a href={galarey5} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey6} alt="" />
              <a href={galarey6} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey7} alt="" />
              <a href={galarey7} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey8} alt="" />
              <a href={galarey8} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-one__single">
              <img src={galarey9} alt="" />
              <a href={galarey9} className="gallery-one__popup img-popup">
               <AiOutlinePlus className="gallery_plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import React from "react";
import "./TeachersHome.css";
import img1 from "../../images/teacher-circle.png";
import img2 from "../../images/teacher-circle2222.png";
function TeachersHome(props) {
  return (
    <>
      <div className="cta-four">
        <img src={img1} alt="" className="cta-four__stripe" />
        <img src={img2} alt="" className="cta-four__line" />
        <div className="container text-center">
          <div className="block-title">
            <h2 className="block-title__title"> Bizda o'z sohasining <br /> mutaxasislari bor</h2>
            <p className="cta-four__text">
            Lorem ipsum gravida nibh vel velit auctor aliquetnean sollicitudin, lorem quis bibendum auci elit <br />  consequat is simply free text available in the psutis sem nibh id eis sed odio sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeachersHome;

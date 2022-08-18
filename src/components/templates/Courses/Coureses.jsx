import "./courses.css";
import React from "react";
import { Link } from "react-router-dom";
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';
import course1 from "../../images/course-1-1.jpg";
import course2 from "../../images/course-1-2.jpg";
import course3 from "../../images/course-1-3.jpg";
import course4 from "../../images/course-1-4.jpg";
import course5 from "../../images/course-1-5.jpg";
import course6 from "../../images/course-1-6.jpg";
import team1 from "../../images/team-1-1.jpg";
import team2 from "../../images/team-1-2.jpg";
import team3 from "../../images/team-1-3.jpg";
import team4 from "../../images/team-1-4.jpg";
import team5 from "../../images/team-1-1.jpg";
import team6 from "../../images/team-1-2.jpg";

const Courses = () => {
  const menuHandler = () => {
    const element = document.querySelector('.like_icons1');
    const element2 = document.querySelector('.like_icons2');
    
    if (element.style.opacity === "1") {
      element.style.opacity = "0";
      element2.style.opacity = "1";
    } else {
      element.style.opacity = "1";
      element2.style.opacity = "0";
    }
  }

const courseCards =  [
  {
  "img": course1,
  "courseCategory": "Development",
  "byName": "Jasur",
  "courseDetals":"New react bootcamp",
  "hours":"10 Hours",
  "lectures":"6 Lectures",
  "price": "100$"

}
]
  return (
    

    <section className="course-one course-page">
       <div className="container">
          <div className="row">
            
            {courseCards.map((img, courseCategory, byName, courseDetals, hours, lectures, price  )=>{
              <div className="col-lg-4">
              <div className="course-one__single">
                <div className="course-one__image">
                  <img src={img} alt="" />
                  <i className="like_icons">
                    <AiOutlineHeart onClick={menuHandler} className="like_icons1" />
                    <AiFillHeart onClick={menuHandler} className="like_icons2" />
                  </i>
                </div>
                <div className="course-one__content">
                  <a href="#none" className="course-one__category">
                    {courseCategory}
                  </a>
                  <div className="course-one__admin">
                    <img src={img} alt="" />
                    by <Link to="/teachersdetalis">{byName}</Link>
                  </div>
                  <h2 className="course-one__title">
                    <Link to="/coursedetalis">{courseDetals}</Link>
                  </h2>
                  
                  <div className="course-one__meta">
                    <a href="/course-details">
                      <i className="far fa-clock"></i> {hours}
                    </a>
                    <a href="/course-details">
                      <i className="far fa-folder-open"></i> {lectures}
                    </a>
                    <a href="/course-details">{price}</a>
                  </div>
                  <a href="#none" className="course-one__link">
                    See Preview
                  </a>
                </div>
              </div>
            </div>

            })}

            
          

          </div>
        </div>
    </section>      
    // <section className="course-one course-page">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-4">
    //         <div className="course-one__single">
    //           <div className="course-one__image">
    //             <img src={course1} alt="" />
    //             <i className="like_icons">
    //               <AiOutlineHeart onClick={menuHandler} className="like_icons1" />
    //               <AiFillHeart onClick={menuHandler} className="like_icons2" />
    //             </i>
    //           </div>
    //           <div className="course-one__content">
    //             <a href="#none" className="course-one__category">
    //               development
    //             </a>
    //             <div className="course-one__admin">
    //               <img src={team1} alt="" />
    //               by <Link to="/teachersdetalis">Lou Guerrero</Link>
    //             </div>
    //             <h2 className="course-one__title">
    //               <Link to="/coursedetalis">New react bootcamp</Link>
    //             </h2>
                
    //             <div className="course-one__meta">
    //               <a href="/course-details">
    //                 <i className="far fa-clock"></i> 10 Hours
    //               </a>
    //               <a href="/course-details">
    //                 <i className="far fa-folder-open"></i> 6 Lectures
    //               </a>
    //               <a href="/course-details">$18</a>
    //             </div>
    //             <a href="#none" className="course-one__link">
    //               See Preview
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="course-one__single">
    //           <div className="course-one__image">
    //             <img src={course2} alt="" />
    //             <i className="like_icons">
    //               <AiOutlineHeart onClick={menuHandler} className="like_icons1" />
    //               <AiFillHeart onClick={menuHandler} className="like_icons2" />
    //             </i>
    //           </div>
    //           <div className="course-one__content">
    //             <a href="#none" className="course-one__category">
    //               It &amp; Software
    //             </a>
    //             <div className="course-one__admin">
    //               <img src={team2} alt="" />
    //               by <Link to="/teachersdetalis">Cora Diaz</Link>
    //             </div>
    //             <h2 className="course-one__title">
    //               <Link to="/coursedetalis">Improve editing sk</Link>
    //             </h2>
    //             <div className="course-one__meta">
    //               <a href="/course-details">
    //                 <i className="far fa-clock"></i> 10 Hours
    //               </a>
    //               <a href="/course-details">
    //                 <i className="far fa-folder-open"></i> 6 Lectures
    //               </a>
    //               <a href="/course-details">$18</a>
    //             </div>
    //             <a href="#none" className="course-one__link">
    //               See Preview
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="course-one__single">
    //           <div className="course-one__image">
    //             <img src={course3} alt="" />
    //             <i className="like_icons">
    //               <AiOutlineHeart className="like_icons1" />
    //               <AiFillHeart className="like_icons2" />
    //             </i>
    //           </div>
    //           <div className="course-one__content">
    //             <a href="#none" className="course-one__category">
    //               marketing
    //             </a>
    //             <div className="course-one__admin">
    //               <img src={team3} alt="" />
    //               by <Link to="/teachersdetalis">Ruth Becker</Link>
    //             </div>
    //             <h2 className="course-one__title">
    //               <Link to="/coursedetalis">Marketing strategi</Link>
    //             </h2>
    //             <div className="course-one__meta">
    //               <a href="/course-details">
    //                 <i className="far fa-clock"></i> 10 Hours
    //               </a>
    //               <a href="/course-details">
    //                 <i className="far fa-folder-open"></i> 6 Lectures
    //               </a>
    //               <a href="/course-details">$18</a>
    //             </div>
    //             <a href="#none" className="course-one__link">
    //               See Preview
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="course-one__single">
    //           <div className="course-one__image">
    //             <img src={course4} alt="" />
    //             <i className="like_icons">
    //               <AiOutlineHeart className="like_icons1" />
    //               <AiFillHeart className="like_icons2" />
    //             </i>
    //           </div>
    //           <div className="course-one__content">
    //             <a href="#none" className="course-one__category">
    //               Photography
    //             </a>
    //             <div className="course-one__admin">
    //               <img src={team4} alt="" />
    //               by <Link to="/teachersdetalis">Ernest Rodriquez</Link>
    //             </div>
    //             <h2 className="course-one__title">
    //               <Link to="/coursedetalis">Basics of photogra</Link>
    //             </h2>
    //             <div className="course-one__meta">
    //               <a href="/course-details">
    //                 <i className="far fa-clock"></i> 10 Hours
    //               </a>
    //               <a href="/course-details">
    //                 <i className="far fa-folder-open"></i> 6 Lectures
    //               </a>
    //               <a href="/course-details">$18</a>
    //             </div>
    //             <a href="#none" className="course-one__link">
    //               See Preview
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="course-one__single">
    //           <div className="course-one__image">
    //             <img src={course5} alt="" />
    //             <i className="like_icons">
    //               <AiOutlineHeart className="like_icons1" />
    //               <AiFillHeart className="like_icons2" />
    //             </i>
    //           </div>
    //           <div className="course-one__content">
    //             <a href="#none" className="course-one__category">
    //               marketing
    //             </a>
    //             <div className="course-one__admin">
    //               <img src={team5} alt="" />
    //               by <Link to="/teachersdetalis">Isabella Stanley</Link>
    //             </div>
    //             <h2 className="course-one__title">
    //               <Link to="/coursedetalis">Affiliate bootcamp</Link>
    //             </h2>
    //             <div className="course-one__meta">
    //               <a href="/course-details">
    //                 <i className="far fa-clock"></i> 10 Hours
    //               </a>
    //               <a href="/course-details">
    //                 <i className="far fa-folder-open"></i> 6 Lectures
    //               </a>
    //               <a href="/course-details">$18</a>
    //             </div>
    //             <a href="#none" className="course-one__link">
    //               See Preview
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className="course-one__single">
    //           <div className="course-one__image">
    //             <img src={course6} alt="" />
    //             <i className="like_icons">
    //               <AiOutlineHeart className="like_icons1" />
    //               <AiFillHeart className="like_icons2" />
    //             </i>
    //           </div>
    //           <div className="course-one__content">
    //             <a href="#none" className="course-one__category">
    //               Health &amp; Fitness
    //             </a>
    //             <div className="course-one__admin">
    //               <img src={team6} alt="" />
    //               by <Link to="/teachersdetalis">Katherine Collins</Link>
    //             </div>
    //             <h2 className="course-one__title">
    //               <Link to="/coursedetalis">Healthy workout ti</Link>
    //             </h2>
    //             <div className="course-one__meta">
    //               <a href="/course-details">
    //                 <i className="far fa-clock"></i> 10 Hours
    //               </a>
    //               <a href="/course-details">
    //                 <i className="far fa-folder-open"></i> 6 Lectures
    //               </a>
    //               <a href="/course-details">$18</a>
    //             </div>
    //             <a href="#none" className="course-one__link">
    //               See Preview
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="post-pagination">
    //       <a href="#none">
    //         <i className="fa fa-angle-double-left"><FaAngleDoubleLeft /></i>
    //       </a>
    //       <a className="active" href="#none">
    //         1
    //       </a>
    //       <a href="#none">2</a>
    //       <a href="#none">3</a>
    //       <a href="#none">4</a>
    //       <a href="#none">
    //         <i className="fa fa-angle-double-right">
    //           <FaAngleDoubleRight />
    //         </i>
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Courses;


import React, { useState } from "react";
import logo from "../../images/logo-dark.png";
import { Link } from "react-router-dom";
import "./NavOne.css";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaBars, FaPinterestP, FaTimes, FaPlus } from "react-icons/fa";

const NavOne = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [subMenu, setSubMenu] = useState(false);
  const addSubMenu = () => {
    setSubMenu(!subMenu);
  };

  const [subMenu2, setSubMenu2] = useState(false);
  const addSubMenu2 = () => {
    setSubMenu2(!subMenu2);
  };

  const [subMenu3, setSubMenu3] = useState(false);
  const addSubMenu3 = () => {
    setSubMenu3(!subMenu3);
  };
  const [subMenu5, setSubMenu5] = useState(false);
  const addSubMenu5 = () => {
    setSubMenu5(!subMenu5);
  };
  const [subMenu6, setSubMenu6] = useState(false);
  const addSubMenu6 = () => {
    setSubMenu6(!subMenu6);
  };

  return (
    <header className="site-header site-header__header-one ">
      <nav
        className={`navbar navbar-expand-md navbar-light header-navigation stricky}`}
      >
        <div className="container clearfixContent">
          <div className="logo-box clearfix">
            <Link to="/" className="navbar-brand">
              <img
                src={logo}
                className="main-logo"
                width="128"
                alt="Awesome alter text"
              />
            </Link>
            {/* <div className="header__social">
              <a href="#none">
                <AiOutlineTwitter />
              </a>
              <a href="#none">
                <AiFillFacebook />
              </a>
              <a href="#none">
                <FaPinterestP />
              </a>
              <a href="#none">
                <AiOutlineInstagram />
              </a>
            </div> */}
          </div>
          <div className={click ? "d-none" : "main-navigation"}>
            <ul className="navigation-box ">
              <li >
                <Link to="/">Bosh sahifa</Link>
              </li>
              <li >
                <Link to="/gallery">Galereya</Link>
              </li>
              <li>
                <Link to="/courses">Kurslar</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/courses">Kurslar</Link>
                  </li>
                  <li>
                    <Link to="/coursedetalis">Kurs haqida</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/teachers">Ustozlar</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/teachers">Ustozlar</Link>
                  </li>
                  <li>
                    <Link to="/teachersdetalis">Ustozlar haqida</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/news">Yangiliklar</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/news">Yangiliklar sahifasi</Link>
                  </li>
                  <li>
                    <Link to="/newsdetalis">Yangiliklar haqida</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Kontaktlar</Link>
              </li>
            </ul>
            {/* <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#none"
              >
                <AiOutlineSearch />
              </a>
            </div> */}
            <div className="site-header__decor">
              <div className="site-header__decor-row">
                <div className="site-header__decor-single">
                  <div className="site-header__decor-inner-1"></div>
                </div>
                <div className="site-header__decor-single">
                  <div className="site-header__decor-inner-2"></div>
                </div>
                <div className="site-header__decor-single">
                  <div className="site-header__decor-inner-3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>

          <div className={click ? "stricked-menu " : "d-none"}>
            <ul className="navigation-box">
              <li onClick={addSubMenu}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={addSubMenu2}>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li onClick={addSubMenu3}>
                <h6>Courses</h6>
                <ul className={subMenu3 ? "d-none" : "sub-menu"}>
                  <li>
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li>
                    <Link to="/coursedetalis">Courses Details</Link>
                  </li>
                </ul>
              </li>
              <li onClick={addSubMenu5}>
                <h6>Teachers</h6>
                <ul className={subMenu5 ? "d-none" : "sub-menu"}>
                  <li>
                    <Link to="/teachers">Teachers</Link>
                    <Link to="/teachersdetalis">Teachers Details</Link>
                  </li>
                </ul>
              </li>
              <li onClick={addSubMenu6}>
                <h6>News</h6>
                
                <ul className={subMenu6 ? "d-none" : "sub-menu"}>
                  <li>
                    <Link to="/news">News Page</Link>
                  </li>
                  <li>
                    <Link to="/newsdetalis">News Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            {/* <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#none"
              >
                <AiOutlineSearch />
              </a>
            </div> */}
            <div className="site-header__decor">
              <div className="site-header__decor-row">
                <div className="site-header__decor-single">
                  <div className="site-header__decor-inner-1"></div>
                </div>
                <div className="site-header__decor-single">
                  <div className="site-header__decor-inner-2"></div>
                </div>
                <div className="site-header__decor-single">
                  <div className="site-header__decor-inner-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavOne;

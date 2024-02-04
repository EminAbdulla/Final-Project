import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left__left">
          <Link to="/">
            <img
              src="https://rainbowit.net/html/nuron/assets/images/logo/logo-white.png"
              alt=""
            />
          </Link>
          {/* <Link to="/">
          <img
            src="https://rainbowit.net/html/nuron/assets/images/logo/logo-dark.png"
            alt=""
          />
        </Link> */}
        </div>
        <div className="header__left__right">
          <ul>
            <li>
              <Link className="dropdown__item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link className="dropdown__item" to="/#">
                Explore
              </Link>
            </li>
            <li>
              <Link className="dropdown__item" to="/#">
                Pages
              </Link>
            </li>
            <li>
              <Link className="dropdown__item" to="/#">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/#">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__right">
        <form>
          <input type="search" placeholder="Search Here" />
          <div className="search__icon">
            <button>
              <FaSearch />
            </button>
          </div>
        </form>
        <Link className="wallet" to="#">
          Wallet connect
        </Link>
        <div className="notification__container">
          <div className="notification__container__box">
            <Link className="notification">
              <p>
                <IoMdNotificationsOutline />
                <span>6</span>
              </p>
            </Link>
          </div>
        </div>
        <Link className="theme">
          <MdOutlineLightMode />
        </Link>
      </div>
    </header>
  );
};

export default Header;

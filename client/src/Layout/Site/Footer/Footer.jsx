import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__up">
        <div className="footer__up__left">
          <div className="footer__up__left__up">
            <div className="footer__logo">
              <img
                src="https://rainbowit.net/html/nuron/assets/images/logo/logo-white.png"
                alt=""
              />
            </div>
            <div className="footer__about">
              Created with the collaboration of over 60 of the world's best
              Nuron Artists.
            </div>
          </div>
          <div className="footer__up__left__down">
            <div className="footer__left__header">
              <h6>Get The Latest Nuron Updates</h6>
            </div>
            <div className="footer__left__input">
              <form>
                <input type="text" placeholder="Your username" />{" "}
                <button>Subscribe </button>
              </form>
            </div>
            <div className="footer__left__footer">
              Email is safe. We don't spam.
            </div>
          </div>
        </div>
        <div className="footer__up__left__middle">
          <div className="footer__up__middle__list">
            <h6>Nuron</h6>
            <ul>
              <li>
                <Link to="#">Protocol Explore</Link>
              </li>
              <li>
                <Link to="#">System Token</Link>
              </li>
              <li>
                <Link to="#">Otimize Time</Link>
              </li>
              <li>
                <Link to="#">Visual Checking</Link>
              </li>
              <li>
                <Link to="#">Fadeup System</Link>
              </li>
              <li>
                <Link to="#">Activity Log</Link>
              </li>
              <li>
                <Link to="#">System Auto Since</Link>
              </li>
            </ul>
          </div>
          <div className="footer__up__middle__list">
            <h6>Information</h6>
            <ul>
              <li>
                <Link to="#">Market Explore</Link>
              </li>
              <li>
                <Link to="#">Ready Token</Link>
              </li>
              <li>
                <Link to="#">Main Option</Link>
              </li>
              <li>
                <Link to="#">Product Checking</Link>
              </li>
              <li>
                <Link to="#">Blog Grid</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Fix Bug</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__up__left__right">
          <h6>Recent Sold Out</h6>
          <ul>
            <li>
              <div className="footer__up__left__thumbnail">
                <Link>
                  <img
                    src="https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-01.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="footer__up__left__content">
                <div className="footer__up__content__header">
                  <Link>#21 The Wonder</Link>
                </div>
                <div className="footer__up__content__middle">
                  <p>Highest bid 1/20</p>
                </div>
                <div className="footer__up__content__footer">
                  <span>0.244wETH</span>
                </div>
              </div>
            </li>
            <li style={{ borderTop: "1px solid #13131d", padding: "10px 0 0 0",margin:"0" }}>
              <div className="footer__up__left__thumbnail">
                <Link>
                  <img
                    src="https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-02.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="footer__up__left__content">
                <div className="footer__up__content__header">
                  <Link>Diamond Dog</Link>
                </div>
                <div className="footer__up__content__middle">
                  <p>Highest bid 1/20</p>
                </div>
                <div className="footer__up__content__footer">
                  <span>0.244wETH</span>
                </div>
              </div>
            </li>
            <li style={{ borderTop: "1px solid #13131d", padding: "10px 0 0 0" }}>
              <div className="footer__up__left__thumbnail">
                <Link>
                  <img
                    src="https://rainbowit.net/html/nuron/assets/images/portfolio/portfolio-03.jpg"
                    alt=""
                  />
                </Link>
              </div>
              <div className="footer__up__left__content">
                <div className="footer__up__content__header">
                  <Link>Morgan11</Link>
                </div>
                <div className="footer__up__content__middle">
                  <p>Highest bid 1/20</p>
                </div>
                <div className="footer__up__content__footer">
                  <span>0.244wETH</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__down">
        <div className="footer__down__left">
          <div className="footer__down__left__left">
            ©2022 Nuron, Inc. All rights reserved.
          </div>
          <div className="footer__down__left__right">
            <ul>
              <li>
                <Link>Terms</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__down__right">
          <ul>
            <li>
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FiTwitter />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FiLinkedin />
              </Link>
            </li>
            <li>
              <Link to="#">
                <MdMailOutline />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </footer>
  );
};
export default Footer;

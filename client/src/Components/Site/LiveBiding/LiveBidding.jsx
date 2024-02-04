import React from "react";
import "./LiveBiding.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const LiveBidding = () => {
  return (
    <section className="live__bidding">
      <div className="live__bidding__up">
        <h3>Live Bidding</h3>
      </div>
      <div className="live__bidding__down">
        <div className="live__bidding__slider">
          <div className="live__bidding__slider__previous">
            <button>
              <FaArrowLeft />
            </button>
          </div>
          <div className="live__bidding__slider__sliders"></div>
          <div className="live__bidding__slider__next">
            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveBidding;

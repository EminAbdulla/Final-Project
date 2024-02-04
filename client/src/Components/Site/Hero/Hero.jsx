import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__left__up">
          <div className="hero__left__up__header">
            <motion.h2
              initial={{ y: 30 }}
              animate={{ y: 0, opacity: [0, 1] }}
              transition={{ duration: "1", delay: "0.3" }}
            >
              Discover Digital Art, Collect and Sell Your Specific NFTs.
            </motion.h2>
          </div>
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: 0, opacity: [0, 1] }}
            transition={{ duration: "1", delay: "0.3" }}
            className="hero__left__up__content"
          >
            Partner with one of the world’s largest retailers to showcase your
            brand and products.
          </motion.div>
        </div>
        <div className="hero__left__down">
          <motion.button
            initial={{ y: 10}}
            animate={{ y: 0, opacity: [0, 1] }}
            transition={{ duration: "1", delay: "0.3" }}
          >
            Get Started
          </motion.button>
          <motion.button
            initial={{ y: 10}}
            animate={{ y: 0, opacity: [0, 1] }}
            transition={{ duration: "1", delay: "0.3" }}
          >
            Create
          </motion.button>
        </div>
      </div>
      <div className="hero__right">
        <img
          src="https://rainbowit.net/html/nuron/assets/images/slider/slider-1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;

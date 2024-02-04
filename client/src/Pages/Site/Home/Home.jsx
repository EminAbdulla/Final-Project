import React from "react";
import Hero from "../../../Components/Site/Hero/Hero";
import { Helmet } from "react-helmet";
import LiveBiding from "../../../Components/Site/LiveBiding/LiveBidding";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Default || Nuron - NFT Marketplace Templete</title>
      </Helmet>
      <Hero />
      <LiveBiding />
    </>
  );
};

export default Home;

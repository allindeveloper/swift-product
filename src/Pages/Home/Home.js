import React from "react";
import Header from "../../components/Header/Header";
import HorizonalRuler from "../../components/Ruler/HorizonalRuler";
import SpaceTop from "../../components/Space/SpaceTop";
import About from "../../components/UI/About";
import ApiService from "../../components/UI/ApiService";
import Footer from "../../components/UI/Footer";
import FooterEnd from "../../components/UI/FooterEnd";
import Partners from "../../components/UI/Partners";
import Services from "../../components/UI/Services";
const Home = () => {
  return (
    <>
      <div id="home">
        <Header />

        <SpaceTop length={30} />
        <About />
        <SpaceTop length={30} />

        <Partners />
        <SpaceTop length={60} />
        <Services />
        <ApiService />
        <SpaceTop length={190} />
        <Footer />
        <HorizonalRuler />
        <FooterEnd termsandconditionslink="" policylink="" />
      </div>
    </>
  );
};

export default Home;

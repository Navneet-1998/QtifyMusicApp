import React from "react";
import "./qtify.css";
import NavbarSection from "./navbarSection/navbar";
import HeroImage from "./heroSection/heroImage";
import {CardCarousel, CardCarousel2} from "./cardCarouselSection/cardCarousel";
import SongsFilter from "./filterSection/songsFilter";
import FAQs from "./FAQsSection/faqSection";


function Qtify() {
  return (
    <>
      <body style={{backgroundColor:"#121212", width:"100%", height:"100%"}}>
        {" "}
        <NavbarSection />
        <HeroImage />
        <CardCarousel/>
        <CardCarousel2/>
        <SongsFilter/>
        <div class="d-flex justify-content-center">
        <FAQs/>
        </div>
      </body>
    </>
  );
}

export default Qtify;

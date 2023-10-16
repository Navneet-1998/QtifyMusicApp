import React from "react";
import "./qtify.css";
import NavbarSection from "./navbarSection/navbar";
import HeroImage from "./heroSection/heroImage";
import CardSection from "./cardSection/card";


function Qtify() {
  return (
    <>
      <body style={{backgroundColor:"#121212", width:"100%", height:"100%"}}>
        {" "}
        <NavbarSection />
        <HeroImage />
        <div class="d-flex justify-content-center">
        <CardSection/>
        </div>
      </body>
    </>
  );
}

export default Qtify;

import React from "react";
import "./qtify.css";
import NavbarSection from "./navbarSection/navbar";
import HeroImage from "./heroSection/heroImage";

function Qtify() {
  return (
    <>
      <body style={{backgroundColor:"#121212", width:"100%", height:"100%"}}>
        {" "}
        <NavbarSection />
        <HeroImage />
      </body>
    </>
  );
}

export default Qtify;

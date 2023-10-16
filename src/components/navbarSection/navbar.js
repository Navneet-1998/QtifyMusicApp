import React from "react";
import "./navbar.css"
import SearchBar from "./search";
import Logo from "./logo";
import FeedbackButton from "./button";

function NavbarSection(){

    return (
        <>

          <nav
            class="navbar navbar-expand-sm"
            style={{ backgroundColor: "#66c65c", height: "70px" }}
          >
            <div class="container-fluid">
              <Logo/>
              <SearchBar/>
              <FeedbackButton/>
              
            </div>
          </nav>
    </>
    )
}


export default NavbarSection;
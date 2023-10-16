import React from "react";
import logo from "../../assets/Qtriplogo.png";

function Logo(){
    return (
        <>
        <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="###">
                <img src={logo} alt="logo" />
              </a>
        </>
    )
}


export default Logo;
import React from "react";
import {GrSearch} from "react-icons/gr"
import "./search.css"

function SearchBar(){
    return (
        <>
        <div
                class="collapse navbar-collapse d-flex justify-content-center "
                id="navbarTogglerDemo03"
              >
                <form
                  class="d-flex border border-black rounded "
                  role="search"
                  style={{ width: "45%", height: "40px" }}
                >
                  <input
                    class="form-control border-0 rounded-end-0 searching p-3 m-0 "
                    type="text"
                    placeholder="Search a album of your choice"
                    aria-label="Search"
                    style={{ width: "95%" }}
                  />
                  <div class="vl"></div>
                  <button
                    class="border-0 rounded-end "
                    type="submit"
                    style={{
                      backgroundColor: "white",
                      fontSize: "120%",
                      width: "13%",
                    }}
                  >
                    <GrSearch class="searchIcon"/>
                  </button>
                </form>
              </div>
            
        </>
    )
}


export default SearchBar;
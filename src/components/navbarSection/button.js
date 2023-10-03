import React from "react";
import "./button.css"

function FeedbackButton(){

    return (
        <>
          <button
                type="button"
                class="btn btn-dark buttonbtn " 
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <b class="check">Give Feedback</b>
              </button>
        </>
    )
}


export default FeedbackButton;
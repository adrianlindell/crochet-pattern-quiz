import React from "react";
import Form from "./Form";

function Quiz(props) {
  return (
    <div className="quiz">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 style={{fontSize: "2.5rem"}} >Which pattern matches your personality?</h1>
            <p style={{fontSize: "1.25rem"}} >
              Find out which easy-to-make crochet stuffed animal matches your personality by answering these 4 questions.
            </p>
          </div>
          <div class="col-lg-7" >
            <img
              class="img-fluid mb-4 mb-lg-0"
              src="https://images.unsplash.com/photo-1595301390417-c66647b47e9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3JvY2hldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt="yarn"
              style={{borderRadius: "1rem"}}
            />
          </div>
        </div>
      </div>
      <Form googleObj={props.googleObj} RESULTS_DATA={props.RESULTS_DATA} />
    </div>
  );
}

export default Quiz;